import React, { useContext, useEffect, useState } from "react";

import { Draggable } from "react-beautiful-dnd";
import { ThemeContext } from "styled-components";

import getCategoryBackgroundColor from "../../helpers/getCategoryBackgroundColor";
import { useModal } from "../../hooks/useModal";
import { useAppDispatch } from "../../hooks/useRedux";
import { deleteCard } from "../../store/slices/cards.slice";
import { updateColumns } from "../../store/slices/columns.slice";
import ICard from "../../interfaces/ICard";
import Badge from "../Badge";

import {
    CardBorder,
    CardBottom,
    CardContainer,
    CardButton,
    CardTitle,
    CardDeleteButton
} from "./components";

interface CardProps {
    card: ICard;
    index: number;
}

const Card: React.FC<CardProps> = ({ card, index }) => {
    const theme = useContext(ThemeContext);

    const [backgroundColor, setBackgroundColor] = useState<string>(
        theme.colors.primary
    );

    const { toggleVisibility } = useModal();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (card) {
            const categoryColor = getCategoryBackgroundColor(
                theme,
                card.category
            );
            setBackgroundColor(categoryColor);
        }
    }, [card]);

    const handleDelete = () => {
        dispatch(deleteCard(card));
        dispatch(updateColumns(card.id));
    };

    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) => (
                <CardContainer
                    hideCard={card.hidden}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <CardBorder color={backgroundColor} />
                    <CardTitle>{card.title}</CardTitle>
                    <CardDeleteButton onClick={handleDelete}>
                        X
                    </CardDeleteButton>
                    <CardBottom>
                        <Badge category={card.category} />
                        <CardButton onClick={() => toggleVisibility(card)}>
                            Edit
                        </CardButton>
                    </CardBottom>
                </CardContainer>
            )}
        </Draggable>
    );
};

export default Card;
