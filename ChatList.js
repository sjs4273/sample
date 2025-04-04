import React from "react";
import "./ChatList.css"; // 별도로 style 분리 시

const ChatList = () => {
  const chatData = [
    {
   
      image:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MDhfMyAg%2FMDAxNzIzMDkwMDI4NTI0.0UAQXfGfV7RWmjh1KzTkKu3oLVbbII3lXzLwmU6VvZIg.zR_OWnC6u-xfEDVsVVfZ0aOpABr8yzVeidzooSw8RUYg.JPEG%2F2024_%25C1%25A6%25C1%25D6%25C6%25AF%25BA%25B0%25C0%25DA%25C4%25A1%25B5%25B5_%25C0%25CE%25B1%25C7%25C0%25DB%25C7%25B0_%25BE%25C6%25C0%25CC%25B5%25F0%25BE%25EE_%25B0%25F8%25B8%25F0%25C0%25FC_%25BB%25E7%25C0%25CC%25C1%25EE1.jpg&type=sc960_832",
    },
    {
  
      image: "https://health.chosun.com/site/data/img_dir/2024/04/23/2024042302394_0.jpg",
    },
    {
   
      image: "https://www.dailysecu.com/news/photo/202104/123449_145665_1147.png",
    },
    {
 
      image: "https://www.contestkorea.com/admincenter/files/meet/202502072122399464702.png",
    },
    {

      image: "https://cdn.imweb.me/thumbnail/20220228/62b33aeb6e5f1.jpg",
    },
    {
  
      image:
        "https://thinkyou.co.kr/upload/consult/[%ED%95%9C%EA%B5%AD%EC%B7%A8%EC%97%85%EC%84%BC%ED%84%B0]_2024%EB%85%84_%EB%AF%B8%EB%9E%98%EB%82%B4%EC%9D%BC%EC%9D%BC%EA%B2%BD%ED%97%98(%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%ED%98%95_IT_%EC%A7%81%EB%AC%B4_1%EA%B8%B0)_%ED%8F%AC%EC%8A%A4%ED%84%B0.png",
    },
    {

      image:
        "https://contestkorea.com/admincenter/files/meet/202105121401159224879.jpg",
    },
    {
   
      image:
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    },
    {
   
      image:
        "https://img.freepik.com/free-vector/hand-drawn-dog-breeds-element-collection_23-2149758432.jpg?semt=ais_hybrid&w=740",
    },
    {
 
      image:
        "https://mblogthumb-phinf.pstatic.net/MjAyNDEyMTlfNDcg/MDAxNzM0NjA0OTA4NzMz.CKaErXVgwB5-VofkJwYI7xGYkZtr2zrJBxSL98I0KBwg.nAORZkQfLCX9qZkjbnK_nTtXXTDRw9B_ujSJlVDTuFAg.JPEG/2024%EB%85%84_AOAI%ED%86%A4_%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4_%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C.jpg?type=w800",
    },
    {
      
      image: "https://www.nkeconomy.com/news/photo/202109/4621_5172_1658.jpg",
    },
  ];

  return (
    <div>
      <div className="upbox">
        <h1>withus</h1>
        <input type="text" className="namesearch" placeholder="검색" />
      </div>
      <div className="onebox">
        {chatData.map((chat, index) => (
          <button key={index} className="chat1">
            <img src={chat.image} alt="profile" className="img" />
            <h4>
              {chat.name}
              <br />
              <p>{chat.message}</p>
            </h4>
          </button>
        ))}
      </div>
      <div className="down-container">
        <div className="selectbtn">
          <button className="btn2">🏠</button>
          <button className="btn2">🔍</button>
          <button className="btn2">💬</button>
          <button className="btn2">👤</button>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
