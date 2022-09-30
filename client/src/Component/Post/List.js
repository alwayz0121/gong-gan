import React, { useEffect, useState } from "react";
import axios from "axios";

import { ListDiv, ListItem } from "../../Style/ListCSS.js";

function List({ contentList, setContentList }) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((res) => {
        if (res.data.success) {
          setPostList([...res.data.postList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ListDiv>
      {postList.map((post, index) => {
        return (
          <ListItem key={index}>
            <p className="title">{post.title}</p>
            <p>{post.content}</p>
          </ListItem>
        );
      })}
    </ListDiv>
  );
}

export default List;
