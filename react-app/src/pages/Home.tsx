import CardList from '../components/CardList';
import Loader from '../components/Loader';
import Sorting from '../components/Sorting';
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux'
import { RootState } from '../store';

function Home(props: any) {

  const state = useSelector((state: RootState) => state.cardsList)

  return (
    <div>
      <h1>This is the Home page</h1>
      <Sorting />
      <Pagination /> 
      { props.loading ? 
        <Loader></Loader> :
        <CardList 
          items={state.cardsList.items} 
        >
        </CardList>
      }
    </div>
  )
}

export default Home;
