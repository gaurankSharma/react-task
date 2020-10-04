export function selectBox(key, index) {
  console.log("action", key, index);
  return (dispatch) => {
    dispatch({
      type: "CHANGE",
      payload: {
        key,
        index,
      },
    });
  };
}
