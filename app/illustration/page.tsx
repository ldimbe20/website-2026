/** @format */
import PageLayout from "../_ui/pagelayout";
import { illustrations } from "../data_exports";

const projectHeader = "Illustration";
const description =
  "Personal illustration work spanning style studies, characters, and one-off pieces.";

const IllustrationPage = () => {
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={illustrations}
    />
  );
};

export default IllustrationPage;
