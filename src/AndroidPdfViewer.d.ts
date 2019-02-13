/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />

declare module com.github.barteksc.pdfviewer {
  export class PDFView extends android.view.SurfaceView {
    constructor(x,y);
    fromFile(file: java.io.File): Configurator;
    fromUri(uri: android.net.Uri): Configurator;
    setMinimumWidth(x: number): void;
    setMinimumHeight(y: number): void;
  }

  export module listener {
    interface IOnLoadCompleteListener {
      loadComplete(numPages: number): void;
    }

    export class OnLoadCompleteListener implements IOnLoadCompleteListener {
      constructor(implementation: IOnLoadCompleteListener);
      loadComplete(numPages: number): void;
    }
  }
}

import pdfviewer = com.github.barteksc.pdfviewer;

declare class Configurator {
  load(): void;
  defaultPage(pageNumber: number): this;
  pages(...pageNumbers: number[]): this;
  enableDoubletap(enable: boolean): this;
  enableSwipe(enable: boolean): this;
  onLoad(
    onLoadCompleteListener: pdfviewer.listener.OnLoadCompleteListener
  ): this;
  swipeHorizontal(horizontal: boolean): this;
}
