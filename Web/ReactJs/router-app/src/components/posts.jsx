import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
  const result = queryString.parse(location.search);
  console.log(result);
  // console.log(location.search); install queryString to extract queryString key-values pair
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year} , Month: {match.params.month}
    </div>
  );
};

export default Posts;
