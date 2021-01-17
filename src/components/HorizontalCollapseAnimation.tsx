import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const Div = styled.div<{ width: number; }>`
  transition: opacity .25s .25s ease, width .25s ease;
  width: ${(props) => props.width + 'px'};
  &.enter{
    transition: opacity .25s .25s ease, width .25s ease;
    width: 0;
    opacity: 0;
  }
  &.enter-active{
    width: ${(props) => props.width + 'px'};
    opacity: 1;
  }
  &.exit{
    transition: opacity .25s ease, width .25s .25s ease;
    width: ${(props) => props.width + 'px'};
    opacity: 1;
  }
  &.exit-active{
    width: 0;
    opacity: 0;
  }
`;

export const HorizontalCollapseAnimation = (props: { visible: boolean, children: any; }) => {

  const [width, setWidth] = useState(0);

  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current) {
      setWidth(+ref.current.scrollWidth);
    }
  }, [ref, props.visible]);

  return (
    <CSSTransition in={props.visible} classNames="" timeout={500} nodeRef={ref} mountOnEnter unmountOnExit>
      <Div ref={ref} width={width}>
        {props.children}
      </Div>
    </CSSTransition>
  );

};