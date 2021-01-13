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
  childParentCommunication: {
    name: 'Child -> Parent communication',
  },
  sharingData: {
    name: 'Sharing data',
  },
  componentsThatDontGenerateNodes: {
    name: `Components that don't generate nodes`,
  },
};

export interface Section {
  name: string;
  description?: string;
}