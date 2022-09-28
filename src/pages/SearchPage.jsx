import './SearchPage.scss';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import highLightText from '../components/HighLight';

const SearchPage = () => {
  const location = useLocation();
  const [itemList] = useState([...location.state.itemArray]);
  const [itemCount, setItemCount] = useState(0);
  const [searchText] = useState(location.state.searchText);

  useEffect(() => {
    const getItemLength = () => {
      return itemList.length;
    };
    setItemCount(getItemLength());
  }, [itemList]);
  return (
    <div className="SearchPage">
      <div className="header">
        <a href="/shoplive-frontend-task-1/">SHOPLIVE</a>
      </div>
      <div className="nav-menu">
        <a href="/shoplive-frontend-task-1/">HOME</a>
      </div>
      <div className="input-rows">아이템 - 총 {itemCount} 개</div>
      <div className="wrap-items">
        {itemList?.map((item) => (
          <div key={item.id} className="item-row">
            <div style={{ backgroundImage: `url(` + item.imageUrl + `)` }} className="image" />
            <div className="textfield">
              <div className="likes">LIKES♡ {item.likeCount}</div>
              <div className="title">
                <b>
                  {item.title.split('\n').map((text, idx) => {
                    return (
                      <span key={idx}>
                        {highLightText(text, searchText)}
                        <br />
                      </span>
                    );
                  })}
                </b>
                <br />
                {new Date(item.createdAt).toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
