import { Block } from './block';

export const AngularData: { [key: string]: Block[]; } = {
  dataBinding: [
    {
      code: {
        language: 'html',
        code: '<div>{{ myVariable }}</div>',
      },
    }
  ],
  loop: [
    {
      code: {
        language: 'html',
        code: '<div *ngFor="let element of elements">{{ element }}</div>',
      },
    }
  ],
  parentChildCommunication: [
    {
      texts: [
        'Parent',
      ],
      code: {
        language: 'html',
        code: '<child [property]="myVariable"><child>',
      },
    },
    {
      texts: [
        'Properties have to be defined as properties of the component.',
        'Child',
      ],
      code: {
        language: 'typescript',
        code: `@Input() property: string;`,
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
        code: '@Output() property = new EventEmitter<string>();',
      },
    },
    {
      texts: [
        'Parent',
      ],
      code: {
        language: 'html',
        code: `<child (property)="parentProperty = $event"><child>`,
      },
    },
    {
      texts: [
        'Child',
      ],
      code: {
        language: 'typescript',
        code: `this.property.next('new value');`,
      },
    },
  ],
  sharingData: [
    {
      texts: [
        'Data is shared using Services.'
      ],
    },
  ],
  componentsThatDontGenerateNodes: [
    {
      texts: [
        'Components can be applied using HTML attributes.',
        'Using the following selector for the component:'
      ],
      code: {
        language: 'html',
        code: '[my-component]'
      },
    },
    {
      texts: [
        'Would apply the component on the following div element:',
      ],
      code: {
        language: 'html',
        code: '<div my-component></div>'
      },
    },
  ],
};