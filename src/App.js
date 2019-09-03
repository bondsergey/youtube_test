import React, {useEffect, useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {loadYoutubeList, removeYotubeList, addYotubeList} from './reducer/youtubeList/actions';
import YoutubeTable from './components/YoutubeTable'
import Button from './components/Button'
import './App.css';

function App() {
  const dispatch = useDispatch();
  const {payload, isLoading} = useSelector(state => state.youtubeList);
  const [selected, setSelected] = useState([]);

  const selectAll = useCallback(() => {
    if (selected.length === payload.length) {
      setSelected([]);
    } else {
      setSelected(payload.map(i => i.id));
    }
  }, [payload, selected]);

  const select = useCallback(id => {
    if (selected.includes(id)) {
      setSelected(selected.filter(i => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  }, [selected]);

  useEffect(() => {
    dispatch(loadYoutubeList());
  }, []);

  useEffect(() => {
    setSelected([]);
  }, [payload]);

  const handleDelete = useCallback(() => {
    dispatch(removeYotubeList(selected));
  }, [dispatch, selected]);

  const addItem = useCallback(id => {
    dispatch(addYotubeList());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="page-container">
        <div className="header">
          <div className="title">Search Result</div>
          <div className="group-btn-header">
            <Button className="btn-header"
                    disabled={!selected.length || isLoading}
                    onClick={handleDelete}
            >
              Remove selected
            </Button>
            <Button className="btn-header" onClick={addItem} disabled={payload && payload.length > 4 || isLoading}>Add
              to list</Button>
            <Button className="btn-header">Get links</Button>
            <Button className="btn-header">Export</Button>
          </div>
        </div>
        <YoutubeTable data={payload} isLoading={isLoading} selectAll={selectAll} select={select} selected={selected}/>
        {(!isLoading && payload) && <div className="footer"><Button>Load more</Button></div>}
      </div>
    </div>
  );
}

export default App;
