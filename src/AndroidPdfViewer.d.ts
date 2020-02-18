/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export class AnimationManager {
          public static class: java.lang.Class<com.github.barteksc.pdfviewer.AnimationManager>;
          public startXAnimation(param0: number, param1: number): void;
          public stopFling(): void;
          public constructor(param0: com.github.barteksc.pdfviewer.PDFView);
          public startFlingAnimation(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
          public startZoomAnimation(param0: number, param1: number, param2: number, param3: number): void;
          public isFlinging(): boolean;
          public startYAnimation(param0: number, param1: number): void;
          public startPageFlingAnimation(param0: number): void;
          public stopAll(): void;
        }
        export module AnimationManager {
          export class XAnimation {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.AnimationManager.XAnimation>;
            public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
            public onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator): void;
            public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
          }
          export class YAnimation {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.AnimationManager.YAnimation>;
            public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
            public onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator): void;
            public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
          }
          export class ZoomAnimation {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.AnimationManager.ZoomAnimation>;
            public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
            public onAnimationRepeat(param0: globalAndroid.animation.Animator): void;
            public onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator): void;
            public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
            public onAnimationStart(param0: globalAndroid.animation.Animator): void;
            public constructor(param0: com.github.barteksc.pdfviewer.AnimationManager, param1: number, param2: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export class BuildConfig {
          public static class: java.lang.Class<com.github.barteksc.pdfviewer.BuildConfig>;
          public static DEBUG: boolean;
          public static APPLICATION_ID: string;
          public static BUILD_TYPE: string;
          public static FLAVOR: string;
          public static VERSION_CODE: number;
          public static VERSION_NAME: string;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export class CacheManager {
          public static class: java.lang.Class<com.github.barteksc.pdfviewer.CacheManager>;
          public upPartIfContained(param0: number, param1: globalAndroid.graphics.RectF, param2: number): boolean;
          public getPageParts(): java.util.List<com.github.barteksc.pdfviewer.model.PagePart>;
          public recycle(): void;
          public constructor();
          public cachePart(param0: com.github.barteksc.pdfviewer.model.PagePart): void;
          public cacheThumbnail(param0: com.github.barteksc.pdfviewer.model.PagePart): void;
          public makeANewSet(): void;
          public containsThumbnail(param0: number, param1: globalAndroid.graphics.RectF): boolean;
          public getThumbnails(): java.util.List<com.github.barteksc.pdfviewer.model.PagePart>;
        }
        export module CacheManager {
          export class PagePartComparator extends java.util.Comparator<com.github.barteksc.pdfviewer.model.PagePart> {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.CacheManager.PagePartComparator>;
            public compare(param0: com.github.barteksc.pdfviewer.model.PagePart, param1: com.github.barteksc.pdfviewer.model.PagePart): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export class DecodingAsyncTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Throwable> {
          public static class: java.lang.Class<com.github.barteksc.pdfviewer.DecodingAsyncTask>;
          public onPostExecute(param0: java.lang.Throwable): void;
          public onCancelled(): void;
          public doInBackground(param0: native.Array<java.lang.Void>): java.lang.Throwable;
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export class DragPinchManager {
          public static class: java.lang.Class<com.github.barteksc.pdfviewer.DragPinchManager>;
          public onDoubleTap(param0: globalAndroid.view.MotionEvent): boolean;
          public onScale(param0: globalAndroid.view.ScaleGestureDetector): boolean;
          public onScaleBegin(param0: globalAndroid.view.ScaleGestureDetector): boolean;
          public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
          public onLongPress(param0: globalAndroid.view.MotionEvent): void;
          public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
          public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
          public onDown(param0: globalAndroid.view.MotionEvent): boolean;
          public onScaleEnd(param0: globalAndroid.view.ScaleGestureDetector): void;
          public onSingleTapConfirmed(param0: globalAndroid.view.MotionEvent): boolean;
          public onShowPress(param0: globalAndroid.view.MotionEvent): void;
          public onDoubleTapEvent(param0: globalAndroid.view.MotionEvent): boolean;
          public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export class PDFView {
          public static class: java.lang.Class<com.github.barteksc.pdfviewer.PDFView>;
          public static DEFAULT_MAX_SCALE: number;
          public static DEFAULT_MID_SCALE: number;
          public static DEFAULT_MIN_SCALE: number;
          public toRealScale(param0: number): number;
          public getDocumentMeta(): com.shockwave.pdfium.PdfDocument.Meta;
          public getPageSize(param0: number): com.shockwave.pdfium.util.SizeF;
          public isFitEachPage(): boolean;
          public recycle(): void;
          public getTableOfContents(): java.util.List<com.shockwave.pdfium.PdfDocument.Bookmark>;
          public isZooming(): boolean;
          public moveRelativeTo(param0: number, param1: number): void;
          public fromUri(param0: globalAndroid.net.Uri): com.github.barteksc.pdfviewer.PDFView.Configurator;
          public zoomWithAnimation(param0: number): void;
          public getPageFitPolicy(): com.github.barteksc.pdfviewer.util.FitPolicy;
          public getMaxZoom(): number;
          public doRenderDuringScale(): boolean;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public jumpTo(param0: number): void;
          public isAnnotationRendering(): boolean;
          public zoomWithAnimation(param0: number, param1: number, param2: number): void;
          public zoomCenteredRelativeTo(param0: number, param1: globalAndroid.graphics.PointF): void;
          public enableRenderDuringScale(param0: boolean): void;
          public isBestQuality(): boolean;
          public setPageSnap(param0: boolean): void;
          public jumpTo(param0: number, param1: boolean): void;
          public performPageSnap(): void;
          public onDraw(param0: globalAndroid.graphics.Canvas): void;
          public enableAnnotationRendering(param0: boolean): void;
          public fromAsset(param0: string): com.github.barteksc.pdfviewer.PDFView.Configurator;
          public setNightMode(param0: boolean): void;
          public onBitmapRendered(param0: com.github.barteksc.pdfviewer.model.PagePart): void;
          public computeScroll(): void;
          public getCurrentPage(): number;
          public setSwipeEnabled(param0: boolean): void;
          public canScrollVertically(param0: number): boolean;
          public isPageFlingEnabled(): boolean;
          public getCurrentYOffset(): number;
          public getMinZoom(): number;
          public fromFile(param0: java.io.File): com.github.barteksc.pdfviewer.PDFView.Configurator;
          public documentFitsView(): boolean;
          public isSwipeVertical(): boolean;
          public getMidZoom(): number;
          public setPositionOffset(param0: number, param1: boolean): void;
          public isSwipeEnabled(): boolean;
          public setMinZoom(param0: number): void;
          public useBestQuality(param0: boolean): void;
          public isAutoSpacingEnabled(): boolean;
          public getCurrentXOffset(): number;
          public zoomCenteredTo(param0: number, param1: globalAndroid.graphics.PointF): void;
          public setMaxZoom(param0: number): void;
          public fitToWidth(param0: number): void;
          public setPositionOffset(param0: number): void;
          public setPageFling(param0: boolean): void;
          public getLinks(param0: number): java.util.List<com.shockwave.pdfium.PdfDocument.Link>;
          public fromBytes(param0: native.Array<number>): com.github.barteksc.pdfviewer.PDFView.Configurator;
          public getZoom(): number;
          public pageFillsScreen(): boolean;
          public isPageSnap(): boolean;
          public onDetachedFromWindow(): void;
          public moveTo(param0: number, param1: number): void;
          public moveTo(param0: number, param1: number, param2: boolean): void;
          public getPageAtPositionOffset(param0: number): number;
          public fromStream(param0: java.io.InputStream): com.github.barteksc.pdfviewer.PDFView.Configurator;
          public setMidZoom(param0: number): void;
          public resetZoom(): void;
          public canScrollHorizontally(param0: number): boolean;
          public zoomTo(param0: number): void;
          public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
          public getPositionOffset(): number;
          public getPageCount(): number;
          public loadPages(): void;
          public stopFling(): void;
          public fromSource(param0: com.github.barteksc.pdfviewer.source.DocumentSource): com.github.barteksc.pdfviewer.PDFView.Configurator;
          public enableAntialiasing(param0: boolean): void;
          public isRecycled(): boolean;
          public toCurrentScale(param0: number): number;
          public isAntialiasing(): boolean;
          public resetZoomWithAnimation(): void;
          public getSpacingPx(): number;
        }
        export module PDFView {
          export class Configurator {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.PDFView.Configurator>;
            public onPageChange(param0: com.github.barteksc.pdfviewer.listener.OnPageChangeListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public enableAnnotationRendering(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public nightMode(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public spacing(param0: number): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public fitEachPage(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public pageSnap(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public enableAntialiasing(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public load(): void;
            public disableLongpress(): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public linkHandler(param0: com.github.barteksc.pdfviewer.link.LinkHandler): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public enableSwipe(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public defaultPage(param0: number): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public scrollHandle(param0: com.github.barteksc.pdfviewer.scroll.ScrollHandle): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public onRender(param0: com.github.barteksc.pdfviewer.listener.OnRenderListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public swipeHorizontal(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public enableDoubletap(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public password(param0: string): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public onPageError(param0: com.github.barteksc.pdfviewer.listener.OnPageErrorListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public onDrawAll(param0: com.github.barteksc.pdfviewer.listener.OnDrawListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public onLongPress(param0: com.github.barteksc.pdfviewer.listener.OnLongPressListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public onError(param0: com.github.barteksc.pdfviewer.listener.OnErrorListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public onLoad(param0: com.github.barteksc.pdfviewer.listener.OnLoadCompleteListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public onTap(param0: com.github.barteksc.pdfviewer.listener.OnTapListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public autoSpacing(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public pageFling(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public onDraw(param0: com.github.barteksc.pdfviewer.listener.OnDrawListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public onPageScroll(param0: com.github.barteksc.pdfviewer.listener.OnPageScrollListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public pageFitPolicy(param0: com.github.barteksc.pdfviewer.util.FitPolicy): com.github.barteksc.pdfviewer.PDFView.Configurator;
            public pages(param0: native.Array<number>): com.github.barteksc.pdfviewer.PDFView.Configurator;
          }
          export class ScrollDir {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.PDFView.ScrollDir>;
            public static NONE: com.github.barteksc.pdfviewer.PDFView.ScrollDir;
            public static START: com.github.barteksc.pdfviewer.PDFView.ScrollDir;
            public static END: com.github.barteksc.pdfviewer.PDFView.ScrollDir;
            public static values(): native.Array<com.github.barteksc.pdfviewer.PDFView.ScrollDir>;
            public static valueOf(param0: string): com.github.barteksc.pdfviewer.PDFView.ScrollDir;
          }
          export class State {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.PDFView.State>;
            public static DEFAULT: com.github.barteksc.pdfviewer.PDFView.State;
            public static LOADED: com.github.barteksc.pdfviewer.PDFView.State;
            public static SHOWN: com.github.barteksc.pdfviewer.PDFView.State;
            public static ERROR: com.github.barteksc.pdfviewer.PDFView.State;
            public static valueOf(param0: string): com.github.barteksc.pdfviewer.PDFView.State;
            public static values(): native.Array<com.github.barteksc.pdfviewer.PDFView.State>;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export class PagesLoader {
          public static class: java.lang.Class<com.github.barteksc.pdfviewer.PagesLoader>;
        }
        export module PagesLoader {
          export class GridSize {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.PagesLoader.GridSize>;
            public toString(): string;
          }
          export class Holder {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.PagesLoader.Holder>;
            public toString(): string;
          }
          export class RenderRange {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.PagesLoader.RenderRange>;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export class PdfFile {
          public static class: java.lang.Class<com.github.barteksc.pdfviewer.PdfFile>;
          public getDocLen(param0: number): number;
          public getPageSize(param0: number): com.shockwave.pdfium.util.SizeF;
          public getPageSpacing(param0: number, param1: number): number;
          public determineValidPageNumberFrom(param0: number): number;
          public pageHasError(param0: number): boolean;
          public dispose(): void;
          public getBookmarks(): java.util.List<com.shockwave.pdfium.PdfDocument.Bookmark>;
          public documentPage(param0: number): number;
          public getPageLength(param0: number, param1: number): number;
          public getMaxPageSize(): com.shockwave.pdfium.util.SizeF;
          public getScaledPageSize(param0: number, param1: number): com.shockwave.pdfium.util.SizeF;
          public mapRectToDevice(param0: number, param1: number, param2: number, param3: number, param4: number, param5: globalAndroid.graphics.RectF): globalAndroid.graphics.RectF;
          public getMaxPageWidth(): number;
          public getMetaData(): com.shockwave.pdfium.PdfDocument.Meta;
          public getPageOffset(param0: number, param1: number): number;
          public getSecondaryPageOffset(param0: number, param1: number): number;
          public getMaxPageHeight(): number;
          public getPageAtOffset(param0: number, param1: number): number;
          public getPagesCount(): number;
          public renderPageBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: globalAndroid.graphics.Rect, param3: boolean): void;
          public getPageLinks(param0: number): java.util.List<com.shockwave.pdfium.PdfDocument.Link>;
          public recalculatePageSizes(param0: com.shockwave.pdfium.util.Size): void;
          public openPage(param0: number): boolean;
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export class RenderingHandler {
          public static class: java.lang.Class<com.github.barteksc.pdfviewer.RenderingHandler>;
          public handleMessage(param0: globalAndroid.os.Message): void;
        }
        export module RenderingHandler {
          export class RenderingTask {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.RenderingHandler.RenderingTask>;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module exception {
          export class FileNotFoundException {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.exception.FileNotFoundException>;
            public constructor(param0: string, param1: java.lang.Throwable);
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module exception {
          export class PageRenderingException {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.exception.PageRenderingException>;
            public constructor(param0: number, param1: java.lang.Throwable);
            public getPage(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module link {
          export class DefaultLinkHandler extends com.github.barteksc.pdfviewer.link.LinkHandler {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.link.DefaultLinkHandler>;
            public handleLinkEvent(param0: com.github.barteksc.pdfviewer.model.LinkTapEvent): void;
            public constructor(param0: com.github.barteksc.pdfviewer.PDFView);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module link {
          export class LinkHandler {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.link.LinkHandler>;
            /**
             * Constructs a new instance of the com.github.barteksc.pdfviewer.link.LinkHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              handleLinkEvent(param0: com.github.barteksc.pdfviewer.model.LinkTapEvent): void;
            });
            public constructor();
            public handleLinkEvent(param0: com.github.barteksc.pdfviewer.model.LinkTapEvent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module listener {
          export class Callbacks {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.Callbacks>;
            public setOnDraw(param0: com.github.barteksc.pdfviewer.listener.OnDrawListener): void;
            public setOnError(param0: com.github.barteksc.pdfviewer.listener.OnErrorListener): void;
            public constructor();
            public callOnLoadComplete(param0: number): void;
            public setOnPageChange(param0: com.github.barteksc.pdfviewer.listener.OnPageChangeListener): void;
            public callOnLongPress(param0: globalAndroid.view.MotionEvent): void;
            public getOnError(): com.github.barteksc.pdfviewer.listener.OnErrorListener;
            public setOnPageScroll(param0: com.github.barteksc.pdfviewer.listener.OnPageScrollListener): void;
            public callLinkHandler(param0: com.github.barteksc.pdfviewer.model.LinkTapEvent): void;
            public callOnTap(param0: globalAndroid.view.MotionEvent): boolean;
            public setOnLoadComplete(param0: com.github.barteksc.pdfviewer.listener.OnLoadCompleteListener): void;
            public setOnPageError(param0: com.github.barteksc.pdfviewer.listener.OnPageErrorListener): void;
            public setOnRender(param0: com.github.barteksc.pdfviewer.listener.OnRenderListener): void;
            public callOnPageChange(param0: number, param1: number): void;
            public setOnDrawAll(param0: com.github.barteksc.pdfviewer.listener.OnDrawListener): void;
            public getOnDrawAll(): com.github.barteksc.pdfviewer.listener.OnDrawListener;
            public setOnLongPress(param0: com.github.barteksc.pdfviewer.listener.OnLongPressListener): void;
            public setLinkHandler(param0: com.github.barteksc.pdfviewer.link.LinkHandler): void;
            public callOnPageScroll(param0: number, param1: number): void;
            public callOnPageError(param0: number, param1: java.lang.Throwable): boolean;
            public setOnTap(param0: com.github.barteksc.pdfviewer.listener.OnTapListener): void;
            public callOnRender(param0: number): void;
            public getOnDraw(): com.github.barteksc.pdfviewer.listener.OnDrawListener;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module listener {
          export class OnDrawListener {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnDrawListener>;
            /**
             * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnDrawListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onLayerDrawn(param0: globalAndroid.graphics.Canvas, param1: number, param2: number, param3: number): void;
            });
            public constructor();
            public onLayerDrawn(param0: globalAndroid.graphics.Canvas, param1: number, param2: number, param3: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module listener {
          export class OnErrorListener {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnErrorListener>;
            /**
             * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onError(param0: java.lang.Throwable): void;
            });
            public constructor();
            public onError(param0: java.lang.Throwable): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module listener {
          export class OnLoadCompleteListener {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnLoadCompleteListener>;
            /**
             * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnLoadCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              loadComplete(param0: number): void;
            });
            public constructor();
            public loadComplete(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module listener {
          export class OnLongPressListener {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnLongPressListener>;
            /**
             * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnLongPressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onLongPress(param0: globalAndroid.view.MotionEvent): void;
            });
            public constructor();
            public onLongPress(param0: globalAndroid.view.MotionEvent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module listener {
          export class OnPageChangeListener {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnPageChangeListener>;
            /**
             * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnPageChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onPageChanged(param0: number, param1: number): void;
            });
            public constructor();
            public onPageChanged(param0: number, param1: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module listener {
          export class OnPageErrorListener {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnPageErrorListener>;
            /**
             * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnPageErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onPageError(param0: number, param1: java.lang.Throwable): void;
            });
            public constructor();
            public onPageError(param0: number, param1: java.lang.Throwable): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module listener {
          export class OnPageScrollListener {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnPageScrollListener>;
            /**
             * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnPageScrollListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onPageScrolled(param0: number, param1: number): void;
            });
            public constructor();
            public onPageScrolled(param0: number, param1: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module listener {
          export class OnRenderListener {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnRenderListener>;
            /**
             * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnRenderListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onInitiallyRendered(param0: number): void;
            });
            public constructor();
            public onInitiallyRendered(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module listener {
          export class OnTapListener {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnTapListener>;
            /**
             * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnTapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onTap(param0: globalAndroid.view.MotionEvent): boolean;
            });
            public constructor();
            public onTap(param0: globalAndroid.view.MotionEvent): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module model {
          export class LinkTapEvent {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.model.LinkTapEvent>;
            public getOriginalY(): number;
            public getDocumentY(): number;
            public getLink(): com.shockwave.pdfium.PdfDocument.Link;
            public getDocumentX(): number;
            public getMappedLinkRect(): globalAndroid.graphics.RectF;
            public getOriginalX(): number;
            public constructor(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.RectF, param5: com.shockwave.pdfium.PdfDocument.Link);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module model {
          export class PagePart {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.model.PagePart>;
            public constructor(param0: number, param1: globalAndroid.graphics.Bitmap, param2: globalAndroid.graphics.RectF, param3: boolean, param4: number);
            public getCacheOrder(): number;
            public setCacheOrder(param0: number): void;
            public getRenderedBitmap(): globalAndroid.graphics.Bitmap;
            public equals(param0: any): boolean;
            public getPage(): number;
            public getPageRelativeBounds(): globalAndroid.graphics.RectF;
            public isThumbnail(): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module scroll {
          export class DefaultScrollHandle implements com.github.barteksc.pdfviewer.scroll.ScrollHandle {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.scroll.DefaultScrollHandle>;
            public textView: globalAndroid.widget.TextView;
            public context: globalAndroid.content.Context;
            public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
            public constructor(param0: globalAndroid.content.Context);
            public hideDelayed(): void;
            public setScroll(param0: number): void;
            public shown(): boolean;
            public hide(): void;
            public setPageNum(param0: number): void;
            public constructor(param0: globalAndroid.content.Context, param1: boolean);
            public show(): void;
            public setTextColor(param0: number): void;
            public setupLayout(param0: com.github.barteksc.pdfviewer.PDFView): void;
            public destroyLayout(): void;
            public setTextSize(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module scroll {
          export class ScrollHandle {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.scroll.ScrollHandle>;
            /**
             * Constructs a new instance of the com.github.barteksc.pdfviewer.scroll.ScrollHandle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              setScroll(param0: number): void;
              setupLayout(param0: com.github.barteksc.pdfviewer.PDFView): void;
              destroyLayout(): void;
              setPageNum(param0: number): void;
              shown(): boolean;
              show(): void;
              hide(): void;
              hideDelayed(): void;
            });
            public constructor();
            public hideDelayed(): void;
            public show(): void;
            public setScroll(param0: number): void;
            public setupLayout(param0: com.github.barteksc.pdfviewer.PDFView): void;
            public destroyLayout(): void;
            public shown(): boolean;
            public hide(): void;
            public setPageNum(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module source {
          export class AssetSource extends com.github.barteksc.pdfviewer.source.DocumentSource {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.source.AssetSource>;
            public createDocument(param0: globalAndroid.content.Context, param1: com.shockwave.pdfium.PdfiumCore, param2: string): com.shockwave.pdfium.PdfDocument;
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module source {
          export class ByteArraySource extends com.github.barteksc.pdfviewer.source.DocumentSource {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.source.ByteArraySource>;
            public constructor(param0: native.Array<number>);
            public createDocument(param0: globalAndroid.content.Context, param1: com.shockwave.pdfium.PdfiumCore, param2: string): com.shockwave.pdfium.PdfDocument;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module source {
          export class DocumentSource {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.source.DocumentSource>;
            /**
             * Constructs a new instance of the com.github.barteksc.pdfviewer.source.DocumentSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              createDocument(param0: globalAndroid.content.Context, param1: com.shockwave.pdfium.PdfiumCore, param2: string): com.shockwave.pdfium.PdfDocument;
            });
            public constructor();
            public createDocument(param0: globalAndroid.content.Context, param1: com.shockwave.pdfium.PdfiumCore, param2: string): com.shockwave.pdfium.PdfDocument;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module source {
          export class FileSource extends com.github.barteksc.pdfviewer.source.DocumentSource {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.source.FileSource>;
            public constructor(param0: java.io.File);
            public createDocument(param0: globalAndroid.content.Context, param1: com.shockwave.pdfium.PdfiumCore, param2: string): com.shockwave.pdfium.PdfDocument;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module source {
          export class InputStreamSource extends com.github.barteksc.pdfviewer.source.DocumentSource {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.source.InputStreamSource>;
            public constructor(param0: java.io.InputStream);
            public createDocument(param0: globalAndroid.content.Context, param1: com.shockwave.pdfium.PdfiumCore, param2: string): com.shockwave.pdfium.PdfDocument;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module source {
          export class UriSource extends com.github.barteksc.pdfviewer.source.DocumentSource {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.source.UriSource>;
            public createDocument(param0: globalAndroid.content.Context, param1: com.shockwave.pdfium.PdfiumCore, param2: string): com.shockwave.pdfium.PdfDocument;
            public constructor(param0: globalAndroid.net.Uri);
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module util {
          export class ArrayUtils {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.ArrayUtils>;
            public static deleteDuplicatedPages(param0: native.Array<number>): native.Array<number>;
            public static calculateIndexesInDuplicateArray(param0: native.Array<number>): native.Array<number>;
            public static arrayToString(param0: native.Array<number>): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module util {
          export class Constants {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.Constants>;
            public static DEBUG_MODE: boolean;
            public static THUMBNAIL_RATIO: number;
            public static PART_SIZE: number;
            public static PRELOAD_OFFSET: number;
            public constructor();
          }
          export module Constants {
            export class Cache {
              public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.Constants.Cache>;
              public static CACHE_SIZE: number;
              public static THUMBNAILS_CACHE_SIZE: number;
              public constructor();
            }
            export class Pinch {
              public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.Constants.Pinch>;
              public static MAXIMUM_ZOOM: number;
              public static MINIMUM_ZOOM: number;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module util {
          export class FileUtils {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.FileUtils>;
            public static fileFromAsset(param0: globalAndroid.content.Context, param1: string): java.io.File;
            public static copy(param0: java.io.InputStream, param1: java.io.File): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module util {
          export class FitPolicy {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.FitPolicy>;
            public static WIDTH: com.github.barteksc.pdfviewer.util.FitPolicy;
            public static HEIGHT: com.github.barteksc.pdfviewer.util.FitPolicy;
            public static BOTH: com.github.barteksc.pdfviewer.util.FitPolicy;
            public static values(): native.Array<com.github.barteksc.pdfviewer.util.FitPolicy>;
            public static valueOf(param0: string): com.github.barteksc.pdfviewer.util.FitPolicy;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module util {
          export class MathUtils {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.MathUtils>;
            public static ceil(param0: number): number;
            public static limit(param0: number, param1: number, param2: number): number;
            public static max(param0: number, param1: number): number;
            public static min(param0: number, param1: number): number;
            public static floor(param0: number): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module util {
          export class PageSizeCalculator {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.PageSizeCalculator>;
            public calculate(param0: com.shockwave.pdfium.util.Size): com.shockwave.pdfium.util.SizeF;
            public getOptimalMaxWidthPageSize(): com.shockwave.pdfium.util.SizeF;
            public constructor(param0: com.github.barteksc.pdfviewer.util.FitPolicy, param1: com.shockwave.pdfium.util.Size, param2: com.shockwave.pdfium.util.Size, param3: com.shockwave.pdfium.util.Size, param4: boolean);
            public getOptimalMaxHeightPageSize(): com.shockwave.pdfium.util.SizeF;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module util {
          export class SnapEdge {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.SnapEdge>;
            public static START: com.github.barteksc.pdfviewer.util.SnapEdge;
            public static CENTER: com.github.barteksc.pdfviewer.util.SnapEdge;
            public static END: com.github.barteksc.pdfviewer.util.SnapEdge;
            public static NONE: com.github.barteksc.pdfviewer.util.SnapEdge;
            public static values(): native.Array<com.github.barteksc.pdfviewer.util.SnapEdge>;
            public static valueOf(param0: string): com.github.barteksc.pdfviewer.util.SnapEdge;
          }
        }
      }
    }
  }
}

declare module com {
  export module github {
    export module barteksc {
      export module pdfviewer {
        export module util {
          export class Util {
            public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.Util>;
            public constructor();
            public static toByteArray(param0: java.io.InputStream): native.Array<number>;
            public static getDP(param0: globalAndroid.content.Context, param1: number): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module shockwave {
    export module pdfium {
      export class BuildConfig {
        public static class: java.lang.Class<com.shockwave.pdfium.BuildConfig>;
        public static DEBUG: boolean;
        public static APPLICATION_ID: string;
        public static BUILD_TYPE: string;
        public static FLAVOR: string;
        public static VERSION_CODE: number;
        public static VERSION_NAME: string;
        public constructor();
      }
    }
  }
}

declare module com {
  export module shockwave {
    export module pdfium {
      export class PdfDocument {
        public static class: java.lang.Class<com.shockwave.pdfium.PdfDocument>;
        public hasPage(param0: number): boolean;
      }
      export module PdfDocument {
        export class Bookmark {
          public static class: java.lang.Class<com.shockwave.pdfium.PdfDocument.Bookmark>;
          public getTitle(): string;
          public constructor();
          public getChildren(): java.util.List<com.shockwave.pdfium.PdfDocument.Bookmark>;
          public getPageIdx(): number;
          public hasChildren(): boolean;
        }
        export class Link {
          public static class: java.lang.Class<com.shockwave.pdfium.PdfDocument.Link>;
          public getDestPageIdx(): java.lang.Integer;
          public constructor(param0: globalAndroid.graphics.RectF, param1: java.lang.Integer, param2: string);
          public getUri(): string;
          public getBounds(): globalAndroid.graphics.RectF;
        }
        export class Meta {
          public static class: java.lang.Class<com.shockwave.pdfium.PdfDocument.Meta>;
          public getTitle(): string;
          public getKeywords(): string;
          public getAuthor(): string;
          public getCreationDate(): string;
          public constructor();
          public getProducer(): string;
          public getCreator(): string;
          public getModDate(): string;
          public getSubject(): string;
        }
      }
    }
  }
}

declare module com {
  export module shockwave {
    export module pdfium {
      export class PdfPasswordException {
        public static class: java.lang.Class<com.shockwave.pdfium.PdfPasswordException>;
        public constructor(param0: string);
        public constructor();
      }
    }
  }
}

declare module com {
  export module shockwave {
    export module pdfium {
      export class PdfiumCore {
        public static class: java.lang.Class<com.shockwave.pdfium.PdfiumCore>;
        public mapPageCoordsToDevice(param0: com.shockwave.pdfium.PdfDocument, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): globalAndroid.graphics.Point;
        public renderPageBitmap(param0: com.shockwave.pdfium.PdfDocument, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean): void;
        public getTableOfContents(param0: com.shockwave.pdfium.PdfDocument): java.util.List<com.shockwave.pdfium.PdfDocument.Bookmark>;
        public renderPageBitmap(param0: com.shockwave.pdfium.PdfDocument, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number, param4: number, param5: number, param6: number): void;
        public newDocument(param0: native.Array<number>): com.shockwave.pdfium.PdfDocument;
        public openPage(param0: com.shockwave.pdfium.PdfDocument, param1: number): number;
        public newDocument(param0: globalAndroid.os.ParcelFileDescriptor): com.shockwave.pdfium.PdfDocument;
        public mapRectToDevice(param0: com.shockwave.pdfium.PdfDocument, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: globalAndroid.graphics.RectF): globalAndroid.graphics.RectF;
        public closeDocument(param0: com.shockwave.pdfium.PdfDocument): void;
        public getDocumentMeta(param0: com.shockwave.pdfium.PdfDocument): com.shockwave.pdfium.PdfDocument.Meta;
        public constructor(param0: globalAndroid.content.Context);
        public getPageHeight(param0: com.shockwave.pdfium.PdfDocument, param1: number): number;
        public getPageHeightPoint(param0: com.shockwave.pdfium.PdfDocument, param1: number): number;
        public getPageSize(param0: com.shockwave.pdfium.PdfDocument, param1: number): com.shockwave.pdfium.util.Size;
        public newDocument(param0: native.Array<number>, param1: string): com.shockwave.pdfium.PdfDocument;
        public getPageCount(param0: com.shockwave.pdfium.PdfDocument): number;
        public openPage(param0: com.shockwave.pdfium.PdfDocument, param1: number, param2: number): native.Array<number>;
        public newDocument(param0: globalAndroid.os.ParcelFileDescriptor, param1: string): com.shockwave.pdfium.PdfDocument;
        public getPageWidth(param0: com.shockwave.pdfium.PdfDocument, param1: number): number;
        public static getNumFd(param0: globalAndroid.os.ParcelFileDescriptor): number;
        public renderPage(param0: com.shockwave.pdfium.PdfDocument, param1: globalAndroid.view.Surface, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean): void;
        public getPageWidthPoint(param0: com.shockwave.pdfium.PdfDocument, param1: number): number;
        public renderPage(param0: com.shockwave.pdfium.PdfDocument, param1: globalAndroid.view.Surface, param2: number, param3: number, param4: number, param5: number, param6: number): void;
        public getPageLinks(param0: com.shockwave.pdfium.PdfDocument, param1: number): java.util.List<com.shockwave.pdfium.PdfDocument.Link>;
      }
    }
  }
}

declare module com {
  export module shockwave {
    export module pdfium {
      export module util {
        export class Size {
          public static class: java.lang.Class<com.shockwave.pdfium.util.Size>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getHeight(): number;
          public getWidth(): number;
          public hashCode(): number;
          public constructor(param0: number, param1: number);
        }
      }
    }
  }
}

declare module com {
  export module shockwave {
    export module pdfium {
      export module util {
        export class SizeF {
          public static class: java.lang.Class<com.shockwave.pdfium.util.SizeF>;
          public equals(param0: any): boolean;
          public toSize(): com.shockwave.pdfium.util.Size;
          public toString(): string;
          public getHeight(): number;
          public getWidth(): number;
          public hashCode(): number;
          public constructor(param0: number, param1: number);
        }
      }
    }
  }
}

//Generics information:

