import {selectCurrentLoginUser} from 'features/authSlice';
import {useSelector} from 'react-redux';

export default function useAuthUser() {
  const user = useSelector(selectCurrentLoginUser);

  return {user};
}
