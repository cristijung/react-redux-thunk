import './Principal.css'
import React, {useState} from 'react';
import { getComments } from '../../redux/actionCreators/getComment';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypeSelector'; 

export function Principal(){
    const dispatch = useDispatch();
  const [postId, setPostID] = useState("");
  const { comments, loading, error } = useTypedSelector((state) => state.comments);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(getComments(postId));
  }

  return(
        <article className='main'>
           <> 
           <h2>Controlando Posts via API Jason Placeholder</h2>

          <form onSubmit={onSubmitHandler}>
          <input type={"number"} className='form' value={postId} onChange={(e) => setPostID(e.target.value)} /> 
          <button type="submit" className='btn'> Enviar </button>
          
        </form>
      

      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {
              comments.map((comment) => {
                return(<li className='form' key={comment.id}>{comment.body}</li>)
              })
            }
          </ul>
        )
      }
           </>
        </article>
    );

}