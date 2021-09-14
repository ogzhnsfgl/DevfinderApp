import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const defaultValue = {
  login: "Ogzhnsfgl",
  id: 85337758,
  node_id: "MDQ6VXNlcjg1MzM3NzU4",
  avatar_url: "https://avatars.githubusercontent.com/u/85337758?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Ogzhnsfgl",
  html_url: "https://github.com/Ogzhnsfgl",
  followers_url: "https://api.github.com/users/Ogzhnsfgl/followers",
  following_url:
    "https://api.github.com/users/Ogzhnsfgl/following{/other_user}",
  gists_url: "https://api.github.com/users/Ogzhnsfgl/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Ogzhnsfgl/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Ogzhnsfgl/subscriptions",
  organizations_url: "https://api.github.com/users/Ogzhnsfgl/orgs",
  repos_url: "https://api.github.com/users/Ogzhnsfgl/repos",
  events_url: "https://api.github.com/users/Ogzhnsfgl/events{/privacy}",
  received_events_url: "https://api.github.com/users/Ogzhnsfgl/received_events",
  type: "User",
  site_admin: false,
  name: "Oguzhan",
  company: null,
  blog: "",
  location: "Istanbul",
  email: null,
  hireable: true,
  bio: 'Trying to become a "Dedicated Software Developer" ',
  twitter_username: "ogzhnn_",
  public_repos: 19,
  public_gists: 1,
  followers: 28,
  following: 36,
  created_at: "2021-06-04T07:53:24Z",
  updated_at: "2021-09-14T05:05:36Z",
};
const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(defaultValue);

  const values = { userData, setUserData };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
