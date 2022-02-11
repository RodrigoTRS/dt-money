import styled from "styled-components";

export const Container = styled.div `
    margin-top: 4rem;
    overflow: auto;
    
    table {
        width: 100%;
        border-spacing: 0 0.5rem;
    }

    th {
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
    }

    td {
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        color: var(--text-body);

        &:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        }

        &:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        }

        &.deposit {
            color: var(--green);
        }

        &.withdraw {
            color: var(--red);
        }
    }

`;