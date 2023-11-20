import React, { useState } from "react";
import {
    Container,
    Box,
    Center,
    Heading,
    Input,
    Button,
    Wrap,
    RadioGroup,
    Stack,
    Radio

} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function CadastroPage() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        estado: "",
        cidade: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Se o campo alterado for o estado, limpe a cidade selecionada
        if (name === "estado") {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
                cidade: "",
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do formulário:", formData);
        // Adicione aqui a lógica para enviar os dados para o servidor ou realizar outras ações necessárias
    };

    return (
        <Container maxW="2xl" centerContent height="100vh">
            <Center h="100vh">
                <Box padding="4" color="black" maxW="xl">
                    <Wrap spacing={4} direction="column">
                        <Heading>Cadastro</Heading>
                        <form onSubmit={handleFormSubmit}>
                            <Input
                                placeholder="Nome"
                                size="md"
                                name="nome"
                                onChange={handleInputChange}
                                value={formData.nome}
                                mt={2}
                            />
                            <Input
                                placeholder="E-mail"
                                size="md"
                                name="email"
                                type="email"
                                onChange={handleInputChange}
                                value={formData.email}
                                mt={2}
                            />
                            <Input
                                placeholder="Senha"
                                size="md"
                                name="senha"
                                type="password"
                                onChange={handleInputChange}
                                value={formData.senha}
                                mt={2}
                            />
                            <Input
                                placeholder="Confirme a Senha"
                                size="md"
                                name="confirmarSenha"
                                type="password"
                                onChange={handleInputChange}
                                value={formData.confirmarSenha}
                                mt={2}
                            />

                            <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                                mt={2}
                            />

                            <RadioGroup defaultValue='1'>
                                <Stack spacing={4} direction='row'>
                                    <Radio value='2'>Masculino</Radio>
                                    <Radio value='3'>Feminino3</Radio>
                                    <Radio value='4'>Outro(a)</Radio>
                                </Stack>
                            </RadioGroup>
                            

                            <Button type="submit" colorScheme="teal" mt={4}>
                                Cadastrar
                            </Button>
                        </form>
                        <Link to="/entrar" mt={4}>
                            Já tem uma conta? Entre aqui.
                        </Link>
                    </Wrap>
                </Box>
            </Center>
        </Container>
    );
}
