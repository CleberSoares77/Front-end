import {
    Container,
    Box,
    Center,
    Heading,
    Input,
    Button,
    Wrap
} from "@chakra-ui/react"

export function CadastroPage() {
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
                            Cleber J S Santos
                        </Heading>
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                        />
                    </Wrap>
                </Box>
            </Center>
        </Container>
    )
}