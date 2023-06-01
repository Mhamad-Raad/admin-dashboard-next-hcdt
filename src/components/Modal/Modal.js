'use client';

import { useRef, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';

import Loading from '../Loading/Loading';

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
    setFetchState({ ...fetchState, loading: true });
    const name = `${firstNameRef.current.value} ${lastNameRef.current.value}`;
    const email = emailRef.current.value;

    if (firstNameRef.current.value === '' || lastNameRef.current.value === '' || email === '') {
      setFetchState({ ...fetchState, error: true, loading: false });
      return;
    }

    // this is also fake becuase the api does not do anything
    await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        job: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setFetchState({
          loading: false,
          error: false,
          response: data,
        });
      })
      .catch((e) => {
        console.log(e);
        console.log('error');
        setFetchState({ ...fetchState, error: true, loading: false });
        return;
      });
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
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input ref={firstNameRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' ref={lastNameRef} />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Email</FormLabel>
              <Input placeholder='email@gmail.com' ref={emailRef} />
            </FormControl>
          </ModalBody>

          <ModalFooter className={css.modal_footer}>
            <Button w='100%' className={css.modal_button} onClick={createUser}>
              Update
            </Button>
            <Flex
              align='center'
              justify='center'
              w='100%'
              bg='#d9d9d9'
              h='79.88px'
              p='10px'
              borderRadius='5px'
              className={css.status}
            >
              {fetchState.loading && <Loading />}
              {fetchState.error && (
                <p>
                  Something went wrong, Please try again later, or check your
                  inputs
                </p>
              )}
              {JSON.stringify(fetchState.response) !== '{}' && (
                <p>
                  User with id of {fetchState.response?.id} has been created
                </p>
              )}
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
