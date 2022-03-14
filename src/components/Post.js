import React from "react";
import { useSelector } from "react-redux";

const Post = () => {
  const { value } = useSelector((state) => state.posts);

  console.log(value);

  return (
    <div>
      {/* {value &&
        for (const [key, value] of Object.entries(value)) {
          console.log(`${key}: ${value}`);
        }
      } */}
    </div>
  );
};

export default Post;
