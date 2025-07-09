import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container } from "@mui/material";

const PropertyDetail = () => {
  console.log("Property Detail Page Loaded");
  return (
    <>
      <Container>Property Detail</Container>
    </>
  );
};

export default withLayoutBasic(PropertyDetail);
