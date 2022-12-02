import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

import Character from "./Character";
import { useActions, useAppSelector } from "../../shared/hooks/hooks";
import { getAuthData, getCharacters } from "../../shared/store/selectors/selectors";

import "./characters.scss";

const Characters: React.FC = () => {

  const { requestCharacters } = useActions()
  const auth = useAppSelector(state => getAuthData(state))
  const characters = useAppSelector(state => getCharacters(state))

  useEffect(() => {
    requestCharacters()
  }, [])

  const prev = characters?.info?.prev
  const next = characters?.info?.next

  if (!auth.email) {
    return <Navigate to='/login'/>
  }
  return (
    <div>
      {characters?.results?.map(item => <Character id={item.id} image={item.image} gender={item.gender} key={item.id}
                                                    name={item.name} status={item.status} />)}
      <div className='paginator'>
        {prev && <button onClick={() => requestCharacters(prev)} className="paginator__btn">Previous page</button>}
        {next && <button onClick={() => requestCharacters(next)} className="paginator__btn">Next page</button>}
      </div>
    </div>
  );
};

export default Characters;