import { useEffect, useRef } from 'react';
import 'highlight.js/styles/atom-one-dark.css';
import hljs from 'highlight.js';
import { Pre } from './elements/Pre';

export const BlockCode = (props: { language: string, code: string; }) => {

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const highlight = () => {
      // console.log('formating');
      (ref.current as HTMLDivElement).innerText = props.code;
      hljs.highlightBlock(ref.current as HTMLElement);
    };
    highlight();
  }, [ref, props.language, props.code]);

  return (
    <Pre>
      <code className={props.language} ref={ref}></code>
    </Pre>
  );
};