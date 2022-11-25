import { useSelector } from 'react-redux';
import Form from '../components/Form';
import FormCardList from '../components/FormCardList';
import type { RootState } from '../store/index';

function Forms() {
  const stateProducts = useSelector((state: RootState) => state.products)

  return (
    <main className='main'>
      <h1>FORMS</h1>
      <Form />
      <FormCardList list={stateProducts} />
    </main>
  )
}

export default Forms;
