import css from './UsersItem.module.css';

export default function UsersItem({ user }) {

  return (
    <tr>
      <td>
        <input type='checkbox' className={css.table_checkbox} />
      </td>
      <td>{user.id}</td>
      <td>
        <img src={user.avatar} alt="user's avatar" />
      </td>
      <td>{user.email}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>wait something long here like action</td>
    </tr>
  );
}
