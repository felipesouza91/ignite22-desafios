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

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfileImg src="https://github.com/felipesouza91.png" />
      <ProfileDescription>
        <ProfileDescriptionHeader>
          <Name>Felipe Souza Santana</Name>
          <GitHubButton>
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </GitHubButton>
        </ProfileDescriptionHeader>
        <Description>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Description>
        <ProfileFooter>
          <ProfileFotterGroup>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </ProfileFotterGroup>
          <ProfileFotterGroup>
            <FontAwesomeIcon icon={faBuilding} />
            <span>cameronwll</span>
          </ProfileFotterGroup>
          <ProfileFotterGroup>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>cameronwll</span>
          </ProfileFotterGroup>
        </ProfileFooter>
      </ProfileDescription>
    </ProfileContainer>
  );
};

export default Profile;
