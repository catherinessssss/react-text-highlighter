import * as React from "react";

import styles from "./style.jss";

interface IProps {
  text: string;
}
const NormalSpan: React.FunctionComponent<IProps> = ({
  text = ""
}) => {

  const { classes } = styles.attach();

  const {
    text: textStyle,
  } = classes;


  return (
    <span className={textStyle}>{text}</span>
  )
}

export default NormalSpan;