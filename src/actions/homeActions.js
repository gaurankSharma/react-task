export function selectBox(key, index) {
  console.log("action", key, index);
  dispatch({
    type: "CHANGE",
    payload: {
      key,
      index,
    },
  });
}
