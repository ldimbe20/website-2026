/** @format */
// MOCKUP for review — sourced from your existing "clever" (gift bag) items
// as a stand-in for real "Packaging" content, just so the layout/gallery
// can be tested with real images. Swap the `items` source once categories
// are tagged for real.
import PageLayout from "../../_ui/pagelayout";
import { clever } from "../../data_exports";

const projectHeader = "Packaging";
const description =
  "Label and packaging design work — this page is a mockup using placeholder items while categories get sorted.";

// marking the first item as featured here just to demo the full-width
// tile — normally you'd set `featured: true` directly on the item in
// data_exports.ts for whichever piece you want to lead with
const items = clever.map((item, index) => ({
  ...item,
  featured: index === 0,
}));

const PackagingPage = () => {
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
      gallery="showcase"
    />
  );
};

export default PackagingPage;
