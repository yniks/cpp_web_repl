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
    placeItems: "stretch",
    background:'url(https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648)',
    backgroundPosition:'center',
    backgroundSize:'cover',
    // backdropFilter:
    // filter:'blur(1px) grayscale(1)',
  },
  head: {
    gridColumn: "1 / span 3",
    gridRow: "1/span 1",
  },
  content: {
    display: 'grid',
    placeContent:'center',
    gridColumn: "1 / span 3",
    gridRow: "2/span 2",
    placeSelf: "center",
    width:'100%',
    height:'100%',
    
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
