import { useToast } from '@chakra-ui/react';

export default function ToastExample() {
  const toast = useToast();
  return (
    <button
      onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </button>
  );
}
