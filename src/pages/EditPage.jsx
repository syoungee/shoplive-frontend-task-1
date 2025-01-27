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
      alert('모든 값을 입력해야합니다.');
    }

    // localStorage에 새로운 데이터 수정해서 저장
    let temp_list = JSON.parse(localStorage.getItem('itemList'));
    temp_list.map((item, index) => {
      if (item.id === inputData.id) {
        temp_list[index] = inputData;
      }
      return temp_list[index];
    });
    // 수정 후 메인 페이지로 이동
    localStorage.setItem('itemList', JSON.stringify(temp_list));
    navigate(`/`);
  };

  return (
    <div className="EditPage">
      <div className="header">
        <a href="/shoplive-frontend-task-1/">SHOPLIVE</a>
      </div>
      <div className="nav-menu">
        <a href="/shoplive-frontend-task-1/">HOME</a>
      </div>
      <div key={inputData.id} className="item-row">
        <div style={{ backgroundImage: `url(` + inputData.imageUrl + `)` }} className="image" />
        <div className="textfield">
          <div className="likes">LIKES♡ {inputData.likeCount}</div>
          <div className="title">
            <b>
              {inputData.title.split('\n').map((text, idx) => {
                return (
                  <span key={idx}>
                    {text}
                    <br />
                  </span>
                );
              })}
            </b>
            <br />
            {new Date(inputData.createdAt).toLocaleString()}
          </div>
        </div>
      </div>
      <div className="submit-form">
        <form action="submit">
          title:
          <br />
          <textarea type="text" id="title" rows="5" cols="30" defaultValue={inputData?.title ? inputData.title : ''} onChange={onChange} required={true} />
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
            저장하기
          </button>
          <button
            className="button-cancel"
            onClick={() => {
              navigate(`/`);
            }}
          >
            취소하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
