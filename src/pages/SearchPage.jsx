import './SearchPage.scss';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [itemList, setItemList] = useState([...location.state]);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    console.log(itemList);
    setItemCount(getItemLength());
    console.log(itemCount);
  }, []);

  // 아이템 갯수
  const getItemLength = () => {
    console.log(itemList.length);
    return itemList.length;
  };

  return (
    <div className="SearchPage">
      <div className="header">
        <a href="/shoplive-frontend-task-1/">SHOPLIVE</a>
      </div>
      <div className="nav-menu">
        <a href="/shoplive-frontend-task-1/">HOME</a>
      </div>
      <div className="input-rows">아이템 - 총 {itemList.length} 개</div>
      <div className="wrap-items">
        {itemList?.map((item) => (
          <div key={item.id} className="item-row">
            <div style={{ backgroundImage: `url(` + item.imageUrl + `)` }} className="image" />
            <div className="textfield">
              <div className="likes">LIKES♡ {item.likeCount}</div>
              <div className="title">
                <b>{item.title}</b>
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
