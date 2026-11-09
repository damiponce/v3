export type Design = {
  id: string;
  name: string;
  description: string;
  directory: string;
};

export type DesignSrc = {
  [key: string]: DesignImage[];
};

export type DesignImage = {
  design_id: number;
  id: number;
  design: string;
  public_id: string;
  format: string;
  width: number;
  height: number;
  ar: number;
  name?: string;
  description?: string;
};

const DESIGNS: Design[] = [
  {
    id: 'spotify-playlists',
    name: 'spotify-playlists',
    description:
      'Ullamco pariatur irure fugiat incididunt occaecat Lorem exercitation est ad quis ullamco id. Incididunt laborum quis tempor laboris duis quis excepteur aute est aliqua labore. Consectetur amet deserunt aute amet velit deserunt exercitation tempor ut esse id qui et amet. Aliqua consectetur ex ipsum dolore adipisicing.',
    directory: '/assets/design/spotify-playlists',
  },
  {
    id: 'general-designs',
    name: 'general-designs',
    description: '',
    directory: '/assets/design/general-designs',
  },
  // {
  //   id: 'ads',
  //   name: 'ads',
  //   description: '',
  //   directory: '/assets/design/ads',
  // },
  {
    id: 'school-projects',
    name: 'school-projects',
    description: '',
    directory: '/assets/design/school-projects',
  },
  {
    id: 'personal-logos',
    name: 'personal-logos',
    description: '',
    directory: '/assets/design/personal-logos',
  },
  {
    id: 'nasa-space-apps',
    name: 'nasa-space-apps',
    description: '',
    directory: '/assets/design/nasa-space-apps',
  },
];

export default DESIGNS;
