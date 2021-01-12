import { Block } from './block';

export const AngularData: { [key: string]: Block[]; } = {
  dataBinding: [
    {
      code: {
        language: 'HTML',
        code: '<div>{{ myVariable }}</div>',
      },
    }
  ],
  loop: [
    {
      code: {
        language: 'HTML',
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
        language: 'HTML',
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
};