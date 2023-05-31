import css from './UsersItem.module.css';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser } from '../../store/UserSlice';
import { LuEdit } from 'react-icons/lu';

export default function UsersItem({ user, onDelete }) {
  const deleteHandler = () => onDelete(user.id);

  const userSlice = useSelector((state) => state.UsersSlice);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.target.checked) {
      dispatch(addUser(user));
    } else {
      dispatch(deleteUser(user.id));
    }
  };

  let checked = false;

  for (let i = 0; i < userSlice.length; i++) {
    if (user.id === userSlice[i].id) {
      checked = true;
      break;
    }
  }

  console.log(checked);

  return (
    <tr>
      <td>
        <input
          type='checkbox'
          className={css.table_checkbox}
          onChange={handleChange}
          checked={checked}
        />
      </td>
      <td>{user.id}</td>
      <td className={css.table_img_data}>
        <div className={css.table_img_bg}>
          <img
            src={user.avatar}
            alt="user's avatar"
            className={css.table_user_avatar}
          />
        </div>
      </td>
      <td>{user.email}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td className={css.table_actions_bg}>
        <div className={css.table_actions}>
          <AiFillDelete
            className={css.table_delete_action}
            onClick={deleteHandler}
          />
          <LuEdit className={css.table_edit_action} />
          <AiFillEye className={css.table_eye_action} />
        </div>
      </td>
    </tr>
  );
}
