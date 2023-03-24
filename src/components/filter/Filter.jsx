import { useDispatch } from 'react-redux';

import { setFilter } from '../../redux/createSlice';

import style from '../style.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={style.filterwrapper}>
      <label htmlFor="filter" className={style.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        className={style.forminput}
        onChange={onChangeFilter}
      />
    </div>
  );
};
