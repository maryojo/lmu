import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const CustomAccordionItem = ({ title, children, className }) => {
  return (
    <Accordion className={className}>
      <AccordionSummary>
        <h3>{title}</h3>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

export default CustomAccordionItem;
