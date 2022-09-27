import './MainPage.scss';
import { useState, useEffect } from 'react';
import { DUMMY } from '../dummies';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const [itemList, setItemList] = useState(null); // localStorage에 저장된 데이터
  const [inputData, setInputData] = useState({}); // 입력한 데이터
  const [searchItem, setSearchItem] = useState(null); // 검색할 데이터
  const [itemCount, setItemCount] = useState(0); // 총 아이템 갯수

  useEffect(() => {
    // 초기 화면에 dummy data를 localstorage에 넣어 저장
    if (!localStorage.getItem('itemList')) {
      localStorage.setItem('itemList', JSON.stringify(DUMMY));
    }
    setItemCount(getItemLength());
  }, []);

  // input값 가져오기
  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };

  // localStorage에 입력한 아이템 저장
  const saveData = () => {
    // Validation check
    if (!inputData.title || !inputData.likeCount || !inputData.imageUrl) {
      console.log('모든 값을 입력해야합니다.');
      return;
    }

    // localStorage에 새로운 아이템 저장
    if (!localStorage.getItem('itemList')) {
      let list = [{ ...inputData, id: new Date().valueOf(), createdAt: new Date().valueOf() }];
      localStorage.setItem('itemList', JSON.stringify(list));
    } else {
      let temp_list = JSON.parse(localStorage.getItem('itemList'));
      temp_list.push({ ...inputData, id: new Date().valueOf(), createdAt: new Date().valueOf() });
      localStorage.setItem('itemList', JSON.stringify(temp_list));
    }

    // 아이템 갯수
    setItemCount(getItemLength());
  };

  // 아이템 갯수
  const getItemLength = () => {
    const myData = localStorage.getItem('itemList');
    const dataList = JSON.parse(myData);
    setItemList(dataList);
    return dataList?.length;
  };

  // 해당 아이템 수정 페이지로 이동
  const toEditPage = (item) => {
    navigate(`/edit/${item.id}`, { state: { ...item } });
  };

  // localStorage에서 해당 아이템 삭제
  const removeItem = (target_item) => {
    let temp_list = JSON.parse(localStorage.getItem('itemList'));
    const result = temp_list.filter((item) => item.id !== target_item.id);
    console.log(result);
    localStorage.setItem('itemList', JSON.stringify(result));

    // 아이템 갯수 갱신
    setItemCount(getItemLength());
  };

  return (
    <div className="App">
      <header>SHOPLIVE</header>
      <div className="input-rows">
        <div>
          <input placeholder="검색" />
          <button>검색</button>
        </div>
        <div>
          <input placeholder="title" type="text" onChange={(e) => onChange(e)} id="title" required={true} />
          <input placeholder="likeCount" type="number" onChange={(e) => onChange(e)} id="likeCount" required={true} />
          <input placeholder="imageUrl" type="imgage" onChange={(e) => onChange(e)} id="imageUrl" required={true} />
          <button onClick={(e) => saveData(e)}>추가</button>
        </div>
        <br />
        <div>아이템 - 총 {itemCount} 개</div>
        <br />
      </div>
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
            <div className="button-row">
              <button
                className="button-modify"
                onClick={() => {
                  toEditPage(item);
                }}
              >
                수정
              </button>
              <button
                className="button-remove"
                onClick={() => {
                  removeItem(item);
                }}
              >
                제거
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
