import React, { ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // tabs classes
    root: {},
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
        maxWidth: "400px",
        margin: "0 1rem",
      },
    },

    tabsIndicator: {
      backgroundColor: "white",
    },
    tabsFlexContainer: {
      backgroundColor: theme.palette.primary.main,
      width: "100%",

      [theme.breakpoints.up("md")]: {
        maxWidth: "400px",
      },
    },

    // tab classes
    tabRoot: {
      minWidth: "20%",
      [theme.breakpoints.up("md")]: {
        minWidth: "5rem",
        maxWidth: "5rem",
      },
    },
  })
);
interface Props {
  mobile: boolean;
  className: string;
  setTabNumber: React.Dispatch<React.SetStateAction<number>>;
}

export default function FeedTabs({
  mobile = false,
  className = "",
  setTabNumber,
}: Props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const tabData = [
    { icon: <HomeIcon />, label: "HomePage" },
    { icon: <FavoriteIcon />, label: "Favorites" },
    { icon: <MessageIcon />, label: "Messages" },
    { icon: <NotificationsIcon />, label: "Notifications" },
    { icon: <MenuIcon />, label: "Menu" },
  ];
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
          root: `${classes.tabsRoot} ${className}`,
          flexContainer: classes.tabsFlexContainer,
        }}
      >
        {tabData.map((data, key) => {
          return (
            <Tab
              icon={data.icon}
              aria-label={data.label}
              onClick={() => {
                setTabNumber(key);
              }}
              key={key}
              classes={{ root: classes.tabRoot }}
            />
          );
        })}
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
