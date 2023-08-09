import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Typography
        style={{
          color: "black",
          width: "90%",
          margin: "10px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Common Q&A{" "}
      </Typography>
      <div className="flex-col justify-between">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              How can I browse and search for available sessions?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can browse and search for available sessions by logging into
              your account and clicking on the &quot;Browse Sessions&quot; or
              &quot;Search&quot; tab. You can filter sessions by date, time,
              location, and category to find sessions that match your
              preferences.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>How do I book a session?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To book a session, click on the session you are interested in and
              then click on the &quot;Book Now&quot; button. Follow the prompts
              to select the date and time for the session and complete the
              booking process
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              Can I cancel or reschedule a booked session?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can cancel or reschedule a booked session. Go to the
              &quot;My Bookings&quot; or &quot;My Account&quot; section, find
              the booked session, and click on the &quot;Cancel&quot; or
              &quot;Reschedule&quot; button. Please note that there may be
              cancellation or rescheduling policies in place.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>How do I make a payment for a session ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              After selecting a session and completing the booking process, you
              will be prompted to make a payment. You can choose from various
              payment methods, such as credit/debit card or online payment
              platforms.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              Can I provide feedback or suggestions about the system?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we value your feedback and suggestions! You can provide
              feedback through the &quot;Feedback&quot; or &quot;Contact
              Us&quot; section on the website or app. Your feedback helps us
              improve the system and enhance your experience.
            </Typography>
          </AccordionDetails>
        </Accordion>{" "}
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              How will I receive confirmation of my booking?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You will receive a confirmation email or notification once your
              booking is successfully completed. It will include all the details
              of your booked session.
            </Typography>
          </AccordionDetails>
        </Accordion>{" "}
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography> Is my payment information secure?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, your payment information is secure. We use industry-standard
              encryption and security measures to protect your payment details.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              Can I share my booked sessions with others or invite friends to
              join?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can share your booked sessions with others or invite
              friends to join. There may be sharing options available within the
              system, such as sharing via email or social media.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default CustomizedAccordions;
