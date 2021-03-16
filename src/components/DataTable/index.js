import React, { useState, useEffect, useRef } from 'react'
import {
    useTable,
    useSortBy,
    useFilters,
    useGlobalFilter,
    useRowSelect,
    useBlockLayout,
} from 'react-table'
import { withTheme } from 'styled-components'
import { Search } from './Filters'
import { Actions, Header, Body } from './defaultWrappers'
import AutoSizer from 'react-virtualized-auto-sizer'
import { AutoSizeWrapper, TableHeaderTitleItem, Loader, MainWrapper as Main } from './Styles'

/**
 * Main DataTable Function
 */
const DataTable = ({
    data,
    loading,
    totalCount,
    columns,
    wrapper = {},
    height = 500,
    sortIconSize,
    view: initialView = 'ROW',
    enabledView = ['ROW', 'ROWCONDENSED', 'GRID'],
    showToggleButtons = true,
    showTotalRecords = true,
    showGlobalSearch = true,
    showTableHeader = true,
    selectable = false,
    disableWidth = false, // Mainly for test, 'disableWidth = true' will fix error of AutoSizer not rendering table body
    onSelect = () => {},
    recordTotalComponent = null,
    globalSearchBarComponent = null,
    isHeader = false, // solve design issue when brandHeader is available
    cellMaxWidth,
    cellMinWidth,
    cellHeight,
}) => {
    // DataTable view (default): view = 'ROW'
    // Grid view: view = 'GRID'
    // Condensed view: view = 'ROWCONDENSED'

    const [view, setView] = useState(initialView)
    const [error, setError] = useState(null)

    const {
        ActionsWrapper = Actions,
        HeaderWrapper = Header,
        BodyWrapper = Body,
        MainWrapper = Main,
        RowWrapper,
        CellWrapper,
    } = wrapper

    const filterTypes = React.useMemo(
        () => ({
            text: (rows, id, filterValue) => {
                return rows.filter((row) => {
                    const rowValue = row.values[id]

                    return rowValue !== undefined
                        ? String(rowValue)
                            .toLowerCase()
                            .startsWith(String(filterValue).toLowerCase())
                        : true
                })
            },
        }),
        []
    )

    const defaultColumn = React.useMemo(
        //we receive Search component
        () => ({
            Filter: Search,
        }),
        []
    )
    //***
    //This is header filters

    // Wrap header text inside <TableHeaderTitleItem /> for styling if 'col.Header' is a string
    columns = columns.map((col, id) => {
        if (typeof col.Header === 'string') {
            return {
                ...col,
                Header: (
                    <TableHeaderTitleItem sortIconSize={sortIconSize}>
                        {col.Header}
                    </TableHeaderTitleItem>
                ),
            }
        }

        return col
    })

    // Memoize columns & data
    columns = React.useMemo(() => columns, [])
    data = React.useMemo(() => data, [data])

    const {
        getTableProps,
        headerGroups,
        rows,
        totalColumnsWidth,
        prepareRow,
        state,
        setGlobalFilter,
        preGlobalFilteredRows,
        selectedFlatRows,
        state: { selectedRowIds },
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            filterTypes,
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        useRowSelect,
        useBlockLayout,
        (hooks) => {
            if (selectable) {
                hooks.visibleColumns.push((columns) => [
                    // Adding a column for selection
                    {
                        id: 'selection',
                        Header: ({ getToggleAllRowsSelectedProps }) => {
                            if (selectable === 'multi')
                                return (
                                    <>
                                        <input
                                            type="checkbox"
                                            {...getToggleAllRowsSelectedProps()}
                                        />
                                    </>
                                )
                            else return ''
                        },
                        disableFilters: true,
                        width: 20,
                        Cell: ({ row }) => {
                            return (
                                <>
                                    <input type="checkbox" {...row.getToggleRowSelectedProps()} />
                                </>
                            )
                        },
                    },

                    ...columns,
                ])
            }
        }
    )

    // Hook to get previous value
    function usePrevious(value) {
        const ref = useRef()
        // Store current value in ref
        useEffect(() => {
            ref.current = value
        }, [value]) // Only re-run if value changes
        // Return previous value (happens before update in useEffect below)
        return ref.current
    }

    const prevSelected = usePrevious(selectedRowIds)

    // Calling onSelect based on selectedRowIds and selectable
    useEffect(() => {
        if (selectable === 'single') {
            const current = Object.keys(selectedRowIds)
            const previous = Object.keys(prevSelected || {})

            if (current.length === 1) onSelect(selectedFlatRows.map((row) => row.original))
            // Unselect previous
            if (current.length === 2) rows[parseInt(previous[0])].toggleRowSelected()
        }

        if (selectable === 'multi') onSelect(selectedFlatRows.map((row) => row.original))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedRowIds])

    const commonProps = {
        view,
        totalColumnsWidth,
        columns,
        height,
        selectedRowIds,
        setGlobalFilter,
        getTableProps,
        setView,
        defaultColumn,
        setError,
        cellMaxWidth,
        cellMinWidth,
        cellHeight,
    }

    return (
        <MainWrapper>
            <ActionsWrapper
                headerGroups={headerGroups}
                showGlobalSearch={showGlobalSearch}
                showToggleButtons={showToggleButtons}
                showTotalRecords={showTotalRecords}
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                enabledView={enabledView}
                totalCount={totalCount}
                //searchedCount={rows.length || null}
                searchedCount={headerGroups && headerGroups[0].headers && headerGroups[0].headers.map(header => header.filterValue !== undefined).includes(true) ? rows.length : null}
                selectedCount={selectedFlatRows.length || null}
                globalSearchBarComponent={globalSearchBarComponent}
                recordTotalComponent={recordTotalComponent}
                {...commonProps}
            />

            {showTableHeader && <HeaderWrapper headerGroups={headerGroups} view={view} />}

            {loading && <Loader />}
            {!loading && (
                <AutoSizeWrapper>
                    <AutoSizer disableHeight>
                        {({ width }) => (
                            <BodyWrapper
                                headerGroups={headerGroups}
                                rows={rows}
                                width={width}
                                prepareRow={prepareRow}
                                Row={RowWrapper}
                                Cell={CellWrapper}
                                isMainWrap={!!wrapper.MainWrapper}
                                isHeader={isHeader}
                                {...commonProps}
                            />
                        )}
                    </AutoSizer>
                </AutoSizeWrapper>
            )}
            {!!error && <div>{error}</div>}
        </MainWrapper>
    )
}

export default withTheme(DataTable)
