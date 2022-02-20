import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Lorem,
    useDisclosure,
    Text,
    Box,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str);

export default function ModalProjeto({ projectTitle, description }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isMobile, setIsMobile] = useState(false);

    const textIsMobile = () => isMobile ? 'Ver Desktop' : 'Ver Mobile';

    return (
        <>
            <Box>
                <Button onClick={onOpen}>{projectTitle}</Button>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior='inside' size='full'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{projectTitle}</ModalHeader>

                    <ModalCloseButton />

                    <ModalBody justifyContent='center'>
                        {isMobile ?
                            <Image placeholder='blur' unoptimized={true} blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(750, 475))}`} src={'/images/projects/ceramicasilveira.com.br_(iphone se).jpg'} width={750} height={9828} alt="" />
                            :
                            <Image placeholder='blur' unoptimized={true} blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 475))}`} src={'/images/projects/ceramicasilveira.com.br_.jpg'} width={1920} height={3906} alt="" />}
                    </ModalBody>

                    <ModalFooter justifyContent='space-between'>
                        <Box>
                            <Text>{description}</Text>
                        </Box>
                        <Box>
                            {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Fechar
                            </Button> */}
                            <Button colorScheme='gray' onClick={() => setIsMobile(!isMobile)}>{textIsMobile()}</Button>
                        </Box>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}