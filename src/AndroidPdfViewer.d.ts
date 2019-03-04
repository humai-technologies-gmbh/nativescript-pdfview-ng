/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />

declare namespace com.github.barteksc.pdfviewer {
  export class PDFView extends android.view.SurfaceView {
    constructor(x, y);
    fromFile(file: java.io.File): Configurator;
    fromUri(uri: android.net.Uri): Configurator;
    setMinimumWidth(x: number): void;
    setMinimumHeight(y: number): void;
    jumpTo(page: number, withAnimation: boolean): void;
    getPageCount(): number;
    setNightMode(nightMode: boolean): void;
    zoomTo(zoom: number): void;
    getCurrentPage(): number;
    setDefaultPage(defaultPage: number): void;
    getDocumentMeta(): Meta;
    getTableOfContents(): java.util.List<Bookmark>;
  }

  export class Meta {
    getTitle(): string;
    getAuthor(): string;
    getSubject(): string;
    getKeywords(): string;
    getCreator(): string;
    getProducer(): string;
    getCreationDate(): string;
    getModDate(): string;
  }

  export class Bookmark {
    getChildren(): java.util.List<Bookmark>;
    hasChildren(): boolean;
    getTitle(): string;
    getPageIdx(): number;
  }

  export class Link {
    getDestPageIdx(): number;
    getUri(): string;
    getBounds(): RectF;
  }

  export class RectF {
    bottom: number;
    left: number;
    right: number;
    top: number;
  }

  export namespace listener {
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
