import { search, setSearch } from '../store/cardsListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export function SearchBar(props: any) {
  
  const state = useSelector((state: RootState) => state.cardsList)

  const dispatch = useDispatch<AppDispatch>();
  
  const onKeyPressHandler = (event: any) => {

    const value = event.target.value;

    if (event.which === 13) {
      props.setLoading(true);
      dispatch(setSearch(value));
    
      const obj = {
       search: state.search,
       sort: state.sort,
       token: state.nextPageToken
      }
      dispatch(search(obj))
      props.setLoading(false);
    }
  }

  return (
    <div>
      <input 
        className="search-bar" 
        data-testid="simple-input" 
        type="text" 
        placeholder= 'search'
        onKeyPress={(event: any) => onKeyPressHandler(event)}
      >
      </input>
      <button className="search-bar__button button">SEARCH</button> 
    </div>
  )
}
