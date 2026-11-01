/** @format */
import PageLayout from "../_ui/pagelayout";
import { packaging } from "../data_exports";

const projectHeader = "Email";
const description =
  "Personal email work spanning style studies, characters, and one-off pieces.";

const EmailPage = () => {
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={email}
    />
  );
};

export default EmailPage;
