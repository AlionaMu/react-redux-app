const FormCard = (props: any) => {

  return (
    <div className='card'>
          <div className='card__text'>
            <span className='form-card__text'>Name: {props.props.userName}</span>
            <span className='form-card__text'>Birth date: {props.props.date}</span>
            <span className='form-card__text'>Country: {props.props.select}</span>
            <span className='form-card__text'>Gender: {props.props.gender}</span>
            <img src={props.props.img} className='form-card__image' alt="avatar"></img>
          </div>
    </div>
  );
};
  
  export default FormCard;
 