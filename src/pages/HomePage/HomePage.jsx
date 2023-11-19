import {
    Container,
    Box,
    Center,
    Heading,
    Input,
    Button,
    Wrap,
    ButtonGroup
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom"; // Importe o Link do React Router
  
  export function HomePage() {
    return (
      <Container maxW="2xl" centerContent height="100vh">
        <Center h="40vh">
          <Box padding="4" color="black" maxW="xl">
            <Wrap spacing={4}>
              <Heading>Olá, Seja bem-vindo(a)</Heading>
              <Input variant="outline" placeholder="E-mail" type="email" />
              <Input variant="outline" placeholder="Senha" type="password" />
                <Link to="/cadastro">
                  <Button colorScheme="teal" marginBottom="2">
                    Cadastre-se
                  </Button>
                </Link>
                <Link to="/entrar">
                  <Button colorScheme="teal" marginBottom="2">
                    Entrar
                  </Button>
                </Link>
                <ButtonGroup flexDirection="column" align="center">
                {/* Adicione um botão para "Esqueceu a senha?" abaixo dos campos de cadastro e entrar */}
                <Link to="/esqueceu-senha">
                  <Button colorScheme="teal" variant="link">
                    Esqueceu a senha?
                  </Button>
                </Link>
              </ButtonGroup>
            </Wrap>
          </Box>
        </Center>
      </Container>
    );
  }
  
/*import {
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
*/