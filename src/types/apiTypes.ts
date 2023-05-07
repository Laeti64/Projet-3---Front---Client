export type Tvideo = {
  id: string;
  title: string;
  description: string;
  display: boolean;
  thumbnailUrl: string;
  videoUrl: string;
  teaserUrl: string;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
  nbViews: number;
  duration: number;
};

export type TCategory = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TNewUser = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type TUserWithoutPassword = {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
  favorites_videos?: Tvideo[];
};

export type TTag = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TSectionDynamic = {
  id: string;
  title: string;
  description: string;
  max: number;
  isGrid: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type TSectionStatic = {
  id: string;
  title: string;
  description: string;
  isHero: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type TPage = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TPageSectionStatic = {
  id: string;
  position: number;
  createdAt: Date;
  updatedAt: Date;
};

export type TPageSectionDynamic = {
  id: string;
  position: number;
  createdAt: Date;
  updatedAt: Date;
};

export type TAdvertising = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TPageAdvertising = {
  id: string;
  position: number;
  createdAt: Date;
  updatedAt: Date;
  advertisings: TAdvertising;
};

export type TCredentials = {
  email: string;
  password: string;
};

export type AuthState = {
  user: TUserWithoutPassword | null;
  isAuth: boolean;
};
