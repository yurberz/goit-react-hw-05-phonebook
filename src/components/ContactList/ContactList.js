import React from "react";
import PropTypes from "prop-types";
import Div from "./ContactListStyled";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Div>
      <TransitionGroup component="ul">
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames="itemFade">
            <li className="contactList__item">
              <p>
                {name}: {number}
              </p>
              <button
                className="delBtn"
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
