import { useDispatch, useSelector } from 'react-redux';
import { Label } from './Filter.styled';
import { setFilter } from 'redux/actions';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilter = evt => dispatch(setFilter(evt.target.value));

  return (
    <Label>
      Find contacts:
      <input type="text" name="filter" value={filter} onChange={handleFilter} />
    </Label>
  );
};
