import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import ViewCompactIcon from "@material-ui/icons/ViewCompact";
import BusinessIcon from "@material-ui/icons/Business";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Button, ButtonGroup, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: `${theme.shape.borderRadius}px 0px ${theme.shape.borderRadius}px 0px`,
    display: "grid",
    gridTemplateColumns: "minmax(min-content, auto) auto",
    gridTemplateRows: "1fr",
    height: "100%",
  },
  tabs: {
    backgroundColor: theme.palette.primary.dark,
    borderRight: `1px solid ${theme.palette.divider}`,
    maxHeight: "80%",
  },
  panel: {
    backgroundColor: theme.palette.primary.dark,
  },
  tab: {
    minWidth: "60px",
    maxWidth: "60px",
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  function TabPanel(props: {
    children?: React.ReactNode;
    index: any;
    value: any;
  }) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-controls={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        className={classes.panel}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  }

  return (
    <Box className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        selectionFollowsFocus
        scrollButtons="auto"
      >
        <Tab className={classes.tab} label={<ChevronLeftIcon />} />
        <Tab className={classes.tab} label={<PersonAddIcon />}></Tab>
        <Tab className={classes.tab} label={<ViewCompactIcon />} />
        <Tab className={classes.tab} label={<BusinessIcon />} />
        <Tab className={classes.tab} label={<PersonAddIcon />}></Tab>
        <Tab className={classes.tab} label={<ViewCompactIcon />} />
        <Tab className={classes.tab} label={<BusinessIcon />} />
        <Tab className={classes.tab} label={<PersonAddIcon />}></Tab>
        <Tab className={classes.tab} label={<ViewCompactIcon />} />
        <Tab className={classes.tab} label={<BusinessIcon />} />
        <Tab className={classes.tab} label={<PersonAddIcon />}></Tab>
        <Tab className={classes.tab} label={<ViewCompactIcon />} />
        <Tab className={classes.tab} label={<BusinessIcon />} />
        <Tab className={classes.tab} label={<PersonAddIcon />}></Tab>
        <Tab className={classes.tab} label={<ViewCompactIcon />} />
        <Tab className={classes.tab} label={<BusinessIcon />} />
      </Tabs>
      <Box>
        <TabPanel value={value} index={1}>
          <ButtonGroup>
            <Button variant="outlined" color="secondary">
              <PersonIcon></PersonIcon>New User
            </Button>
            <Button variant="outlined" color="secondary">
              <SupervisorAccountIcon></SupervisorAccountIcon>New Admin
            </Button>
          </ButtonGroup>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Sub menu items
        </TabPanel>
        <TabPanel value={value} index={3}>
          Another Sub menu
        </TabPanel>
      </Box>
    </Box>
  );
}
