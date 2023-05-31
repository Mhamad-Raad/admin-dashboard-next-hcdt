import css from './UsersItem.module.css';
import { AiFillDelete, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { LuEdit } from 'react-icons/lu';

export default function UsersItem({ user }) {

  return (
    <tr>
      <td>
        <input type='checkbox' className={css.table_checkbox} />
      </td>
      <td>{user.id}</td>
      <td className={css.table_img_data}>
        <div className={css.table_img_bg}>
        <img src={user.avatar} alt="user's avatar" className={css.table_user_avatar} />
          </div>
      </td>
      <td>{user.email}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td className={css.table_actions_bg}>
        <div className={css.table_actions}>

        <AiFillDelete className={css.table_delete_action} />
        <LuEdit className={css.table_edit_action} />
        <AiFillEye  className={css.table_eye_action} />
        </div>
      </td>
    </tr>
  );
}
