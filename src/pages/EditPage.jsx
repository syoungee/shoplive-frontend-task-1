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
            {inputData.createdAt}
          </div>
        </div>
      </div>
      <div>
        <form action="submit">
          title:
          <input type="text" id="title" defaultValue={inputData?.title ? inputData.title : ''} onChange={onChange} required={true} />
          likes: {}
          <input type="number" id="likeCount" defaultValue={inputData?.likeCount ? inputData.likeCount : ''} onChange={onChange} required={true} />
          imageUrl:
          <input type="url" id="imageUrl" defaultValue={inputData?.imageUrl ? inputData.imageUrl : ''} onChange={onChange} required={true} />
          <br />
          <button className="button-modify" onClick={() => {}}>
            수정하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
