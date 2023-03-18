import PropTypes from 'prop-types';

import {ContactTable, HeadTable, TableBtn, TableTbody, TableTh, TableTr} from "./Contacts.styled";
import {AiOutlineDelete} from 'react-icons/ai';

const Contacts = ({contact, onDeleteContact}) => {
  return (
    <ContactTable>
      <HeadTable>
        <tr>
          <TableTh>Name</TableTh>
          <TableTh>Number</TableTh>
          <TableTh>Option</TableTh>
        </tr>
      </HeadTable>
      <TableTbody>

        {
          contact.map(({id, name, number}) =>
            <TableTr key={id}>
              <td>
                {name}
              </td>
              <td>
                {number}
              </td>
              <td>
                <TableBtn
                  type='button'
                  onClick={() => onDeleteContact(id)}>
                  <AiOutlineDelete/>
                </TableBtn>
              </td>
            </TableTr>)
        }

      </TableTbody>
    </ContactTable>
  )
}
Contacts.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })),
  onDeleteContact: PropTypes.func.isRequired
}
export default Contacts
