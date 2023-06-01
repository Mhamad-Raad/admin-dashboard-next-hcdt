'use client';

import { useRef, useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';

import css from './Modal.module.css';

export default function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fetchState, setFetchState] = useState({
    loading: false,
    error: false,
    response: {},
  });

  const initialRef = useRef(null);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);

  const createUser = async () => {
    setFetchState({...fetchState, loading: true});
    const name = `${firstNameRef.current.value} ${lastNameRef.current.value}`;
    const email = emailRef.current.value;

    // this is also fake becuase the api does not do anything
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        job: email
      }),
    }).then((res) => res.json());

  };

  return (
    <>
      <Button onClick={onOpen} className={css.header_button}>
        <span className={css.header_button_plus}>+</span>
        <span>Create</span>
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pb={2.2}>Create new user</ModalHeader>
          <p className={css.modal_subtitle}>
            Enter the field below and create new user{' '}
          </p>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={firstNameRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' ref={lastNameRef} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder='email@gmail.com' ref={emailRef} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button w='100%' className={css.modal_button} onClick={createUser}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
