import styled from "styled-components";
import { SCREEN_BREAKPOINTS } from "../../constants/breakpoints";

interface ContainerProps {
    isFirstColumn: boolean;
}

export const Container = styled.div<ContainerProps>`
    padding: 0.75rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.column_background};
`;

export const CardsList = styled.div`
    margin-top: 1rem;
    height: 50vh;
    width: 300px;
    overflow-y: auto;
    overflow-x: hidden;
`;
