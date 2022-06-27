const reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;
      break;
    case "CREATE":
      return [...posts, action.payload];
      break;
    // case "UPDATE":
    //   return posts.map((post) => {
    //     post._id === action.payload._id ? action.payload : post;
    //   });
    //   break;
    default:
      return posts;
  }
};

export default reducer;
