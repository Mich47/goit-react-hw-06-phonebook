import { PropTypes } from 'prop-types';
import { Box } from 'components/Box';
import { InputStyled, LabelStyled } from './Phonebook.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <Box display="flex" flexDirection="column">
      <LabelStyled htmlFor="filter">Find contacts by name</LabelStyled>
      <InputStyled
        id="filter"
        value={filter}
        type="text"
        name="filter"
        onChange={onChange}
      />
    </Box>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
