import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { api } from '../../service/api';

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

interface UseDTO {
  name: string;
  html_url: string;
  bio: string;
  description: string;
  login: string;
  company: string;
  followers: number;
}

interface PostDTO {
  number: number;
  title: string;
  body: string;
  created_at: Date;
}

const Home: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UseDTO>({} as UseDTO);
  const [post, setPost] = useState<PostDTO[]>([]);
  const { register, handleSubmit } = useForm();

  function handleSearch(data: any) {
    loadIssues(data.search);
  }

  async function loadIssues(value = '') {
    const { data } = await api.get(
      `/search/issues?q=${value}repo:felipesouza91/ignite22-desafios`
    );
    setPost(data.items);
  }

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('/users/felipesouza91');
      setUserInfo(data);
    }
    loadData();
    loadIssues();
  }, []);

  return (
    <HomeContainer>
      <Profile userData={userInfo} />
      <PublicationContainer>
        <PublicationTitle>Pulicação</PublicationTitle>
        <PublicationSubTitle>6 pulicações</PublicationSubTitle>
      </PublicationContainer>
      <SearchForm onSubmit={handleSubmit(handleSearch)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('search')}
        />
      </SearchForm>
      <PostContainer>
        {post.length > 0 ? (
          post.map((item) => <PostTile data={item} />)
        ) : (
          <h1>Não foi encontrado resultado com os filtros digitados</h1>
        )}
      </PostContainer>
    </HomeContainer>
  );
};

export default Home;
