import React from 'react';

import { PostContainer, Header, Title, CreatedAt, Description } from './styles';

interface Post {
  number: number;
  body: string;
  created_at: Date;
  title: string;
}

interface PostTileProps {
  data: Post;
}

const PostTile: React.FC<PostTileProps> = ({ data }) => {
  return (
    <PostContainer>
      <Header>
        <Title>{data.title}</Title>
        <CreatedAt>Há 1 dia</CreatedAt>
      </Header>
      <Description>
        {data.body.length > 200
          ? `${data.body.substring(0, 200)}...`
          : data.body}
      </Description>
    </PostContainer>
  );
};

export default PostTile;
