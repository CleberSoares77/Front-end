import {
    Container,
    Box,
    Center,
    Heading,
    Input,
    Button,
    Wrap,
    ButtonGroup
} from "@chakra-ui/react"

export function HomePage() {
    return (
        <Container
            maxW='2xl'
            centerContent
            height='100vh'
        >
            <Center h='40vh'>
                <Box padding='4' color='black' maxW='xl'>
                    <Wrap spacing={4}>
                        <Heading>
                            Olá, Seja bem-vindo(a)
                        </Heading>
                        <Input variant='outline' placeholder='E-mail' type="email" />
                        <Input variant='outline' placeholder='Senha' type='password' />
                        <ButtonGroup gap='2'>
                            <Button colorScheme='teal'>Cadastre-se</Button>
                            <Button colorScheme='teal'>Entrar</Button>
                        </ButtonGroup>
                    </Wrap>
                </Box>
            </Center>
        </Container>
    )
}