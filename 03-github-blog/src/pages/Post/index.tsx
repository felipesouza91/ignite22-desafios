import React, { useEffect, useState } from 'react';

import Header from './../../components/Header/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faComment,
  faCalendarDay,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';

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
import { api } from '../../service/api';
import { Link, useParams } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface PostDTO {
  title: string;
  created_at: Date;
  html_url: string;
  body: string;
  user: {
    login: string;
  };
  comments: number;
}

const Post: React.FC = () => {
  const [data, setData] = useState<PostDTO>({} as PostDTO);
  const [status, setStatus] = useState('Carregando');
  let { id } = useParams();

  async function loadData() {
    try {
      const { data } = await api.get(
        `/repos/felipesouza91/ignite22-desafios/issues/${id}`
      );
      setData(data);
      setStatus('Carregando');
    } catch {
      setStatus('Erro ao tentar acessa, recarregue a pagina');
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <PostContainer>
      {data.title != undefined ? (
        <>
          <PostInfo>
            <PostHeader>
              <BaseButton>
                <FontAwesomeIcon icon={faChevronLeft} />
                VOLTAR
              </BaseButton>
              <Link to={data.html_url}>
                <BaseButton>
                  VER NO GITHUB
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </BaseButton>
              </Link>
            </PostHeader>
            <Title>{data.title}</Title>
            <PostFooter>
              <FooterGroup>
                <FontAwesomeIcon icon={faGithub} />
                <span>{data.user.login}</span>
              </FooterGroup>
              <FooterGroup>
                <FontAwesomeIcon icon={faCalendarDay} />
                <span>
                  {formatDistanceToNow(new Date(data.created_at), {
                    locale: ptBR,
                    addSuffix: false,
                  })}
                </span>
              </FooterGroup>
              <FooterGroup>
                <FontAwesomeIcon icon={faComment} />
                <span>{data.comments} comentários</span>
              </FooterGroup>
            </PostFooter>
          </PostInfo>

          <Content>
            <ReactMarkdown children={data.body} />
          </Content>
        </>
      ) : (
        <h1>{status}</h1>
      )}
    </PostContainer>
  );
};

export default Post;
