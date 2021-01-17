import React, { useContext, useState } from 'react';
import { Link2 } from 'react-feather';
import styled from 'styled-components';
import { FrameworksContext } from '../contexts/frameworks.context';
import { Section as _Section } from '../data/sections';
import { Block } from './Block';
import { HorizontalCollapseAnimation } from './HorizontalCollapseAnimation';
import { SnackBar } from './modals/SnackBar';

const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 16px;
  margin-left: 8px;
  margin-right: 8px;
  border-left: 4px solid #1abc9c;
  padding-left: 8px;
  cursor: pointer;
  & svg{
    display: block;
    padding-right: 8px;
  }
  & h2{
    margin: 0;
  }
`;

const P = styled.p`
  margin-left: 8px;
  margin-right: 8px;
`;

const NameFramework = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  color: #1abc9c;
`;

const MessageCopied = styled.div`
  padding: 8px;
  background-color: #fff;
  color: #000;
  border-radius: 8px;
`;

export const Section = (props: { section: _Section; keySection: string; }) => {

  const frameworksContext = useContext(FrameworksContext);

  const [linkVisible, setLinkVisible] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href.split('#')[0] + `#${props.keySection}`);
    setShowSnackBar(true);
  };

  return (
    <>
      <WrapperTitle
        id={props.keySection}
        onClick={copyLink}
        onMouseEnter={() => setLinkVisible(true)}
        onMouseLeave={() => setLinkVisible(false)}>
        <HorizontalCollapseAnimation visible={linkVisible}>
          <Link2 />
        </HorizontalCollapseAnimation>
        <h2>{props.section.name}</h2>
      </WrapperTitle>
      {
        props.section.description &&
        <P>{props.section.description}</P>
      }
      {
        frameworksContext.frameworks.map((framework, index) => (
          framework.data[props.keySection] &&
          <div key={index}>
            <NameFramework>-- {framework.name}</NameFramework>
            {
              framework.data[props.keySection].map((block, index) => (
                <Block block={block} key={index}></Block>
              ))
            }
          </div>
        ))
      }
      <SnackBar opened={showSnackBar} onClose={() => { setShowSnackBar(false); }}>
        <MessageCopied>Copied!</MessageCopied>
      </SnackBar>
    </>
  );
};