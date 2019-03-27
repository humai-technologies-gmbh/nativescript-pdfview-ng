/// <reference path="./AndroidPdfViewer.d.ts" />

import {
  PDFViewNgCommon,
  srcProperty,
  defaultpageProperty,
  BookmarkCommon,
  bookmarkPathProperty,
  bookmarkLabelProperty
} from "./pdfview-ng.common";
import * as fs from "tns-core-modules/file-system";
import pdfviewer = com.github.barteksc.pdfviewer;
import * as http from "tns-core-modules/http";
import { knownFolders } from "tns-core-modules/file-system/file-system";

export class Bookmark extends BookmarkCommon {
  private nativeitem: pdfviewer.Bookmark;

  public get android(): pdfviewer.Bookmark {
    return this.nativeitem;
  }

  public set android(value: pdfviewer.Bookmark) {
    this.nativeitem = value;
  }

  public getTitle(): string {
    return this.nativeitem.getTitle();
  }

  public getChildren(): Bookmark[] {
    let list: Bookmark[] = [];
    let nativechildren = this.android.getChildren();
    for (let i = 0; i < nativechildren.size(); i++) {
      let item = nativechildren.get(i);
      let boxed = new Bookmark();
      boxed.android = item;
      list.push(boxed);
    }
    return list;
  }
}

export class PDFViewNg extends PDFViewNgCommon {
  private tempFolder = fs.knownFolders.temp().getFolder("PDFViewer.temp/");
  private value_src: string;
  private value_default_page: string = "0";
  private value_bookmark_path: number[];
  private value_bookmark_label: string;

  public get android() {
    return this.nativeView as pdfviewer.PDFView;
  }

  public set android(value) {
    this.nativeView = value;
  }

  public createNativeView(): Object {
    let pdfView = new pdfviewer.PDFView(this._context, void 0);
    return pdfView;
  }

  public [srcProperty.setNative](value: string) {
    this.value_src = value;
  }

  public [defaultpageProperty.setNative](value: string) {
    this.value_default_page = value;
  }

  public [bookmarkPathProperty.setNative](value: string) {
    this.value_bookmark_path = value.split(",").map(item => parseInt(item));
  }

  public [bookmarkLabelProperty.setNative](value: string) {
    this.value_bookmark_label = value;
  }

  public onLoaded(): void {
    super.onLoaded();
    const pdfViewRef = new WeakRef(this);
    this.loadPDF(this.value_src).catch((err) => {
      console.error("Error on load: ", err);
      PDFViewNgCommon.notifyOfEvent(
        PDFViewNgCommon.errorEvent,
        pdfViewRef
      );
    });
  }

  private async downloadFile(src: string): Promise<string> {
    let temp = knownFolders.temp().path + "/download.pdf";
    let response = await http.request({
      url: src,
      method: "GET"
    });
    if (response.statusCode < 200 || response.statusCode >= 400){
      throw new Error("download error, statuscode=" + response.statusCode);
    }
    response.content.toFile(temp);
    return temp;
  }

  public loadPDF(src: string): Promise<any> {
    let default_page = parseInt(this.value_default_page);
    let that = this;

    if (!src || !this.android) {
      return Promise.reject("no parameters");
    }

    return Promise.resolve()
      .then(() => {
        console.log("PDFViewNg Android (Step 1) Clear cache: " + src);
        return this.tempFolder.clear();
      })
      .then(() => {
        console.log("PDFViewNg Android (Step 2) Download: " + src);
        if (src.indexOf("http://") === 0 || src.indexOf("https://") === 0) {
          return this.downloadFile(src);
        } else {
          return src;
        }
      })
      .then(src => {
        console.log("PDFViewNg Android (Step 3) Download ok: " + src);
        if (src.indexOf("~") >= 0) {
          let r = fs.knownFolders.currentApp().path;
          src = src.replace("~", r);
        }
        if (src.indexOf("://") === -1) {
          src = "file://" + src;
        }
        console.log("PDFViewNg Android (Step 4) Resolved local path: " + src);
        const uri = android.net.Uri.parse(src);

        return that.loadPDFInternal(uri, src, default_page);
      });
  }

  private loadPDFInternal(uri: android.net.Uri, src: string, default_page: number) {
    let that = this;

    return new Promise((resolve, reject) => {
      let onLoadHandler = (() => {
        const pdfViewRef = new WeakRef(this);

        return new pdfviewer.listener.OnLoadCompleteListener({
          loadComplete: numPages => {
            console.log("PDFViewNg Android (Step 5) Pages loaded: " + numPages);

            setTimeout(() => {
              if (that.value_bookmark_label) {
                console.log(
                  "PDFViewNg Android (Step 6) Go to outlinelabel: ",
                  src,
                  that.value_bookmark_label
                );
                that.goToBookmarkByLabel("" + that.value_bookmark_label);
              } else if (that.value_bookmark_path) {
                console.log(
                  "PDFViewNg Android (Step 6) Go to outlinepath: ",
                  src,
                  that.value_bookmark_path
                );
                that.goToBookmarkByPath(that.value_bookmark_path);
              }

              PDFViewNgCommon.notifyOfEvent(
                PDFViewNgCommon.loadEvent,
                pdfViewRef
              );
              resolve();
            }, 1);
          }
        });
      })();

      this.android
            .fromUri(uri)
            .onLoad(onLoadHandler)
            .defaultPage(default_page)
            .load();
    });
  }

  public getPageCount(): number {
    return this.android.getPageCount();
  }

  public goToPage(index: number): void {
    this.android.jumpTo(index, false);
  }

  public goToFirstPage(): void {
    this.android.jumpTo(0, false);
  }

  public goToLastPage(): void {
    this.android.jumpTo(this.android.getPageCount() - 1, false);
  }

  public goToBookmark(bookmark: Bookmark): void {
    this.android.jumpTo(bookmark.android.getPageIdx(), false);
  }

  public getAuthor(): string {
    let meta = this.android.getDocumentMeta();
    return meta.getAuthor();
  }

  public getTitle(): string {
    let meta = this.android.getDocumentMeta();
    return meta.getTitle();
  }

  public getSubject(): string {
    let meta = this.android.getDocumentMeta();
    return meta.getSubject();
  }

  public getCreationDate(): string {
    let meta = this.android.getDocumentMeta();
    return meta.getCreationDate();
  }

  public getCreator(): string {
    let meta = this.android.getDocumentMeta();
    return meta.getCreator();
  }

  public getBookmarks(): Bookmark[] {
    let list: Bookmark[] = [];
    let tableOfContents = this.android.getTableOfContents();
    for (let i = 0; i < tableOfContents.size(); i++) {
      let item: pdfviewer.Bookmark = tableOfContents.get(i);
      let boxed = new Bookmark();
      boxed.android = item;
      list.push(boxed);
    }
    return list;
  }
}
