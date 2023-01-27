import React from 'react';

import { PostContainer, Header, Title, CreatedAt, Description } from './styles';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

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
    <PostContainer to={`/post/${data.number}`}>
      <Header>
        <Title>{data.title}</Title>
        <CreatedAt>
          {formatDistanceToNow(new Date(data.created_at), {
            locale: ptBR,
            addSuffix: false,
          })}
        </CreatedAt>
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
