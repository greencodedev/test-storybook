import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../const/theme'
import DataTable from '../index'
import GlobalStyles from '../../../const/globalStyles'
import { sampleColumns1, props } from './sample'

import { Cell as DataTableGrid, Row as DataTableRow } from '../Styles'

export default { title: 'Data Table', component: DataTable }

export const DefaultTableView = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DataTable {...props} />
    </ThemeProvider>
)

export const WithSingleSelectable = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DataTable
            {...props}
            selectable={'single'}
            onSelect={(value) => console.log(value, '@selected-item')}
        />
    </ThemeProvider>
)

export const WithMultiSelectable = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DataTable
            {...props}
            selectable={'multi'}
            onSelect={(values) => console.log(values, '@selected-items')}
        />
    </ThemeProvider>
)

export const WithCellHeightWidthVariations = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DataTable {...props} columns={sampleColumns1} />
    </ThemeProvider>
)

export const DefaultGridView = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DataTable {...props} view="GRID" />
    </ThemeProvider>
)

export const DefaultTableViewNoToggle = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DataTable
            {...props}
            showToggleButtons={false}
            view="GRID"
        />
    </ThemeProvider>
)

export const CustomGrid = () => {
    const Grid = ({ children, ...props }) => (
        <DataTableGrid onClick={() => alert(`haha ${props.index}`)} {...props}>
            {children}
        </DataTableGrid>
    )
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <DataTable
                {...props}
                showToggleButtons={false}
                view="GRID"
                wrapper={{ GridWrapper: Grid }}
                cellHeight={250}
                cellMaxWidth={300}
                cellMinWidth={100}
            />
        </ThemeProvider>
    )
}

export const CustomRow = () => {
    const Row = ({ children, ...props }) => {
        console.log(props)
        return (
            <DataTableRow onClick={() => alert(`haha ${props.index}`)} {...props}>
                {children}
            </DataTableRow>
        )
    }
    const Cell = ({ children, ...props }) => {
        console.log(props)
        return (
            <DataTableGrid onClick={() => alert(`hehe ${props.index}`)} {...props}>
                {children}
            </DataTableGrid>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <DataTable
                {...props}
                view="ROWCONDENSED"
                wrapper={{ RowWrapper: Row, CellWrapper: Cell }}
            />
        </ThemeProvider>
    )
}

export const WithRecordTotalComponent = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DataTable
            {...props}
            recordTotalComponent={<div>random total</div>}
        />
    </ThemeProvider>
)

export const WithglobalSearchBarComponent = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DataTable
            {...props}
            globalSearchBarComponent={<div>random global total</div>}
        />
    </ThemeProvider>
)
