import React from 'react';

import { PostContainer, Header, Title, CreatedAt, Description } from './styles';

const PostTile: React.FC = () => {
  const description = `Programming languages all have built-in data structures, but these often
  differ from one language to another. This article attempts to list the
  built-in data structures available in JavaScript and what properties
  they have. These can be used to build other data structures. Wherever
  possible, comparisons with other languages are drawn.`;
  return (
    <PostContainer>
      <Header>
        <Title>JavaScript data types and data structures</Title>
        <CreatedAt>Há 1 dia</CreatedAt>
      </Header>
      <Description>
        {description.length > 200
          ? `${description.substring(0, 200)}...`
          : description}
      </Description>
    </PostContainer>
  );
};

export default PostTile;
