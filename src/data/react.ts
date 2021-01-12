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
};