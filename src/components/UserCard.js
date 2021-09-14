import { useUser } from "../context/userDataContext";
import { useTheme } from "../context/themeContext";
import moment from "moment";

const UserCard = () => {
  const { userData } = useUser();
  const { theme } = useTheme();

  console.log(userData);

  return (
    <div className={`card-container ${theme ? "dark" : "light"}`}>
      {userData.name && (
        <>
          <div className={`image-area ${theme ? "dark" : "light"}`}>
            <img src={userData.avatar_url} alt="profile-pic" />
          </div>
          <div className={`user-info ${theme ? "dark" : "light"}`}>
            <div className={`row first-row ${theme ? "dark" : "light"}`}>
              <div>
                <p className={`font-bg ${theme ? "dark" : "light"}`}>
                  <a
                    href={`${userData.html_url}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {userData.name}
                  </a>
                </p>
                <p className={`nick ${theme ? "dark" : "light"}`}>
                  <a
                    href={`${userData.html_url}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @{userData.login}
                  </a>
                </p>
              </div>
              <p className={`text-passive ${theme ? "dark" : "light"}`}>
                Joined {moment.utc(userData.created_at).format("MMMM Do, YYYY")}
              </p>
            </div>
            <div className={`row second-row ${theme ? "dark" : "light"}`}>
              <p className={`text-passive ${theme ? "dark" : "light"}`}>
                {userData.bio}
              </p>
            </div>
            <div className={`row detail-area ${theme ? "dark" : "light"}`}>
              <div>
                <p className={`text-passive ${theme ? "dark" : "light"}`}>
                  Repos
                </p>
                <p className={`font-bg ${theme ? "dark" : "light"}`}>
                  <a
                    href={`${userData.html_url}?tab=repositories`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {userData.public_repos}
                  </a>
                </p>
              </div>
              <div>
                <p className={`text-passive ${theme ? "dark" : "light"}`}>
                  Followers
                </p>
                <p className={`font-bg ${theme ? "dark" : "light"}`}>
                  {userData.followers}
                </p>
              </div>
              <div>
                <p className={`text-passive ${theme ? "dark" : "light"}`}>
                  Following
                </p>
                <p className={`font-bg ${theme ? "dark" : "light"}`}>
                  {userData.following}
                </p>
              </div>
            </div>
            <div className={`row last-row ${theme ? "dark" : "light"}`}>
              <p
                className={` ${
                  userData.location ? "text-active" : "text-passive"
                } ${theme ? "dark" : "light"}`}
              >
                <i className="fas fa-map-marker-alt"></i>
                {userData.location ? userData.location : "Not available"}
              </p>
              <p
                className={` ${
                  userData.twitter_username ? "text-active" : "text-passive"
                }  ${theme ? "dark" : "light"}`}
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`${
                    userData.twitter_username
                      ? `http://twitter.com/${userData.twitter_username}`
                      : "#"
                  }`}
                >
                  <i className={`fab fa-twitter`}></i>
                  {userData.twitter_username
                    ? userData.twitter_username
                    : "Not available"}
                </a>
              </p>
              <p
                className={` ${
                  userData.blog ? "text-active" : "text-passive"
                }  ${theme ? "dark" : "light"}`}
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`${userData.blog ? userData.blog : "#"}`}
                >
                  <i className={`fas fa-link `}></i>
                  {userData.blog ? userData.blog : "Not available"}
                </a>
              </p>
              <p
                className={` ${
                  userData.company ? "text-active" : "text-passive"
                }  ${theme ? "dark" : "light"}`}
              >
                <i className="fas fa-building"></i>{" "}
                {userData.company ? userData.company : "Not available"}
              </p>
            </div>
          </div>
        </>
      )}
      {!userData.name && (
        <div className={` warning  ${theme ? "dark" : "light"}`}>
          <h2>User not found!</h2>
        </div>
      )}
    </div>
  );
};

export default UserCard;
