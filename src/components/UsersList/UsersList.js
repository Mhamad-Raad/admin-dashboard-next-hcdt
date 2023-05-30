import css from './UsersList.module.css';

export default function UsersList() {
  return (
    <table className={css.users_table}>
      <tr>
        <th></th>
        <th>ID</th>
        <th>Avatar</th>
        <th>Email</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Actions</th>
      </tr>
      <tr>
        <td>
          <input type='checkbox' className={css.table_checkbox} />
        </td>
        <td>1</td>
        <td>img</td>
        <td>hama@gmail.com</td>
        <td>Mhamad</td>
        <td>Raad</td>
        <td>wait something long here like action</td>
      </tr>
    </table>
  );
}
