import {
  Create,
  Explore,
  Home,
  Messages,
  Notifications,
  Profile,
  Reels,
  Search,
} from '@/pages';

export const ListOfRoutes = {
  home: () => <Home />,
  search: () => <Search />,
  explore: () => <Explore />,
  reels: () => <Reels />,
  messages: () => <Messages />,
  notifications: () => <Notifications />,
  create: () => <Create />,
  profile: () => <Profile />,
};
