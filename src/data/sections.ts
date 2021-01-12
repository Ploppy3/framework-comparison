export const sections: { [key: string]: Section; } = {
  dataBinding: {
    name: 'Data binding',
    description: 'Data binding is the process that establishes a connection between the app UI and the data it displays.'
  },
  loop: {
    name: 'Loop',
  },
  parentChildCommunication: {
    name: 'Parent -> Child communication',
  },
};

export interface Section {
  name: string;
  description?: string;
}