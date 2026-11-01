/** @format */
import PageLayout from "../_ui/pagelayout";
import { print } from "../data_exports";

const projectHeader = "Print";
const description =
  "Personal print work spanning style studies, characters, and one-off pieces.";

const PrintPage = () => {
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={print}
    />
  );
};

export default PrintPage;
