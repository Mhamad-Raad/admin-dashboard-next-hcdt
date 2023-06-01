import css from './UsersItem.module.css';
import { AiFillDelete, AiFillEye, AiOutlineCheck } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser } from '../../store/UserSlice';
import { LuEdit } from 'react-icons/lu';

import { useState, useRef, } from 'react';

export default function UsersItem({ user, onDelete, onEdit }) {
  const [editable, setEditable] = useState(false);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const deleteHandler = () => onDelete(user.id);

  const userSlice = useSelector((state) => state.UsersSlice);
  const dispatch = useDispatch();

  const handleDelete = (event) => {
    if (event.target.checked) {
      dispatch(addUser(user));
    } else {
      dispatch(deleteUser(user.id));
    }
  };

  const handleEdit = async() => {
    if (!editable) setEditable(true);
    else {
      const name = `${firstNameRef.current.value} ${lastNameRef.current.value}`;
      const email = emailRef.current.value;
      await onEdit(name, email, user.id);
      setEditable(false);
    }
  };

  let checked = false;

  for (let i = 0; i < userSlice.length; i++) {
    if (user.id === userSlice[i].id) {
      checked = true;
      break;
    }
  }

  return (
    <tr>
      <td>
        <input
          type='checkbox'
          className={css.table_checkbox}
          onChange={handleDelete}
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
      <td>
        <input defaultValue={user.email} readOnly={!editable} ref={emailRef} />
      </td>
      <td>
        <input defaultValue={user.first_name} readOnly={!editable} ref={firstNameRef}/>
      </td>
      <td>
        <input defaultValue={user.last_name} readOnly={!editable} ref={lastNameRef} />
      </td>
      <td className={css.table_actions_bg}>
        <div className={css.table_actions}>
          <AiFillDelete
            className={css.table_delete_action}
            onClick={deleteHandler}
            title='Delete'
          />
          {!editable && (
            <LuEdit
              className={css.table_edit_action}
              title='Edit'
              onClick={handleEdit}
            />
          )}
          {editable && (
            <AiOutlineCheck
              className={css.table_edit_action}
              title='Save'
              onClick={handleEdit}
            />
          )}
          <AiFillEye className={css.table_eye_action} />
        </div>
      </td>
    </tr>
  );
}
