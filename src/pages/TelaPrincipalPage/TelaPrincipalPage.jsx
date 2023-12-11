import React from "react";
import { Container, Box, Wrap, Button, Text, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export function TelaPrincipalPage() {
  return (
    <Container maxW="500px" centerContent mt="20">
      <Box bg="#fff" p="4" borderRadius="md" boxShadow="md">
        <Wrap spacing={4} justify="center">
        <Heading>Olá, Seja bem-vindo(a)</Heading>
          <Text>
            Sistema de divulgação de vagas de empregos na região do médio Vale do Jequitinhonha.
          </Text>
          <Text>Caso sua intenção seja fornecer oportunidades de empregos:</Text>
          <Button colorScheme="blue" as={NavLink} to="/index">
            <strong>Cadastro Empresa</strong>
          </Button>
          <Text>Está procurando uma oportunidade de emprego:</Text>
          <Button colorScheme="green" as={NavLink} to="/login">
            <strong>Cadastro Usuário</strong>
          </Button>
        </Wrap>
      </Box>
    </Container>
  );
}
