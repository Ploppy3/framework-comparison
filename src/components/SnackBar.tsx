import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

export const SnackBar = (props: { children: ReactNode; opened: boolean; onClose: () => void; }) => {

  const onTimeout = useCallback(() => {
    props.onClose();
  }, [props]);

  useEffect(() => {
    const timer = setTimeout(onTimeout, 2000);
    return () => clearTimeout(timer);
  }, [props, onTimeout]);

  const ref = useRef(null);

  const AnimatedSnacBar =
    <CSSTransition in={props.opened} classNames="fade" timeout={500} nodeRef={ref} mountOnEnter unmountOnExit>
      <Wrapper ref={ref}>{props.children}</Wrapper>
    </CSSTransition>;
  return createPortal(AnimatedSnacBar, document.body);
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 1px 1px rgba(16,27,30,0.15), 0 2px 2px rgba(16,27,30,0.15), 0 4px 4px rgba(16,27,30,0.15), 0 8px 8px rgba(16,27,30,0.15), 0 16px 16px rgba(16,27,30,0.15);
  transition: opacity .5s ease, transform .5s ease;
  &.fade-enter {
    opacity: 0;
    transform: translateY(100%) translateX(-50%);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
  &.fade-exit {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
  &.fade-exit-active {
    opacity: 0;
    transform: translateY(100%) translateX(-50%);
  }
`;