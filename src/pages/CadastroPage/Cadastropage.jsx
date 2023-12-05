import React from "react";
import {
    Container,
    Box,
    Heading,
    Text,
    Input,
    Select,
    Button,
    Wrap,
    Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function CadastroPage() {
    return (
        <Container
            maxW="xl"
            centerContent
            height="120vh"
            bgColor="#49a2ab"
            color="black"
        >
            <Heading textAlign="center">Cadastro de Usuário</Heading>
            <Box
                maxW="500px"
                w="100%"
                bgColor="white"
                p="20px"
                borderRadius="5px"
                boxShadow="md"
                mt="20px"
                position="relative"
            >
                <form>
                    <Text as="label" display="block" mb="10px" fontWeight="bold">
                        Nome:
                    </Text>
                    <Input type="text" id="nome" name="nome" required mb="15px" />

                    <Text as="label" display="block" mb="10px" fontWeight="bold">
                        Sobrenome:
                    </Text>
                    <Input type="text" id="sobrenome" name="sobrenome" required mb="15px" />

                    <Text as="label" display="block" mb="10px" fontWeight="bold">
                        Data de Nascimento:
                    </Text>
                    <Input type="date" id="dataNascimento" name="dataNascimento" required mb="15px" />

                    <Text as="label" display="block" mb="10px" fontWeight="bold">
                        Gênero:
                    </Text>
                    <Select id="genero" name="genero" mb="15px">
                        <option value="?">?</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </Select>

                    <Text as="label" display="block" mb="10px" fontWeight="bold">
                        E-mail:
                    </Text>
                    <Input type="email" id="email" name="email" required mb="15px" />

                    <Text as="label" display="block" mb="10px" fontWeight="bold">
                        Senha:
                    </Text>
                    <Input type="password" id="senha" name="senha" required mb="15px" />

                    <Text as="label" display="block" mb="10px" fontWeight="bold">
                        Confirmar Senha:
                    </Text>
                    <Input type="password" id="confirmarSenha" name="confirmarSenha" required mb="15px" />

                    <Button
                        type="submit"
                        bgColor="#95a694"
                        color="#010300"
                        px="20px"
                        borderRadius="3px"
                        fontSize="18px"
                        cursor="pointer"
                        _hover={{ bgColor: "#0056b3" }}
                    >
                        Cadastrar
                    </Button>
                </form>

                <Wrap spacing={20} direction="row" mt={4}>
                    <Link to="/login">Já tem uma conta? Clique aqui</Link>
                </Wrap>

                {/* Botão "Voltar" no canto inferior direito */}
                <Box position="absolute" bottom="10px" right="10px">
                    <ChakraLink as={Link} to="/" textDecoration="none" color="#007bff">
                        Voltar
                    </ChakraLink>
                </Box>
            </Box>
        </Container>
    );
}
