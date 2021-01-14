import { Block } from './block';

export const ReactData: { [key: string]: Block[]; } = {
  dataBinding: [
    {
      code: {
        language: 'HTML',
        code: '<div>{ myVariable }</div>',
      },
    },
  ],
  loop: [
    {
      code: {
        language: 'HTML',
        code: `{ 
  elements.map((element, index) => (
    <div key={index}>{ element }</div>
  ))
}`,
      },
    }
  ],
  parentChildCommunication: [
    {
      texts: [
        'Parent',
      ],
      code: {
        language: 'HTML',
        code: '<Child property={myVariable} />',
      },
    },
    {
      texts: [
        'Properties have to be defined in the parameter of the component.',
        'Child',
      ],
      code: {
        language: 'typescript',
        code: '(props: { property: string }) => {...}',
      },
    },
  ],
  childParentCommunication: [
    {
      texts: [
        'Child',
      ],
      code: {
        language: 'typescript',
        code: '(props: {setValue: (value: string) => {};}) => { }',
      },
    },
    {
      texts: [
        'Parent',
      ],
      code: {
        language: 'HTML',
        code: `<div setValue={(value)=>{ }}><div>`,
      },
    },
    {
      texts: [
        'Child',
      ],
      code: {
        language: 'typescript',
        code: `props.setValue('new value')`,
      },
    },
  ],
  sharingData: [
    {
      texts: [
        'Data is shared using Contexts.'
      ],
    },
  ],
  componentsThatDontGenerateNodes: [
    {
      texts: [
        'Fragments can be used to not generate any DOM element.',
      ],
      code: {
        language: 'typescript',
        code: `<>It just works!</>`,
      },
    },
    {
      texts: [
        'It would not generate any DOM element.',
      ],
    },
  ],
};