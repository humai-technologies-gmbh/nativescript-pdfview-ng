import {
  PDFViewNgCommon,
  srcProperty,
  defaultpageProperty,
  bookmarkPathProperty,
  bookmarkLabelProperty,
  BookmarkCommon
} from "./pdfview-ng.common";
import * as fs from "tns-core-modules/file-system";

export class Bookmark extends BookmarkCommon {
  private nativeitem: PDFOutline;

  public get ios(): PDFOutline {
    return this.nativeitem;
  }

  public set ios(value: PDFOutline) {
    this.nativeitem = value;
  }

  public getTitle(): string {
    return this.nativeitem.label;
  }

  public getChildren(): Bookmark[] {
    let list: Bookmark[] = [];
    for (let i = 0; i < this.ios.numberOfChildren; i++) {
      let item = this.ios.childAtIndex(i);
      let boxed = new Bookmark();
      boxed.ios = item;
      list.push(boxed);
    }
    return list;
  }
}

export class PDFViewNg extends PDFViewNgCommon {
  nativeView: PDFView;
  private value_src: string;
  private value_default_page: string;
  private value_bookmark_path: number[];
  private value_bookmark_label: string;

  private tempFolder = fs.knownFolders.temp().getFolder("PDFViewer.temp/");

  public get ios() {
    return this.nativeView as PDFView;
  }

  public set ios(value) {
    this.nativeView = value;
  }

  private setTimeout(millis: number): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, millis);
    });
  }

  public loadPDF(src: string): Promise<any> {
    const pdfViewRef = new WeakRef(this);
    console.log("PDFViewNg ios (Step 1): ", src);
    let that = this;
    if (!src || !this.ios) {
      return Promise.reject("no parameters");
    }
    return Promise.resolve()
      .then(() => {
        let url: NSURL;
        if (src.indexOf("http://") === 0 || src.indexOf("https://") === 0) {
          url = NSURL.URLWithString(src);
        } else {
          if (src.indexOf("~") >= 0) {
            let r = fs.knownFolders.currentApp().path;
            src = src.replace("~", r);
          }
          url = NSURL.fileURLWithPath(src);
        }
        console.log("PDFViewNg ios (Step 2) url: ", url);

        let document = new PDFDocument({ URL: url });
        if (document) {
          that.ios.document = document;
          that.ios.displayMode = 1;
          that.ios.autoScales = true;
          console.log(
            `PDFViewNg ios (Step 3) PDF loaded (Version: ${
              document.majorVersion
            }.${document.minorVersion}), Fixed local path: ` + src
          );

          // allow load to be done
          return that.setTimeout(1);
        } else {
          console.error("PDFViewNg ios - could not load pdf file: " + url);
          PDFViewNgCommon.notifyOfEvent(PDFViewNgCommon.loadEvent, pdfViewRef);
          throw new Error("could not load pdf:" + url);
        }
      })
      .then(() => {
        if (that.value_bookmark_label) {
          console.log(
            "PDFViewNg ios (Step 4) Go to outlinelabel: ",
            src,
            that.value_bookmark_label
          );
          that.goToBookmarkByLabel("" + that.value_bookmark_label);
        } else if (that.value_bookmark_path) {
          console.log(
            "PDFViewNg ios (Step 4) Go to outlinepath: ",
            src,
            that.value_bookmark_path
          );
          that.goToBookmarkByPath(that.value_bookmark_path);
        } else {
          console.log(
            "PDFViewNg ios (Step 4) Go to page: ",
            src,
            that.value_default_page
          );
          that.goToPage(parseInt(that.value_default_page));
        }
        PDFViewNgCommon.notifyOfEvent(PDFViewNgCommon.loadEvent, pdfViewRef);
      });
  }

  public onLoaded(): void {
    super.onLoaded();
    this.loadPDF(this.value_src);
  }

  public goToPage(index: number): void {
    let page = this.ios.document.pageAtIndex(index);
    this.ios.goToFirstPage(null);
    this.ios.goToPage(page);
  }

  public goToFirstPage(): void {
    this.ios.goToFirstPage(null);
  }

  public goToLastPage(): void {
    this.ios.goToLastPage(null);
  }

  public goToBookmark(bookmark: Bookmark): void {
    this.ios.goToDestination(bookmark.ios.destination);
  }

  public getPageCount(): number {
    let document = this.ios.document;
    return document.pageCount;
  }

  public getBookmarks(): Bookmark[] {
    let document = this.ios.document;
    let outline = document.outlineRoot;
    if (outline) {
      let b = new Bookmark();
      b.ios = outline;
      return b.getChildren();
    }
    return [];
  }

  public getAuthor(): string {
    let meta = this.ios.document.documentAttributes;
    return meta.valueForKey(PDFDocumentAuthorAttribute) as string;
  }

  public createNativeView(): Object {
    let pdfView = PDFView.new();
    return pdfView;
  }

  public [defaultpageProperty.setNative](value: string) {
    this.value_default_page = value;
  }

  public [srcProperty.setNative](value: string) {
    this.value_src = value;
  }

  public [bookmarkPathProperty.setNative](value: string) {
    this.value_bookmark_path = value.split(",").map(item => parseInt(item));
  }

  public [bookmarkLabelProperty.setNative](value: string) {
    this.value_bookmark_label = value;
  }
}
