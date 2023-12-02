import React, { useState } from "react";
import { Container, Box, Text, Link, Flex, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
    FaHome,
    FaSearch,
    FaEnvelope,
    FaGlobe,
    FaTrash,
} from "react-icons/fa";

export function PaginaEmpresa() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarOpen = () => {
        setSidebarOpen(true);
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

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
                        width={{ base: "100%", md: "10%" }}
                        bg="#ccc"
                        padding="4"
                        minH="300px"
                    >
                        <Text fontSize="xl">Menu</Text>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            <li>
                                <Link
                                    as={RouterLink}
                                    to="/"
                                    color="teal.500"
                                    fontSize="20px"
                                    display="flex"
                                    alignItems="center"
                                    mb="2"
                                >
                                    <FaHome />
                                    <Text as="span" ml="2">
                                        Item 1
                                    </Text>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    as={RouterLink}
                                    to="/"
                                    color="teal.500"
                                    fontSize="20px"
                                    display="flex"
                                    alignItems="center"
                                    mb="2"
                                >
                                    <FaSearch />
                                    <Text as="span" ml="2">
                                        Item 2
                                    </Text>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    as={RouterLink}
                                    to="/"
                                    color="teal.500"
                                    fontSize="20px"
                                    display="flex"
                                    alignItems="center"
                                    mb="2"
                                >
                                    <FaEnvelope />
                                    <Text as="span" ml="2">
                                        Item 3
                                    </Text>
                                </Link>
                            </li>
                        </ul>
                    </Box>


                    <Box
                        width={{ base: "100%", md: "80%" }}
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
                width={{ base: "100%", md: "100%" }}
                bg="#777"
                color="white"
                padding="20"
                mt="4"
                textAlign="center"
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

            {/* Sidebar */}
            <Box
                className={`chakra-modal__content ${sidebarOpen ? "open" : ""}`}
                id="mySidebar"
            ></Box>
        </Container>
    );
}
