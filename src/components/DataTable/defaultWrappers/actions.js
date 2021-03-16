import React from 'react'

import { BsGrid3X3Gap, BsJustify, BsListNested } from 'react-icons/bs'
import { GlobalFilter as DefaultGlobalFilter } from '../Filters'
import RecordTotal from '../RecordTotal'

import {
    ToggleView,
    ActionWrapper,
} from '../Styles'

const Actions = ({
    openHeader,
    headerStatus,
    showGlobalSearch,
    showToggleButtons,
    showTotalRecords,
    enabledView,
    view,
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
    setView,
    totalCount,
    selectedCount,
    recordTotalComponent,
    globalSearchBarComponent,
    searchedCount,
}) => (
        <ActionWrapper>
            {showGlobalSearch && (
                globalSearchBarComponent ? globalSearchBarComponent :
                    <DefaultGlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
            )}
            {showTotalRecords && (
                recordTotalComponent ? recordTotalComponent :
                    <RecordTotal
                        total={totalCount}
                        filtered={searchedCount}
                        selected={selectedCount || null}
                    />
            )}
            {showToggleButtons && (
                <ToggleView>
                    {enabledView.includes('GRID') && (
                        <>
                            <BsGrid3X3Gap
                                onClick={() => setView('GRID')}
                                size={19}
                                color={view == 'GRID' ? '#37475a' : '#ccc'}
                                style={{ marginRight: '0.5rem' }}
                            />{' '}
                        </>
                    )}
                    {enabledView.includes('ROW') && (
                        <>
                            <BsJustify
                                onClick={() => setView('ROW')}
                                size={21}
                                color={view == 'ROW' ? '#37475a' : '#ccc'}
                            />{' '}
                        </>
                    )}
                    {enabledView.includes('ROWCONDENSED') && (
                        <>
                            <BsListNested
                                onClick={() => setView('ROWCONDENSED')}
                                size={21}
                                color={view == 'ROWCONDENSED' ? '#37475a' : '#ccc'}
                            />{' '}
                        </>
                    )}
                </ToggleView>
            )}
        </ActionWrapper>
    )

export default Actions
