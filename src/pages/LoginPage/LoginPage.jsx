import { 
    Container,
    Box, 
    Center, 
    Heading, 
    Input, 
    Button, 
    Wrap
} from "@chakra-ui/react"

export function LoginPage() {
    return (
        <Container
            maxW='2xl'
            centerContent
            height='100vh'
        >
            <Center h='100vh'>
                <Box padding='4'  color='black' maxW='xl'>
                    <Wrap spacing={4}>
                    <Heading>
                        Cleber
                    </Heading>
                    <Input variant='outline' placeholder='E-mail' type="email" />
                    <Input variant='outline' placeholder='Senha' type='password'/>
                    <Button colorScheme='teal' size='lg'>
                        Entrar
                    </Button>
                    </Wrap>
                </Box>
            </Center>
        </Container>
    )
}