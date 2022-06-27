import React, { useState } from "react";
import styled from "styled-components";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../action/Posts";

const Form = ({ currentId, setCurrentId }) => {
  console.log(currentId);

  const dispatch = useDispatch();

  const [post, setPost] = useState({
    creator: " ",
    title: " ",
    message: " ",
    tags: " ",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, post));
    } else {
      dispatch(createPost(post));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPost({
      creator: " ",
      title: " ",
      message: " ",
      tags: " ",
      selectedFile: "",
    });
  };

  return (
    <Container>
      <Content>
        <Forms onSubmit={handleSubmit}>
          <h3> {currentId ? "Editing" : "My Life Jouney"} </h3>
          <CreatorInput
            name="Creator"
            placeholder="Creator"
            label="creator"
            value={post.creator}
            onChange={(e) => setPost({ ...post, creator: e.target.value })}
          ></CreatorInput>

          <TitleInput
            name="Title"
            placeholder="Title"
            label="title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          ></TitleInput>

          <MessageInput
            name="Message"
            placeholder="Message"
            label="message"
            value={post.message}
            onChange={(e) => setPost({ ...post, message: e.target.value })}
          ></MessageInput>

          <TagInput
            name="Tags"
            placeholder="Tags"
            label="tags"
            value={post.tags}
            onChange={(e) => setPost({ ...post, tags: e.target.value })}
          ></TagInput>

          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPost({ ...post, selectedFile: base64 })
              }
            />
          </div>

          <div>
            <button>Submit</button>
          </div>
          <div>
            <button onClick={clear}>Clear</button>
          </div>
        </Forms>
      </Content>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  grid-area: form;

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
  button {
    cursor: pointer;
    :hover {
      color: yellow;
    }
  }
`;

const Content = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const Forms = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;
  flex-direction: column;

  button {
    width: 200px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 10px;
    align-items: flex-start;
    justify-content: flex-start;

    &:first-child {
      background-color: blue;
      color: white;
      font-size: 20px;
      border: none;
      border-radius: 10px;
    }
    &:last-child {
      background-color: red;
      color: white;
      font-size: 20px;
      border: none;
      border-radius: 10px;
    }
  }
`;

const CreatorInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  font-size: 17px;

  &::placeholder {
    opacity: 1;
    color: green;
  }
`;

const TitleInput = styled(CreatorInput)`
  margin-bottom: 10px;
`;

const MessageInput = styled(CreatorInput)`
  margin-bottom: 10px;
`;

const TagInput = styled(CreatorInput)`
  margin-bottom: 10px;
`;
