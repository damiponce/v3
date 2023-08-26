type Project = {
  year: number;
  project: string;
  madeAt?: string;
  builtWith: string[];
  link?: {
    name: string;
    url: string;
  };
};

export const allProjects: Project[] = [
  {
    year: 2023,
    project: '',
    madeAt: '',
    builtWith: [''],
    link: { name: '', url: '' },
  },
];
