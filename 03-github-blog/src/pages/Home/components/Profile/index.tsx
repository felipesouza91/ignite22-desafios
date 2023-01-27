import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import {
  ProfileContainer,
  ProfileImg,
  ProfileDescriptionHeader,
  ProfileDescription,
  Name,
  Description,
  GitHubButton,
  ProfileFooter,
  ProfileFotterGroup,
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
interface ProfileProps {
  userData: UseDTO;
}

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  return (
    <ProfileContainer>
      <ProfileImg src="https://github.com/felipesouza91.png" />
      <ProfileDescription>
        <ProfileDescriptionHeader>
          <Name>{userData.name}</Name>
          {userData.html_url && (
            <GitHubButton to={userData.html_url}>
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </GitHubButton>
          )}
        </ProfileDescriptionHeader>
        <Description>{userData.bio}</Description>
        <ProfileFooter>
          <ProfileFotterGroup>
            <FontAwesomeIcon icon={faGithub} />
            <span>{userData.login}</span>
          </ProfileFotterGroup>
          {userData.company && (
            <ProfileFotterGroup>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{userData.company}</span>
            </ProfileFotterGroup>
          )}
          <ProfileFotterGroup>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{`${userData.followers} seguidores`}</span>
          </ProfileFotterGroup>
        </ProfileFooter>
      </ProfileDescription>
    </ProfileContainer>
  );
};

export default Profile;
