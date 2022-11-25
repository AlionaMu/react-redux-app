import { Link } from 'react-router-dom';

const CardButton = (props: any) => {

  return (
    <>
      <button className='card__button button'><Link to="/video"></Link>{props.text}</button>
    </>
  );
};
    
export default CardButton;