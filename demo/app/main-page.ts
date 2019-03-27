import * as observable from "tns-core-modules/data/observable";
import * as pages from "tns-core-modules/ui/page";
import { Observable } from "tns-core-modules/data/observable";
import { PDFViewNg } from "../../src";

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  let page = <pages.Page>args.object;
  page.bindingContext = new HelloWorldModel();
  let view: PDFViewNg = page.getViewById("pdfview");
  if (view) {
    view.on("error", () => {
      console.log("main-page.ts -> Error on load, from view event");
    });
    view.on("load", () => {
      let items = view.getBookmarksByLabel("PAGE 4");
      console.error("found:", items);
      if (items.length > 0) {
        view.goToBookmark(items[0]);
      }

      console.log("Author      : ", view.getAuthor());
      console.log("Subject     : ", view.getSubject());
      console.log("Title       : ", view.getTitle());
      console.log("Creator     : ", view.getCreator());
      console.log("CreationDate: ", view.getCreationDate());
      console.log("Pages       : ", view.getPageCount());
    });

    setTimeout(() => {
      view
        .loadPDF(
          "https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf"
        )
        .then(() => {
          console.log("loaded promise");
          view.goToPage(2);
        }).catch((err) => {
          console.error("Error in loadPDF", err);
        });
    }, 5000);
  }
}

export class HelloWorldModel extends Observable {
  constructor() {
    super();
  }
}
