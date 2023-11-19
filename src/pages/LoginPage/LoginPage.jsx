import { useRef } from "react";
import {
    Container,
    Box,
    Center,
    Heading,
    Input,
    Button,
    Wrap
} from "@chakra-ui/react"

import { SVD } from "../../config/api"

export function LoginPage() {

    const emailRef = useRef('')
    const senhaRef = useRef('')

    const UsandoLogin = async () => {
        let email = emailRef.current.value
        let senha = senhaRef.current.value

        if (email && senha) {
            SVD.post('/Usuario/login', {
                email,
                senha
            })
                .then(async function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    return (
        <Container
            maxW='2xl'
            centerContent
            height='100vh'
        >
            <Center h='100vh'>
                <Box padding='4' color='black' maxW='xl'>
                    <Wrap spacing={4}>
                        <Heading>
                            Cleber
                        </Heading>
                        <Input variant='outline'
                            placeholder='E-mail'
                            type="email"
                            ref={emailRef}
                        />
                        <Input variant='outline'
                            placeholder='Senha'
                            type='password'
                            ref={senhaRef}
                        />
                        <Button colorScheme='teal'
                            size='lg'
                            onClick={UsandoLogin}
                        >
                            Entrar
                        </Button>
                    </Wrap>
                </Box>
            </Center>
        </Container>
    )
}