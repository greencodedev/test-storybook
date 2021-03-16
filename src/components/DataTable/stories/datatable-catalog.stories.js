import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../const/theme'
import DataTable from '../index'
import GlobalStyles from '../../../const/globalStyles'
import styled from 'styled-components'
import { props, sampleSliderColumns, sampleNumberRangeColumns, condensedColumns } from './sample'
import CatalogHeaderWrapper from './CatalogHeaderWrapper'
import { Cell } from './Styles'

export default { title: 'Data Table Catalog', component: DataTable }

const CatalogMainWrapper = styled.div`
    background: #f8f8f8;

    display: grid;
    grid-template-areas:
        'header action'
        'header body'
        'header body'
        'header error';
    grid-template-columns: 1fr 4fr;

    @media screen and (max-width: 414px) {
        grid-template-areas:
        'header action'
        'header body1'
        'header body'
        'header error';
    grid-template-columns: 0;
    }
`

export const DefaultCatalogSetup = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DataTable
            {...props}
            wrapper={{
                MainWrapper: CatalogMainWrapper,
                HeaderWrapper: CatalogHeaderWrapper,
            }}
        />
    </ThemeProvider>
)

export const WithCustomGlobalSearch = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DataTable
            {...props}
            globalSearchBarComponent={<div>custom search component</div>}
            wrapper={{
                MainWrapper: CatalogMainWrapper,
                HeaderWrapper: CatalogHeaderWrapper,
            }}
        />
    </ThemeProvider>
)

export const CatalogSetupWithSliderFilter = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DataTable
            {...props}
            columns={sampleSliderColumns}
            wrapper={{
                MainWrapper: CatalogMainWrapper,
                HeaderWrapper: CatalogHeaderWrapper,
            }}
        />
    </ThemeProvider>
)

export const CatalogSetupWithNumberRangeFilter = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DataTable
            {...props}
            columns={sampleNumberRangeColumns}
            wrapper={{
                MainWrapper: CatalogMainWrapper,
                HeaderWrapper: CatalogHeaderWrapper,
            }}
        />
    </ThemeProvider>
)

export const CatalogSetupWithRowCondensed = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Cell>
            <DataTable
                {...props}
                view="ROWCONDENSED"
                columns={condensedColumns}
                wrapper={{
                    MainWrapper: CatalogMainWrapper,
                    HeaderWrapper: CatalogHeaderWrapper,
                }}
            />
        </Cell>
    </ThemeProvider>
)
