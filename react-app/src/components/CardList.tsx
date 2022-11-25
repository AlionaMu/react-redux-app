import CardItem, { Item } from './CardItem';

const CardList = (props: any) => {

  return (
    <>
      { 
        props.items ?
        <div className="cards-container">
          { props.items.map((item: Item) => {
            return <CardItem
              props={item} 
              key={item.id.videoId} 
              setCardId={props.setCardId} 
              cardId={props.cardId}/>
            })
          }
        </div> :
        <h2> List is empty </h2>
      }
    </>
  );
};
  
export default CardList;
