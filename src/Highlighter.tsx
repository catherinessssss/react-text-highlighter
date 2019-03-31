import * as React from "react";

import HighlightSpan from "./HighlightSpan";
import NormalSpan from "./NormalSpan";
import styles from "./style.jss";


interface IProps {
  // TODO support searchWord: string[]
  searchWord: string;
  wholeText: string;
  caseSensitive?: boolean;
}
const Highlighter: React.FunctionComponent<IProps> = ({
  searchWord = "",
  wholeText = "",
  caseSensitive = false,
}) => {
  const { classes } = styles.attach();

  const {
    root,
  } = classes;

  const generateText = React.useMemo(() => {
    if (!!searchWord) {
      const flags = caseSensitive ? "g" : "gi";
      const regExp = new RegExp(searchWord, flags);
      const restWords = wholeText.split(regExp);
      const matchWords = wholeText.match(regExp) || [];

      if (!!matchWords.length) {
        let result = [];
        restWords.map((rest: string, index: number) => {
          if (!!rest) {
            result = result.concat(<NormalSpan text={rest} key={index * 2} />);
          }

          if (index !== restWords.length - 1) {
            result = result.concat(<HighlightSpan text={matchWords[index]} key={index * 2 + 1} />)
          }
        });
        return result;
      }
    }
    return wholeText;
  }, [caseSensitive, searchWord, wholeText]);


  return (
    <div className={root}>
      {generateText}
    </div>
  )
}

export default Highlighter;