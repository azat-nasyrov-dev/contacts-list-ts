import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ContactActionCreators from '../store/actions/contactsActions';

export const useAppDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ContactActionCreators, dispatch);
};
