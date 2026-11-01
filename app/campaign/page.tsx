/** @format */
import PageLayout from "../_ui/pagelayout";
import { campaign } from "../data_exports";

const projectHeader = "Campaign";
const description =
  "Personal campaign work spanning style studies, characters, and one-off pieces.";

const CampaignPage = () => {
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={campaign}
    />
  );
};

export default CampaignPage;
