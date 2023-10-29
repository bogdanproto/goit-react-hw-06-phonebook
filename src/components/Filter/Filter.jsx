import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Label } from './Filter.styled';

export const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilter = evt => dispatch(setFilter(evt.target.value));

  return (
    <Label>
      Find contacts:
      <input type="text" name="filter" value={filter} onChange={handleFilter} />
    </Label>
  );
};
