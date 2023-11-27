import React from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";

export function Empresa() {
  return (
    <Container
      maxW="500px"
      centerContent
      mt="20"
      bgColor="#f2f2f2"
      h="100vh"
    >
      <Box
        maxW="500px"
        w="100%"
        bgColor="#ffffff"
        p="20px"
        borderRadius="5px"
        boxShadow="md"
      >
        <Heading>Cadastro de Empresas</Heading>
        <form>
          <Text as="label" display="block" mb="10px" fontWeight="bold">
            Nome da Empresa:
          </Text>
          <Input type="text" id="nome" name="nome" required mb="15px" />

          <Text as="label" display="block" mb="10px" fontWeight="bold">
            CNPJ:
          </Text>
          <Input type="text" id="cnpj" name="cnpj" required mb="15px" />

          <Text as="label" display="block" mb="10px" fontWeight="bold">
            Email da Empresa:
          </Text>
          <Input type="email" id="email" name="email" required mb="15px" />

          <Text as="label" display="block" mb="10px" fontWeight="bold">
            Senha:
          </Text>
          <Input type="password" id="senha" name="senha" required mb="15px" />

          <Text as="label" display="block" mb="10px" fontWeight="bold">
            Confirmar Senha:
          </Text>
          <Input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            required
            mb="15px"
          />

          <Button
            type="submit"
            bgColor="#007bff"
            color="#fff"
            px="20px"
            borderRadius="3px"
            fontSize="18px"
            cursor="pointer"
            _hover={{ bgColor: "#0056b3" }}
          >
            Cadastrar Empresa
          </Button>
        </form>
      </Box>
    </Container>
  );
}
