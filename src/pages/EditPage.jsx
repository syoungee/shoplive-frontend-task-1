import './App.scss';
import { useState } from 'react';

const EditPage = (props) => {
  const item = props;
  const [inputData, setInputData] = useState({ ...item }); // 입력한 데이터

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <header>SHOPLIVE</header>
      <div key={item.id} className="item-row">
        <div style={{ backgroundImage: `url(` + item.imageUrl + `)` }} className="image" />
        <div class="textfield">
          <div className="likes">LIKES♡ {item.likeCount}</div>
          <div className="title">
            <b>{item.title}</b>
            <br />
            {new Date(item.createdAt).toLocaleString()}
          </div>
        </div>
        <div className="button-row">
          <button className="button-modify">수정</button>
          <button className="button-remove">제거</button>
        </div>
      </div>
      <div>
        <form action="submit">
          title:
          <input type="text" />
          likes: {}
          <input type="number" />
          imageUrl:
          <input type="url" />
        </form>
      </div>
    </div>
  );
};

export default EditPage;
