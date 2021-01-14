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
        code: `<Child setValue={myCallback}></Child>`,
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
        'Data is shared using Contexts.',
        'Contexts are created using the createContext hook with default values.'
      ],
      code: {
        language: 'typescript',
        code: `const Context = createContext({
  name: 'default',
  setName: () => { },
});`,
      },
    },
    {
      texts: [
        'The value of the context is defined.',
      ],
      code: {
        language: 'typescript',
        code: `const contextValue = {
  name: 'John',
  setName: () => { },
};`,
      },
    },
    {
      texts: [
        'The value of the context is then provided in the template to all its children.',
      ],
      code: {
        language: 'HTML',
        code: `<Context.Provider value={contextValue}>
</Context.Provider>`,
      },
    },
    {
      texts: [
        'The value of the context is accessed using the useContext hook.',
      ],
      code: {
        language: 'typescript',
        code: `const contextValue = useContext(Context);`,
      },
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
        'It will not generate any DOM element.',
      ],
    },
  ],
};