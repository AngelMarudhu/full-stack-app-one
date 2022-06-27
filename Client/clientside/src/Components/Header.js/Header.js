import React, { useEffect, useState } from "react";
import styled from "styled-components";
import memories from "../../images/memories.png";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getPosts } from "../../action/Posts";
import { useSelector } from "react-redux";

const Header = () => {
  //getting current id
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.Posts);

  console.log(posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container>
      <Content>
        <h1>Memories</h1>
        <Profile>
          <img src={memories} alt="Profile" />
        </Profile>
      </Content>

      <Layout>
        <Grid>
          <Posts setCurrentId={setCurrentId} />
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Layout>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  max-width: 1128px;
  margin: auto;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
  margin-top: 2rem;
  background-color: lightcyan;
  box-shadow: 1px 4px 14px 0px rgba(0, 0, 0, 1);
  border-radius: 20px;

  h1 {
    color: cyan;
    margin-right: 10px;
  }
`;

const Profile = styled.div`
  width: 70px;
  height: 70px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 2rem;
`;

const Grid = styled.div`
  margin: auto;
  display: grid;
  grid-template-rows: auto;
  grid-template-areas: "posts form";
  grid-template-columns: 1fr 0.5fr;
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    text-align: center;
  }
`;
