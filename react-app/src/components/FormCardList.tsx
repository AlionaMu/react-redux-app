import FormCard from './FormCard';

const FormCardList = ({list}: any) => {
  return (
    <>
      { list ?
        <div className="form-cards__container">
          { list.products.map((item: any, i: number) => {
              return <FormCard props={item} key={i+1} id={i+1}/>
            })}
        </div> :
        <span> List is empty </span>
      }
    </>
  );
};
  
  export default FormCardList;
