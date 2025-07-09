import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container } from "@mui/material";

const PropertyList = () => {
  console.log("Property List Page Loaded");
  return (
    <>
      <Container>Property List</Container>
    </>
  );
};

export default withLayoutBasic(PropertyList);
