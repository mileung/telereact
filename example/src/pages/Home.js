import React, { useState } from 'react';
import { connect } from 'telereact';
import TextInput from '../components/TextInput';
import SpacedContainer from '../components/SpacedContainer';

const Post = ({ text, claps, onClap, onDelete }) => (
  <div>
    <p>{text}</p>
    <SpacedContainer row>
      <span className="button" onClick={onClap}>
        Clap ({claps})
      </span>
      <span className="button" onClick={onDelete}>
        Delete
      </span>
    </SpacedContainer>
  </div>
);

const Home = ({ setState, accessToken, feed }) => {
  const [input, inputSet] = useState('');
  return (
    <div className="f">
      {accessToken ? (
        <SpacedContainer>
          <h1>Home</h1>
          <SpacedContainer row>
            <TextInput placeholder="What's happening?" value={input} onChange={v => inputSet(v)} />
            <button
              disabled={!input}
              onClick={() => {
                setState({ feed: [{ id: `${Math.random()}`, text: input, claps: 0 }, ...feed] });
                inputSet('');
              }}
            >
              Post
            </button>
          </SpacedContainer>
          {feed.map(({ id, text, claps }, i) => (
            <Post
              key={id}
              text={text}
              claps={claps}
              onClap={() => {
                const post = feed[i];
                post.claps++;
                setState({ feed });
              }}
              onDelete={() => {
                feed.splice(i, 1);
                setState({ feed });
              }}
            />
          ))}
        </SpacedContainer>
      ) : (
        <h1>The Feed</h1>
      )}
    </div>
  );
};

export default connect('accessToken, feed')(Home);
