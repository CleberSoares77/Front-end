import {
    Container,
    Box,
    Center,
    Heading,
    Input,
    Button,
    Wrap,
    FormControl,
    FormLabel,
    Select
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
                            Cleber
                        </Heading>
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                        />
                        <FormControl>
                            <FormLabel>País</FormLabel>
                            <Select placeholder='Selecione o país:'>
                                <option>United Arab Emirates</option>
                                <option>Nigeria</option>
                            </Select>
                        </FormControl>
                    </Wrap>
                </Box>
            </Center>
        </Container>
    )
}