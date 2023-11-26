import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Center,
  Heading,
  Input,
  Button,
  Wrap,
  ButtonGroup,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

export function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleLogin = () => {
    if (isFormValid) {
      // Adicione aqui a lógica de login ou redirecionamento
      console.log("Campos preenchidos:", email, password);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <Container maxW="2xl" centerContent height="100vh">
      <Center h="70vh">
        <Box padding="4" color="black" maxW="xl">
          <Wrap spacing={4}>
            <Heading>Olá, Seja bem-vindo(a)</Heading>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input
                variant="outline"
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Senha</FormLabel>
              <Input
                variant="outline"
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
            {showAlert && (
              <Alert status="warning" marginBottom="4">
                <AlertIcon />
                Preencha todos os campos.
              </Alert>
            )}
            <Link to="/cadastro">
              <Button colorScheme="teal" marginBottom="2">
                Cadastre-se
              </Button>
            </Link>
            <Button
              colorScheme="teal"
              marginBottom="2"
              onClick={handleLogin}
              disabled={!isFormValid}
            >
              Entrar
            </Button>
            <ButtonGroup flexDirection="column" align="center">
              <Link to="/">
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