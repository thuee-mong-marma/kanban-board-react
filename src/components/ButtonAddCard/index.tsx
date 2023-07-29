import React from "react";
import { useModal } from "../../hooks/useModal";

import { Container } from "./components";

export const ButtonAddCard: React.FC = () => {
    const { toggleVisibility } = useModal();

    const handleOpenModal = () => {
        toggleVisibility(undefined);
    };

    return (
        <Container onClick={handleOpenModal}>
            <strong>+ Add Card</strong>
        </Container>
    );
};
