import React from "react";
import styled from "styled-components";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import moment from "moment";

const Post = ({ post, setCurrentId }) => {
  console.log(post);
  return (
    <Container>
      <Card>
        <CardMedia
          className="imge"
          src={post.selectedFile}
          title={post.title}
        />
        <h2>{post.title}</h2>

        <TitlesTime>
          <h1>{post.creator}</h1>
          <h4>{moment(post.createdAt).fromNow()}</h4>
        </TitlesTime>

        <HoriIcon>
          <FiMoreHorizontal
            fontSize={30}
            onClick={() => setCurrentId(post._id)}
          />
        </HoriIcon>

        <CardContent>
          <h3>{post.creator}</h3>
        </CardContent>

        <CardActions>
          <button>
            <BsFillHandThumbsUpFill fontSize={20} onClick={() => {}} />
            <span>Like {post.likeCount}</span>
          </button>
          <button>
            <AiFillDelete fontSize={20} onClick={() => {}} />
          </button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  grid-area: post;
  max-width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 300px;
  height: 400px;
  background-color: lightcyan;
  padding: 10px;
  border-radius: 20px;
`;

const CardMedia = styled.img`
  width: 300px;
  height: 250px;
  border-radius: 20px;

  .imge {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const TitlesTime = styled.div`
  position: absolute;
  color: white;
  margin-left: 10px;
`;

const HoriIcon = styled.div`
  position: absolute;
  right: 20px;
  margin-right: 10px;
  margin-top: 10px;
  color: white;
  cursor: pointer;
`;

const CardContent = styled.div`
  color: green;
  margin-top: 20px;
  margin-left: 20px;
`;

const CardActions = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 20px;
  justify-content: space-around;

  button:first-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    span {
      font-size: 20px;
      margin-left: 5px;
    }
  }
`;
