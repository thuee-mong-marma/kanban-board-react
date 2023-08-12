import styled from "styled-components";

interface ColorProps {
    color: string;
}

interface CardContainerProps {
    hideCard: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
    background-color: ${({ theme }) => theme.colors.components_background};
    opacity: ${({ hideCard }) => (hideCard ? 0.2 : 1)};

    width: 300px;
    height: 120px;
    margin: 0.7rem 0;
    padding: 1.2rem 1rem 0.7rem 1rem;

    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.border};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;

    cursor: pointer !important;
`;

export const CardBorder = styled.div<ColorProps>`
    cursor: grab;
    position: absolute;
    width: calc(100% + 2px);
    top: -1px;
    left: -1px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 10px;
    background-color: ${({ color }) => color};

    &:before {
        content: "";
        height: 0.5px;
        width: 80px;
        background-color: #ffffff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0);
    }
`;

export const CardTitle = styled.h3`
    text-overflow: ellipsis;
    width: calc(100% - 2.5rem);
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    :hover {
        cursor: text;
    }
`;

export const CardBottom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 5px;

    p {
        cursor: pointer !important;
    }
`;

export const CardButton = styled.button`
    background-color: green;
    color: #fff;
    border: 0;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 5px 10px;
    cursor: pointer;
`;

export const CardDeleteButton = styled.button`
    background-color: #db4b4b;
    border-radius: 5px;
    border: none;
    color: #fff;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    top: 1.2rem;
    right: 1rem;
    cursor: pointer;
`;
