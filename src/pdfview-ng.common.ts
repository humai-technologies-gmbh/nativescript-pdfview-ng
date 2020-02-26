import { Property, View } from "tns-core-modules/ui/core/view";

export abstract class PDFViewNgCommon extends View {
  public src: string;
  public static loadEvent = "load";
  public static errorEvent = "error";

  constructor() {
    super();
  }

  abstract goToPage(index: number): void;
  abstract goToFirstPage(): void;
  abstract goToLastPage(): void;
  abstract goToBookmark(bookmark: BookmarkCommon): void;
  abstract getBookmarks(): BookmarkCommon[];
  abstract getAuthor(): string;
  abstract getTitle(): string;
  abstract getSubject(): string;
  abstract getCreationDate(): string;
  abstract getCreator(): string;

  abstract getPageCount(): number;
  abstract loadPDF(src: string, headers: Map<string, string>): Promise<any>;

  public goToBookmarkByPath(indexes: number[]): boolean {
    let item = this.getBookmarkByIndexPath(indexes);
    if (item) {
      this.goToBookmark(item);
      return true;
    } else {
      return false;
    }
  }

  public goToBookmarkByLabel(label: string): boolean {
    let items = this.getBookmarksByLabel(label);
    if (items.length > 0) {
      this.goToBookmark(items[0]);
      return true;
    }
    return false;
  }

  public getBookmarksByLabel(label: string): BookmarkCommon[] {
    let retval = this.getBookmarksByLabelInternal(label, this.getBookmarks());
    if (!retval) {
      console.error("could not find label:", label);
    }
    return retval;
  }

  private getBookmarksByLabelInternal(
    label: string,
    list: BookmarkCommon[]
  ): BookmarkCommon[] {
    let result = [];
    for (let i = 0; i < list.length; i++) {
      let item = list[i];
      if ("" + item.getTitle() === label) {
        result.push(item);
      } else {
        let retval = this.getBookmarksByLabelInternal(
          label,
          item.getChildren()
        );
        if (retval) {
          result = result.concat(retval);
        }
      }
    }
    return result;
  }

  public getBookmarkByIndexPath(indexes: number[]): BookmarkCommon {
    let current: BookmarkCommon = null;
    let list = this.getBookmarks();
    while (indexes.length > 0) {
      let indexCurrent = indexes.shift();
      if (indexCurrent >= 0 && indexCurrent < list.length) {
        current = list[indexCurrent];
        list = current.getChildren();
      } else {
        return null;
      }
    }
    return current;
  }

  public static notifyOfEvent(
    eventName: string,
    pdfViewRef: WeakRef<PDFViewNgCommon>
  ) {
    const viewer = pdfViewRef.get();
    if (viewer) {
      viewer.notify({ eventName, object: viewer });
    }
  }
}

export abstract class BookmarkCommon {
  children: BookmarkCommon[];
  abstract getTitle(): string;
  abstract getChildren(): BookmarkCommon[];
}

export const srcProperty = new Property<PDFViewNgCommon, string>({
  name: "src"
});
srcProperty.register(PDFViewNgCommon);

export const headersProperty = new Property<PDFViewNgCommon, Map<string, string>>({
    name: "headers"
});
headersProperty.register(PDFViewNgCommon);

export const defaultpageProperty = new Property<PDFViewNgCommon, string>({
  name: "defaultpage"
});
defaultpageProperty.register(PDFViewNgCommon);

export const bookmarkPathProperty = new Property<PDFViewNgCommon, string>({
  name: "bookmarkpath"
});
bookmarkPathProperty.register(PDFViewNgCommon);

export const bookmarkLabelProperty = new Property<PDFViewNgCommon, string>({
  name: "bookmarklabel"
});
bookmarkLabelProperty.register(PDFViewNgCommon);
