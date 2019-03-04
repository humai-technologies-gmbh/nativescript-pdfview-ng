import { PDFViewNgCommon, BookmarkCommon } from "./pdfview-ng.common";
export declare class PDFViewNg extends PDFViewNgCommon {
  loadPDF(src: string, default_page: number): Promise<any>;
  goToPage(index: number): void;
  goToFirstPage(): void;
  goToLastPage(): void;
  getBookmarks(): Bookmark[];
  getBookmarkByIndexPath(indexes: number[]): Bookmark;
  getBookmarksByLabel(label: string): BookmarkCommon[];
  goToBookmark(bookmark: Bookmark): void;

  getAuthor(): string;
  getPageCount(): number;
}

export declare class Bookmark extends BookmarkCommon {
  children: BookmarkCommon[];
  getTitle(): string;
  getChildren(): Bookmark[];
}
