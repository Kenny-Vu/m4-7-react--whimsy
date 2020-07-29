import React from "react";

import avatar from "../assets/carmen-sandiego.png";
import moment from "moment";
export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfRetweets, setNumOfRetweets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);

  const tweetContents = "Where in the world am I?";
  const displayName = "Carmen Sandiego ✨";
  const username = "carmen-sandiego";
  const avatarSrc = avatar;
  const isRetweetedByCurrentUser = numOfRetweets;
  const isLikedByCurrentUser = numOfLikes;

  const date = moment().format("h:m a - MMM Do, YYYY");
  return (
    <TweetContext.Provider
      value={{
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
        date,
        numOfLikes,
        setNumOfLikes,
        numOfRetweets,
        setNumOfRetweets,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
