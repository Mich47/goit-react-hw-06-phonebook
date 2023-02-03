import { PropTypes } from 'prop-types';
import { Box } from 'components/Box';
import { TitleStyled } from './Phonebook.styled';

const sectionStyles = {
  fontFamily: 'body',
  width: 'section',
  mx: 'auto',
  mt: '20px',
  p: [4],
  bg: 'white',
  border: ' 1px solid',
  borderColor: 'border',
  borderRadius: 'normal',
  boxShadow: 'main',
  as: 'section',
};

export const Section = ({ title, headingLevel = 'h1', children }) => {
  return (
    <Box {...sectionStyles}>
      <TitleStyled as={headingLevel}>{title}</TitleStyled>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  headingLevel: PropTypes.string,
  // children: PropTypes.element,
};
