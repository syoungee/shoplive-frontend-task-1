import './App.scss';
import { DUMMY } from './dummies';

const App = () => {
  return (
    <div className="App">
      <header>SHOPLIVE</header>
      <div className="input-rows">
        <div>
          <input placeholder="검색" />
          <button>검색</button>
        </div>
        <div>
          <input placeholder="title" />
          <input placeholder="likeCount" />
          <input placeholder="imageUrl" />
          <button>추가</button>
        </div>

        <div>아이템 - 총 5 개</div>
      </div>
      <div className="wrap-items">
        {DUMMY.map((item) => (
          <div key={item.id} className="item-row">
            <img src={item.imageUrl} className="image" />
            <div className="likes">LIKES♡ {item.likeCount}</div>
            <div className="title">
              <b>{item.title}</b>
            </div>
            <div className="date">{new Date(item.createdAt).toLocaleString()}</div>
            <div className="button-row">
              <button className="button-modify">수정</button>
              <button className="button-remove">제거</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
