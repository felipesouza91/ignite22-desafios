import React from 'react';

import Header from './../../components/Header/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faComment,
  faCalendarDay,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import {
  PostContainer,
  PostInfo,
  PostHeader,
  BaseButton,
  Title,
  PostFooter,
  FooterGroup,
  Content,
} from './styles';

const Post: React.FC = () => {
  return (
    <>
      <Header />
      <PostContainer>
        <PostInfo>
          <PostHeader>
            <BaseButton>
              <FontAwesomeIcon icon={faChevronLeft} />
              VOLTAR
            </BaseButton>
            <BaseButton>
              VER NO GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </BaseButton>
          </PostHeader>
          <Title>JavaScript data types and data structures</Title>
          <PostFooter>
            <FooterGroup>
              <FontAwesomeIcon icon={faGithub} />
              <span>cameronwll</span>
            </FooterGroup>
            <FooterGroup>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>Há 1 dia</span>
            </FooterGroup>
            <FooterGroup>
              <FontAwesomeIcon icon={faComment} />
              <span>5 comentários</span>
            </FooterGroup>
          </PostFooter>
        </PostInfo>

        <Content>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </Content>
      </PostContainer>
    </>
  );
};

export default Post;
