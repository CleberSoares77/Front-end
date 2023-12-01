import React from "react";
import { Container, Box, Text, Link, Flex, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export function PaginaEmpresa() {
  return (
    <Container maxW="100%" centerContent minHeight="100vh" padding="0">
      <Box width="100%" textAlign="center" padding="4">
        <Box bg="#666" color="white" padding="4">
          <Text fontSize="3xl" fontWeight="bold">
            Bem-vindo ao Cleber
          </Text>
        </Box>

        <Flex
          mt="4"
          direction={{ base: "column", md: "row" }}
          align={{ base: "stretch", md: "flex-start" }}
        >
          <Box
            width={{ base: "100%", md: "30%" }}
            bg="#ccc"
            padding="4"
            minH="300px"
          >
            <Text fontSize="xl">Menu</Text>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link color="teal.500">Item 1</Link>
              </li>
              <li>
                <Link color="teal.500">Item 2</Link>
              </li>
              <li>
                <Link color="teal.500">Item 3</Link>
              </li>
            </ul>
          </Box>

          <Box
            width={{ base: "100%", md: "70%" }}
            bg="#f1f1f1"
            padding="4"
            minH="300px"
          >
            <Text fontSize="xl">Conteúdo</Text>
            <h1>Seu conteúdo aqui</h1>
            <p>Adapte e preencha com o conteúdo desejado.</p>
          </Box>
        </Flex>
      </Box>

      <Box
        bg="#777"
        color="white"
        padding="4"
        mt="4"
        textAlign="center"
        flexShrink={0}
        height="100%"
      >
        <Text fontSize="md">Footer</Text>
        <Button
          as={RouterLink}
          to="/" // Substitua "/outra-pagina" pelo caminho desejado
          colorScheme="teal"
          mt="2"
        >
          Sair
        </Button>
      </Box>
    </Container>
  );
}
