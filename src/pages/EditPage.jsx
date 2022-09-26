import './EditPage.scss';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({ ...location.state });

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };

  const editData = () => {
    // Validation check
    if (!inputData.title || !inputData.likeCount || !inputData.imageUrl) {
      console.log('모든 값을 입력해야합니다.');
      return;
    }

    // localStorage에 새로운 데이터 수정해서 저장
    let temp_list = JSON.parse(localStorage.getItem('itemList'));
    let target_id = -1;
    temp_list.map((item, index) => {
      if (item.id === inputData.id) {
        temp_list[index] = inputData;
        target_id = index;
      }
    });
    // 수정 후 메인 페이지로 이동
    localStorage.setItem('itemList', JSON.stringify(temp_list));
    navigate(`/`);
  };

  return (
    <div>
      <header>SHOPLIVE</header>
      {console.log(inputData)}
      <div key={inputData.id} className="item-row">
        <div style={{ backgroundImage: `url(` + inputData.imageUrl + `)` }} className="image" />
        <div className="textfield">
          <div className="likes">LIKES♡ {inputData.likeCount}</div>
          <div className="title">
            <b>{inputData.title}</b>
            <br />
            {new Date(inputData.createdAt).toLocaleString()}
          </div>
        </div>
      </div>
      <div className="submit-form">
        <form action="submit">
          title:
          <input type="text" id="title" size="35" defaultValue={inputData?.title ? inputData.title : ''} onChange={onChange} required={true} />
          <br />
          likes:
          <input type="number" id="likeCount" defaultValue={inputData?.likeCount ? inputData.likeCount : ''} onChange={onChange} required={true} />
          <br />
          imageUrl:
          <input type="url" id="imageUrl" size="70" defaultValue={inputData?.imageUrl ? inputData.imageUrl : ''} onChange={onChange} required={true} />
          <br />
          <br />
          <button
            className="button-modify"
            onClick={() => {
              editData();
            }}
          >
            수정하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
