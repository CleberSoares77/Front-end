import React from "react";
import {
  Container,
  Box,
  Text,
  Input,
  Button,
  Flex,
  Link as ChakraLink
} from "@chakra-ui/react";

export function EsqueceuSenhaPage() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Email enviado para redefinição:", email);
    // Adicione aqui a lógica para enviar instruções de redefinição de senha
  };

  return (
    <Container maxW="xl" centerContent mt="10">
      <Box bg="#ffffff" p="8" borderRadius="md" boxShadow="md" w="500px">
        <Text textAlign="center" mb="4">
          Digite seu e-mail para que seja encaminhado instruções da redefinição de senha.
        </Text>

        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email:</label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            mb="4"
            placeholder="Digite seu e-mail"
          />

          <Flex justify="space-between" align="center">
            <Button type="submit" colorScheme="blue">
              Redefinir
            </Button>

            <Box className="back-link">
              <ChakraLink onClick={() => window.history.back()} color="blue.500">
                Voltar
              </ChakraLink>
            </Box>
          </Flex>
        </form>
      </Box>
    </Container>
  );
}
