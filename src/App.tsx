import React, {useState} from 'react';
import { getComments } from './redux/actionCreators/getComment';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypeSelector';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const [postId, setPostID] = useState("");
  const { comments, loading, error } = useTypedSelector((state) => state.comments);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(getComments(postId));
  }

  return (
      <div>
        <Header />
      <div>
        <form onSubmit={onSubmitHandler}>
          <input type={"number"} value={postId} onChange={(e) => setPostID(e.target.value)} /> 
          <button type="submit" className='btn'> Enviar </button>
          
        </form>
      </div>

      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {
              comments.map((comment) => {
                return(<li key={comment.id}>{comment.body}</li>)
              })
            }
          </ul>
        )
      }
      <Footer />
      </div>
  );
}

export default App;
