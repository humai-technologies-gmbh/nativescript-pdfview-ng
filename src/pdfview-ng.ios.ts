import { PDFViewNgCommon, srcProperty, defaultpageProperty } from "./pdfview-ng.common";
import * as fs from "tns-core-modules/file-system";
import * as http from "tns-core-modules/http";

export class PDFViewNg extends PDFViewNgCommon {
  nativeView: PDFView;
  value_src: string;
  value_default_page: string;

  private tempFolder = fs.knownFolders.temp().getFolder("PDFViewer.temp/");

  public get ios() {
    return this.nativeView as PDFView;
  }

  public set ios(value) {
    this.nativeView = value;
  }

  public loadPDF(src: string, default_page: number) : Promise<any> {
    console.log("PDFViewNg ios (Step 1): ", src, " page: ", default_page);
    let that = this;
    if (!src || !this.ios) {
      return Promise.reject('no parameters');
    }
    return Promise.resolve().then(() => {
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
      that.ios.document = document;
      that.ios.displayMode = 1;
      that.ios.autoScales = true;
      console.log(`PDFViewNg ios (Step 3) PDF loaded (Version: ${document.majorVersion}.${document.minorVersion}), Fixed local path: ` + src);
      let page = document.pageAtIndex(default_page);
      if (page) {
        setTimeout(function () {
          console.log("PDFViewNg ios (Step 4) Go to page: ", src, default_page);
          that.ios.goToFirstPage(null);
          that.ios.goToPage(page);
        }, 10);
      }
      else {
        console.error("PDFViewNg ios - could not find page");
      }
    });
  }

  public onLoaded() : void {
    super.onLoaded();
    this.loadPDF(this.value_src, parseInt(this.value_default_page));
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
}
