export default {
  User: [
    {
      user_id: 1,
      name: "진",
      join_date: "2021-10-21 16:19:42",
    },
    {
      user_id: 2,
      name: "유진",
      join_date: "2021-10-21 16:20:42",
    },
    {
      user_id: 3,
      name: "이유진",
      join_date: "2021-10-21 16:11:42",
    },
    {
      user_id: 4,
      name: "이유지니",
      join_date: "2021-10-21 13:11:42",
    },
    {
      user_id: 5,
      name: "진유이",
      join_date: "2021-10-21 13:11:42",
    },
  ],

  Contents: [
    {
      content_id: 1,
      user_id: 1,
      title: "기성용",
      context: "답답하면 니들이 뛰던지",
      create_at: "2022-10-21",
      update_at: null,
    },
    {
      content_id: 2,
      user_id: 2,
      title: "오늘 경기 어디 어디함? ",
      context: "ㅈㄱㄴ",
      create_at: "2022-10-21",
      update_at: null,
    },
    {
      content_id: 3,
      user_id: 3,
      title: "솔직히 손흥민 미만잡 아니냐고",
      context: "외국놈들 보다 울 쏘니가 훨잘함",
      create_at: "2022-10-21",
      update_at: null,
    },
    {
      content_id: 4,
      user_id: 4,
      title: "아랫글에 동의",
      context: "어 보감",
      create_at: "2022-10-21",
      update_at: null,
    },
    {
      content_id: 5,
      user_id: 5,
      title: "경기 푸드 추천좀",
      context: "말아먹을 것 같은데 국수각이냐",
      create_at: "2022-10-21",
      update_at: null,
    },
    {
      content_id: 6,
      user_id: 1,
      title: "어디 치킨이 제일 맛있음?",
      context: "나는 굽네",
      create_at: "2022-10-21",
      update_at: null,
    },
  ],

  Comment: [
    {
      comment_id: 1,
      user_id: 1,
      content_id: 3,
      context: "답답하면 니들이 뛰던지 뭐냐고",
      create_at: "2022-10-21 16:19:42",
      update_at: null,
    },
    {
      comment_id: 2,
      user_id: 2,
      content_id: 3,
      context: "검색하면 다 나옴",
      create_at: "2022-10-21 16:19:42",
      update_at: null,
    },
  ],
  SubComment: [
    {
      subcomment_id: 2,
      comment_id: 2,
      user_id: 2,
      context: "아니 그런 댓글은 대체 왜 달음",
      create_at: "2022-10-21 16:19:42",
      update_at: null,
    },
  ],
};