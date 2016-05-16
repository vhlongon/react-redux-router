// State argument is not application state, only the state this specific reducer is responsible for
export default function (state = null, action) {
  switch (action.type) {
    case 'ITEM_SELECTED':
      return action.payload;

  }
  return state;
}
