import { StyledLoader } from './Loader.styled';
import { ThreeDots } from 'react-loader-spinner';
export const Loader = () => (
  <StyledLoader>
    <ThreeDots color="#414994" height={40} width={40} />
  </StyledLoader>
);
