/** @format */
import PageLayout from "../_ui/pagelayout";
import { packaging } from "../data_exports";

const projectHeader = "Packaging";
const description =
  "Personal packaging work spanning style studies, characters, and one-off pieces.";

const PackagingPage = () => {
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={packaging}
    />
  );
};

export default PackagingPage;
