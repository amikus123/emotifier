import React, { ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // tabs classes
    paperRoot: {
      flexGrow: 1,
      width: "100%",
    },
    tabsRoot: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.primary.main,
      color: "white",
      overflow: "inherit",
      [theme.breakpoints.up("md")]: {
        groundColor: theme.palette.primary.main,
        width: "fit-content",
      },
    },

    tabsIndicator: {
      backgroundColor: "white",
    },
    tabsFlexContainer: {
      backgroundColor: theme.palette.primary.main,
      width: "100%",

      [theme.breakpoints.up("md")]: {
        width: "fit-content",
      },
    },

    // tab classes
    tabRoot: {
      minWidth: "20%",
      [theme.breakpoints.up("md")]: {
        minWidth: "5rem",
      },
    },
  })
);
interface Props {
  mobile: boolean;
}

export default function FeedTabs({ mobile = false }: Props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <PaperWrapper mobile={mobile}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        variant="fullWidth"
        centered
        classes={{
          indicator: classes.tabsIndicator,
          root: classes.tabsRoot,
          flexContainer: classes.tabsFlexContainer,
        }}
      >
        <Tab
          icon={<HomeIcon />}
          aria-label="phone"
          classes={{ root: classes.tabRoot }}
        />
        <Tab
          icon={<FavoriteIcon />}
          aria-label="favorite"
          classes={{ root: classes.tabRoot }}
        />
        <Tab
          icon={<MessageIcon />}
          aria-label="favorite"
          classes={{ root: classes.tabRoot }}
        />
        <Tab
          icon={<NotificationsIcon />}
          aria-label="favorite"
          classes={{ root: classes.tabRoot }}
        />
        <Tab
          icon={<OndemandVideoIcon />}
          aria-label="person"
          classes={{ root: classes.tabRoot }}
        />
      </Tabs>
    </PaperWrapper>
  );
}

interface PaperProps {
  mobile: boolean;
  children: ReactElement<any, any>;
}
const PaperWrapper = ({ mobile, children }: PaperProps) => {
  const classes = useStyles();

  return (
    <>
      {mobile ? (
        <Paper className={classes.paperRoot}>{children}</Paper>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
