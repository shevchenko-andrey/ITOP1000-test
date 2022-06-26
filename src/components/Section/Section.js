import { StyledSection, SectionContainer } from './Section.styled';
const Section = ({ children }) => {
  return (
    <StyledSection>
      <SectionContainer>{children}</SectionContainer>
    </StyledSection>
  );
};
export default Section;
