import styled from "styled-components";
import { SCREEN_BREAKPOINTS } from "../../constants/breakpoints";

interface LabelContainerProps {
    color: any;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    padding: 5rem 0 5rem 0;
    position: relative;
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {
        padding: 2rem 0 2rem 0;
    }
`;

export const SwitchContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: ${SCREEN_BREAKPOINTS.EXTRA_SMALL}px) {
        margin-top: 10px;
    }
`;

export const SwitchTitle = styled.h3`
    margin: 0 10px;
    color: ${({ theme }) => theme.colors.text_primary}
    line-height: 100%;
    font-weight: bold;
`;

export const StatusesColumnsContainer = styled.div`
    padding-top: 3rem;
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1.5rem;
    max-width: 100vw;
    overflow-x: auto;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {
        flex-direction: column;
    }
`;

export const FiltersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
    padding-top: 1.5rem;
`;

export const LabelContainer = styled.div<LabelContainerProps>`
    padding: 5px 10px;
    background-color: ${({ color }) => color};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    cursor: pointer;

    label {
        font-weight: bold;
        color: #fff;
        padding-left: 5px;
        text-transform: uppercase;
        cursor: pointer;
    }
`;

export const SearchAndFilters = styled.div`
    width: 100%;
    max-width: 800px;

    @media (max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {
        width: 100%;
        max-width: unset;
    }
`;

export const TitleAndSwitch = styled.div`
    @media (max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: ${SCREEN_BREAKPOINTS.EXTRA_SMALL}px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;
