import React from "react";

import { TweetContext } from "../TweetContext";

import styled from "styled-components";

const Stats = () => {
  const { numOfLikes, numOfRetweets } = React.useContext(TweetContext);

  return (
    <>
      <StatsDiv>
        <StatsInfo>
          <Span>{numOfRetweets}</Span> Retweets
        </StatsInfo>{" "}
        <StatsInfo>
          <Span>{numOfLikes}</Span> Likes
        </StatsInfo>
      </StatsDiv>
    </>
  );
};

const StatsDiv = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;
const Span = styled.span`
  font-weight: bold;
`;
const StatsInfo = styled.div`
  margin-right: 1rem;
`;

export default Stats;
