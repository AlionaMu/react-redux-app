import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';

function DetailedInfoPage() {

  const state = useSelector((state: RootState) => state.cardsList)
  const publishedAt = new Date(state.detailedInfo.snippet.publishedAt).toLocaleString('ru');
  
  return (
    <div>
      <h1>This is the detailed info page</h1>
      <div className="detailed-info">
        <button className="detailed-info__back-button"><Link to="/home">{'<'}</Link></button>
        <div className="detailed-info__container">
          <img src={state.detailedInfo.snippet.thumbnails.high.url} alt="detailed-info" className="detailed-info__img"></img>
          <div className="detailed-info__info">
            <div className="detailed-info__info-content">
              <h4 className="detailed-info__item-title">{state.detailedInfo.snippet.title}</h4>
              <p className="detailed-info__date">{publishedAt}</p>
            </div>
            <div className="detailed-info__description-content">
              <p className="detailed-info__description-title">Description: </p>
              <div className="detailed-info__description-text">{state.detailedInfo.snippet.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedInfoPage;
