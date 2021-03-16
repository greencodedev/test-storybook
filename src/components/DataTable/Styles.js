import styled, { withTheme, css } from 'styled-components'
import ContentLoader from 'react-content-loader'
import { down } from 'styled-breakpoints'
import React from 'react'

export const MainWrapper = styled.div`
    background: ${({ theme: { dataTable } }) => dataTable.background};

    display: grid;
    grid-template-areas:
        'action'
        'header'
        'body'
        'error';

    grid-template-rows: auto;
`
///action.js
/////MainWrapper

export const ActionWrapper = styled.div`
    // width: 100%;
    grid-area: action;
    display: grid;
    grid-template-areas: 'globalSearch recordTotal toggleButtons';
    grid-template-columns: auto;
    justify-content: space-between;
    align-items: stretch;
`

export const GlobalSearchBox = styled.div`
    justify-self: center;
    align-self: center;
    min-height: 35px;

    display: flex;
    align-items: center;

    padding-right: ${({ theme: { dataTable } }) => dataTable.fontSize * 0.8}rem;

    background: ${({ theme: { dataTable } }) => dataTable.background};

    border: ${({ theme: { dataTable } }) => dataTable.borderWidth}px solid;
    border-radius: ${({ theme: { dataTable } }) => dataTable.borderRadius}rem;
    border-color: ${({ theme: { dataTable } }) => dataTable.borderColor};

    input {
        padding-left: 1rem;
        outline: none;
        border: none;
        width: 100%;
    }

    &:active,
    &:focus {
        border-color: ${({ theme: { dataTable } }) => dataTable.borderColorFocus};
        box-shadow: 0 0 3px 2px ${({ theme: { dataTable } }) => dataTable.shadowFocus};
    }
`

export const MainTableWrapper = styled.div`
    box-sizing: border-box; //add to global * for all HTML attributes

    width: 100%;

    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    background: ${({ theme: { dataTable } }) => dataTable.background};
    border-top: ${({ theme: { dataTable } }) => dataTable.borderWidth}px solid
        ${({ theme: { dataTable } }) => dataTable.borderColor};
    border-bottom: ${({ theme: { dataTable } }) => dataTable.borderWidth}px solid
        ${({ theme: { dataTable } }) => dataTable.borderColor};

    padding: ${({ theme: { dataTable } }) => `${dataTable.fontSize * 0.25}rem 0`};
    flex-wrap: wrap;
`

export const ToggleView = styled.div`
    cursor: pointer;
    grid-area: toggleButtons;
    justify-self: center;
    align-self: center;
    display: grid;
    grid-template-columns: repeat(3, minmax(20px, 1fr));
    span {
        margin-right: ${({ theme: { dataTable } }) => dataTable.fontSize * 0.5}rem;
    }
`
export const TotalRecordWrapper = styled.div`
    grid-area: recordTotal;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-flow: row wrap;
`

export const TotalRecordsSpan = styled.span`
    font-size: ${({ theme: { dataTable } }) => dataTable.fontSize}rem;
    padding: 0 ${({ theme: { dataTable } }) => dataTable.fontSize}rem;
    white-space: nowrap;
`
/////loader

const LoaderDiv = withTheme(({ theme: { dataTable } }) => (
    <ContentLoader
        height={160}
        width={400}
        speed={3}
        primaryColor={dataTable.loaderPrimaryColor}
        secondaryColor={dataTable.loaderSecondaryColor}
    >
        {' '}
        <circle cx="10" cy="20" r="8" />
        <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="50" r="8" />
        <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="80" r="8" />
        <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="110" r="8" />
        <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
))

export const Loader = styled(LoaderDiv)`
    grid-area: body;
`

///
//**** */ header.js
//////Table Header
//*** */

export const HeaderWrapper = styled.div`
    grid-area: header;
`

export const TableHeaderRow = styled.div`
    display: flex;
    justify-content: space-between;

    background: ${({ theme: { dataTable } }) => dataTable.background};
    border-bottom: ${({ theme: { dataTable } }) => dataTable.borderWidth}px solid
        ${({ theme: { dataTable } }) => dataTable.loaderPrimaryColor};
    flex-wrap: wrap;
    
    ${down('tablet')} {
        justify-content: flex-start;
    }
`
export const TableHeaderTitle = styled.div`
    /* display: inline-flex ; */
    align-items: center;
    text-align: center;
        
    width: 100%;
    
    white-space: nowrap;
    overflow: hidden;

    font-size: ${({ theme: { dataTable } }) => dataTable.fontSize}rem;
    font-weight: ${({ theme: { dataTable } }) => dataTable.fontWeight};
    
    padding-bottom: ${({ theme: { dataTable } }) => `${dataTable.fontSize * 0.5}rem`};

    & > div.input  {
        margin : ${({ theme: { dataTable } }) => dataTable.fontSize * -0.5}rem 0;
    }
}

`
export const TitlesWrapper = styled.div`
    padding: ${({ theme: { dataTable } }) => dataTable.fontSize}rem 0rem;
    display: flex;
    flex-direction: column;
`

export const TableHeaderSearchBox = styled.div`
    width: 100%;
    text-align: center;
`

//////**** body.js
///    * /

export const Row = styled.div`
    font-size: ${({ theme: { dataTable } }) => dataTable.fontSize * 1.2}rem;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border: ${({ theme: { dataTable } }) => dataTable.borderWidth * 0.5}px solid #e1e4e8;
    background-color: ${({ theme: { dataTable } }) => dataTable.background};

    &:hover {
        border-left: ${({ theme: { dataTable } }) => dataTable.borderWidth}px solid
            ${({ theme: { dataTable } }) => dataTable.hoverColor};
    }

    ${({ isCondensed }) =>
        !isCondensed &&
        css`
            flex-wrap: wrap;
            ${down('tablet')} {
                justify-content: flex-start;
            }
        `}
`

export const AutoSizeWrapper = styled.div`
    grid-area: body;
`

export const ViewContainer = styled.div`
    & > div {
        overflow: hidden auto !important;
        ${({ isMainWrap, isHeader }) =>
        isMainWrap &&
        css`
                height: calc(100vh - ${!isHeader ? '140px' : '207px'}) !important;
            `}
`

export const TableHeaderContainer = styled.div`
    padding: ${({ theme: { dataTable } }) => dataTable.fontSize * 0.7}rem 0;
`

export const TableHeaderTitleItem = styled.span`
    margin-right: ${({ theme: { dataTable } }) => dataTable.fontSize * 0.5}rem;

    & + svg {
        ${({ sortIconSize }) =>
        sortIconSize
            ? css`
                      width: ${sortIconSize}px;
                  `
            : ``}
`

export const ColumnSearchBox = styled.span`
    width: 100%;

    border-bottom: ${({ theme: { dataTable } }) => dataTable.borderWidth}px solid
        ${({ theme: { dataTable } }) => dataTable.borderColor};

    input {
        width: 90%;
        border: ${({ theme: { dataTable } }) => dataTable.borderWidth}px solid
            ${({ theme: { dataTable } }) => dataTable.borderColor};
        border-radius: ${({ theme: { dataTable } }) => dataTable.borderRadius}rem;
        font-size: ${({ theme: { dataTable } }) => dataTable.fontSize * 1.2}rem;

        &:focus {
            outline: none !important;
        }
    }
`

export const HeadContent = styled.div`
    text-align: center;
    span {
        margin-bottom: 10px;
        display: block;
    }
    img {
        height: 70px;
        width: 250px;
        object-fit: contain;
        display: block;
        margin: 0 auto;
    }
`

export const HeadInfo1 = styled.div`
    order: 1;
`

export const HeadInfo2 = styled.div`
    order: 2;
    text-align: center;
    span {
        margin-right: 30px;
    }
    @media screen and (max-width: 767px) {
        order: 3;
        width: 100%;
        padding: 4px 0;
    }
`

export const HeadInfo3 = styled.div`
    order: 3;
    @media screen and (max-width: 767px) {
        order: 2;
    }
`

export const Cell = styled.div`
    box-sizing: border-box;

    padding: ${({ theme: { dataTable } }) => dataTable.fontSize * 1.2}rem;

    border: ${({ theme: { dataTable } }) => dataTable.borderWidth}px solid
        ${({ theme: { dataTable } }) => dataTable.borderColor};
    background-color: ${({ theme: { dataTable } }) => dataTable.background};

    &:hover {
        border-left: ${({ theme: { dataTable } }) => dataTable.borderWidth}px solid
            ${({ theme: { dataTable } }) => dataTable.hoverColor};
    }
`
//
