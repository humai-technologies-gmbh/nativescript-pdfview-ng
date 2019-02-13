/// <reference path="./AndroidPdfViewer.d.ts" />

import {
  PDFViewNgCommon,
  srcProperty,
  defaultpageProperty
} from "./pdfview-ng.common";
import * as fs from "tns-core-modules/file-system";
import pdfviewer = com.github.barteksc.pdfviewer;
import * as http from "tns-core-modules/http";

export class PDFViewNg extends PDFViewNgCommon {
  private promise: Promise<void>;
  private tempFolder = fs.knownFolders.temp().getFolder("PDFViewer.temp/");
  private value_src: string;
  private value_default_page: string = "0";

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

  public onLoaded(): void {
    super.onLoaded();
    this.loadPDF(this.value_src, parseInt(this.value_default_page));
  }

  public loadPDF(src: string, default_page: number) : Promise<any> {
    if (!src || !this.android) {
      return Promise.reject('no parameters');
    }

    return Promise.resolve()
      .then(() => {
        console.log("PDFViewNg Android (Step 1) Clear cache: " + src);
        return this.tempFolder.clear();
      })
      .then(() => {
        console.log("PDFViewNg Android (Step 2) Download: " + src);
        if (src.indexOf("http://") === 0 || src.indexOf("https://") === 0) {
          return http.getFile(src, `${this.tempFolder.path}/${Date.now()}.pdf`).then((file)=>{
            return file.path;
          });
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

        this.android
          .fromUri(uri)
          .onLoad(this.onLoadHandler)
          .defaultPage(default_page)
          .load();
      });
  }

  private onLoadHandler = (() => {
    const pdfViewRef = new WeakRef(this);

    return new pdfviewer.listener.OnLoadCompleteListener({
      loadComplete: numPages => {
        console.log("PDFViewNg Android (Step 5) Pages loaded: " + numPages);
        PDFViewNgCommon.notifyOfEvent(PDFViewNgCommon.loadEvent, pdfViewRef);
      }
    });
  })();
}
