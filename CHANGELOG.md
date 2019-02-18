# Version 1.0
First public release

# Version 1.1
It is now possible to jump directly to a PDF bookmark by the new interactive methods or by xml-parameter.

Added new methods for interactive control
* goToPage(index: number) : void;
* goToFirstPage() : void;
* goToLastPage() : void;
* getBookmarks(): Bookmark[];
* getBookmarkByIndexPath(indexes: number[]): Bookmark;
* getBookmarksByLabel(label: string): BookmarkCommon[];
* goToBookmark(bookmark: Bookmark): void;
* getAuthor(): string;

Added new parameters:
* bookmarklabel (string)
```
<ui:PDFViewNg src="~/test.pdf" bookmarklabel="PAGE 3"></ui:PDFViewNg>
```

* bookmarkpath (multiple integers separated by komma as string)
```
<ui:PDFViewNg src="~/test.pdf" bookmarkpath="2,0"></ui:PDFViewNg>
```

