export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //token: 'BQClocgnP_R9VqE9ZK4Bj2ZYOsWmk8SqiDj0oV6mdqqgP3WaB0HpI3gnwg3RjTrBzbB9F5JbN5ZcWiovTh_nDb-1n1A1O5jjLvp0wvrTo5QlfYtiqXMJv_YZPiP-gh1R68u2U1ZqGW1XY_KwoJ_f5ze_kWUmatZVXgN7S91S',
  token: null,
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
