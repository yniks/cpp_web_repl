import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "auto 1fr 180px",
    gridTemplateRows: "auto 1fr 180px",
    gridAreas: '"head head head" "left content right" "left bottom right"',
    height: "100vh",
    width: "100vw",
    gridGap: "3px",
    boxSizing: "border-box",
    border: "3px transparent solid",
    placeItems: "stretch"
  },
  head: {
    gridColumn: "1 / span 3",
    gridRow: "1/span 1",
  },
  content: {
    gridColumn: "1 / span 3",
    gridRow: "2/span 2",
    placeSelf: "center",
  },
  sidebar: {
    gridColumn: "1 / span 1",
    gridRow: "2/span 2",
  },
});
export default function MainGrid({
  header,
  body,
  sidebar,
}: {
  header: any;
  body: any;
  sidebar: any;
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.head}>{header}</div>
      <div className={classes.content}>{body}</div>
      <div className={classes.sidebar}>{sidebar}</div>
    </div>
  );
}
