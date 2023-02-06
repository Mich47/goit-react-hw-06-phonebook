import { Box } from 'components/Box';
import { InputStyled, LabelStyled } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter.slice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <Box display="flex" flexDirection="column">
      <LabelStyled htmlFor="filter">Find contacts by name</LabelStyled>
      <InputStyled
        id="filter"
        value={filter}
        type="text"
        name="filter"
        onChange={handleChangeFilter}
      />
    </Box>
  );
};
