import { Tab, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JOB_PAGE_PATH } from "src/components/pages/job/job_page";
import { MACHINE_PAGE_PATH } from "src/components/pages/machine/machine_page";
import { DrinkTab } from "src/components/pages/order/tabs/drink_tab";

type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

/**
 * Page header.
 * This component changes URL when tab is clicked.
 */
export const Header = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Jobs"
            {...a11yProps(0)}
            onClick={() => {
              navigate(JOB_PAGE_PATH);
            }}
          />
          <Tab
            label="Machines"
            {...a11yProps(1)}
            onClick={() => {
              navigate(MACHINE_PAGE_PATH);
            }}
          />
          <Tab label="Settings" {...a11yProps(2)} />
          <Tab label="Docs" {...a11yProps(3)} />
          <Tab label="Others" {...a11yProps(4)} />
        </Tabs>
      </Box>
    </Box>
  );
};
