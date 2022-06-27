import React from "react";
import styled from "styled-components";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.Posts);

  console.log(posts);

  return (
    <Container>
      <Content>
        <Griding>
          {posts.map((post) => (
            <GridItems key={post._id}>
              <Post post={post} setCurrentId={setCurrentId} />
            </GridItems>
          ))}
        </Griding>
      </Content>
    </Container>
  );
};

export default Posts;

const Container = styled.div`
  grid-area: posts;
`;

const Content = styled.div``;

const Griding = styled.div``;

const GridItems = styled.div``;
