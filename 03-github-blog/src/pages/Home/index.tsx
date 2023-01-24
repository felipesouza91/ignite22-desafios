import React from 'react';

import Header from './../../components/Header/index';
import PostTile from './components/PostTile';
import Profile from './components/Profile';

import {
  HomeContainer,
  PublicationContainer,
  PublicationTitle,
  PublicationSubTitle,
  SearchForm,
  PostContainer,
} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <Profile />
        <PublicationContainer>
          <PublicationTitle>Pulicação</PublicationTitle>
          <PublicationSubTitle>6 pulicações</PublicationSubTitle>
        </PublicationContainer>
        <SearchForm>
          <input type="text" placeholder="Buscar conteúdo" />
        </SearchForm>
        <PostContainer>
          <PostTile />
          <PostTile />
          <PostTile />
          <PostTile />
          <PostTile />
        </PostContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
