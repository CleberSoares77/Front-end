import { 
    Container,
    Box, 
    Center, 
    Heading, 
    Wrap
} from "@chakra-ui/react"

export function TelaPrincipalPage() {
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
                    </Wrap>
                </Box>
            </Center>
        </Container>
    )
}