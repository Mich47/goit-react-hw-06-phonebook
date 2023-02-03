import { PropTypes } from 'prop-types';
import { Box } from 'components/Box';
import {
  ButtonStyled,
  ContactsItemStyled,
  TextStyled,
} from './Phonebook.styled';

export const ContactsItem = ({ name, number, onDelete }) => {
  return (
    <ContactsItemStyled>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <TextStyled>
          {name}: {number}
        </TextStyled>
        <ButtonStyled
          fontSize="xs"
          px={4}
          py={2}
          type="button"
          onClick={onDelete}
        >
          Delete
        </ButtonStyled>
      </Box>
    </ContactsItemStyled>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
