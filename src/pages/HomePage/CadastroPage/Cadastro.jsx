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
        curriculo: null, // Adicionado campo de currículo
    });

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "estado") {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        } else if (name === "curriculo" && files.length > 0) {
            // Armazena o arquivo de currículo
            setFormData((prevData) => ({
                ...prevData,
                [name]: files[0],
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
        
        // Crie um objeto FormData para enviar o arquivo
        const formDataToSend = new FormData();
        formDataToSend.append("nome", formData.nome);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("senha", formData.senha);
        formDataToSend.append("confirmarSenha", formData.confirmarSenha);
        formDataToSend.append("estado", formData.estado);
        formDataToSend.append("curriculo", formData.curriculo);

        console.log("Dados do formulário:", formDataToSend);

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
                                type="file" // Campo de currículo em PDF
                                name="curriculo"
                                onChange={handleInputChange}
                                mt={2}
                            />

                            <RadioGroup defaultValue="1">
                                <Stack spacing={4} direction="row">
                                    <Radio value="2">Masculino</Radio>
                                    <Radio value="3">Feminino</Radio>
                                    <Radio value="4">Outro(a)</Radio>
                                </Stack>
                            </RadioGroup>

                            <Button type="submit" colorScheme="teal" mt={4}>
                                Cadastrar
                            </Button>
                        </form>
                        <Wrap spacing={60} direction="row" mt={4}>
                            <Link to="/entrar">Já tem uma conta? Entre aqui.</Link>
                            <Link to="/">Voltar</Link>
                        </Wrap>
                    </Wrap>
                </Box>
            </Center>
        </Container>
    );
}
