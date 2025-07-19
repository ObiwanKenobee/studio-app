export type Delegate = {
  id: string;
  name: string;
  title: string;
  category: 'Indigenous Nation' | 'Tech Elder' | 'Youth Voice' | 'Bioregion';
  bioregion: string;
  avatarUrl: string;
  bio: string;
  proposal: {
    title: string;
    summary: string;
  };
};
