import { makeStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    trStyle: {
      color: theme.palette.primary.main,
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.palette.secondary.main,
      borderBottomWidth: "2px",
      borderBottomStyle: "solid",
      borderBottomColor: theme.palette.primary.main,
    },
    theadStyle: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontFamily: theme.typography.fontFamily,
    },
    thtdStyle: {
      padding: "12px 15px",
      textAlign: "center",
    },
    tableStyle: {
      borderCollapse: "collapse",
      fontSize: theme.typography.fontSize,
      fontFamily: theme.typography.fontFamily,
      minWidth: theme.mixins.toolbar.minWidth,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "10%",
    },
    buttonStyle: {
      display: "block",
      margin: "auto",
      color: theme.palette.info.dark,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
    imageStyle: {
      textAlign: "center",
    },
  })
);
