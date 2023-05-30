import css from './UsersItem.module.css';

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
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>wait something long here like action</td>
    </tr>
  );
}
