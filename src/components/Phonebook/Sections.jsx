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

export const SectionPhonebook = ({ children }) => {
  return (
    <Box {...sectionStyles}>
      <TitleStyled as={'h2'}>Phonebook</TitleStyled>
      {children}
    </Box>
  );
};

export const SectionContacts = ({ children }) => {
  return (
    <Box {...sectionStyles}>
      <TitleStyled as={'h2'}>Contacts</TitleStyled>
      {children}
    </Box>
  );
};
