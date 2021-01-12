import styled from 'styled-components';
import { Block as _Block } from '../data/block';
import { BlockCode } from './BlockCode';

const P = styled.p`
  margin-left: 8px;
  margin-right: 8px;
`;

export const Block = (props: { block: _Block; }) => {
  return (
    <>
      {
        props.block.texts &&
        <>
          {
            props.block.texts.map((text, index) => (
              <P key={index}>{text}</P>
            ))
          }
        </>
      }
      {
        props.block.code &&
        <BlockCode language={props.block.code?.language} code={props.block.code?.code}></BlockCode>
      }
    </>
  );
};