import './App.scss';
import { useState } from 'react';
import { DUMMY } from './dummies';

const App = () => {
  const [itemList, setItemList] = useState([]); // localStorage에 저장된 데이터
  const [inputData, setInputData] = useState({}); // 입력한 데이터
  const [searchItem, setSearchItem] = useState(null); // 검색할 데이터

  /* TODO 1. input값 가져오기 */
  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.id]: [e.target.value] });
    console.log(inputData);
  };

  /* TODO 2. localStorage에 정보 저장 */

  /* TODO 3. data length */

  /* TODO 4. data 수정 및 삭제 */

  /* TODO 5. Refactoring */

  return (
    <div className="App">
      <header>SHOPLIVE</header>
      <div className="input-rows">
        <div>
          <input placeholder="검색" />
          <button>검색</button>
        </div>
        <div>
          <input placeholder="title" onChange={(e) => onChange(e)} id="title" required={true} />
          <input placeholder="likeCount" onChange={(e) => onChange(e)} id="likeCount" required={true} />
          <input placeholder="imageUrl" onChange={(e) => onChange(e)} id="imageUrl" required={true} />
          <button>추가</button>
        </div>

        <div>아이템 - 총 5 개</div>
      </div>
      <div className="wrap-items">
        {DUMMY.map((item) => (
          <div key={item.id} className="item-row">
            <div style={{ backgroundImage: `url(` + item.imageUrl + `)` }} className="image" />
            <div className="likes">LIKES♡ {item.likeCount}</div>
            <div className="title">
              <b>{item.title}</b>
              <br />
              {new Date(item.createdAt).toLocaleString()}
            </div>
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
