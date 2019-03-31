import * as React from "react";

import styles from "./style.jss";

interface IProps {
  text: string;
}
const HighlightSpan: React.FunctionComponent<IProps> = ({
  text = ""
}) => {

  const { classes } = styles.attach();

  const {
    highlight,
  } = classes;


  return (
    <span className={highlight}>{text}</span>
  )
}

export default HighlightSpan;