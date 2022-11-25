import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { search } from '../store/cardsListSlice';

const Pagination = () => {
  const state = useSelector((state: RootState) => state.cardsList);
  const dispatch = useDispatch<AppDispatch>();

  const obj = {
    search: state.search,
    sort: state.sort,
    token: state.nextPageToken
   }

  const onClickHandler = (target: any) => {
    dispatch(search(obj))
  }
  
  return (
    <>
      <div className="pagination__container">
          <button 
            value={'prev'}  
            className='pagination__button'
            onClick={(e) => onClickHandler(e.target)}
          >
          prev
          </button>
          <button 
            value={'next'} 
            className='pagination__button' 
            onClick={(e) => onClickHandler(e.target)}
          >
          next
          </button>
        </div>
    </>
  )
}

export default Pagination;
