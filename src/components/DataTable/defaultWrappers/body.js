import React, { useMemo } from 'react'

import { FixedSizeList } from 'react-window'

import { ViewContainer, Row as DefaultRow, Cell as DefaultCell } from '../Styles'
import GridWrapper from '../GridWrapper'

const GRID_ROW_HEIGHT = 270
const FONT_SIZE = 20

const Body = ({
    width,
    height,
    view,
    columns,
    rows,
    totalColumnsWidth,
    prepareRow,
    selectedRowIds,
    Row: SuppliedRow,
    Cell: SuppliedCell,
    setError,
    isMainWrap,
    isHeader,
    cellMaxWidth,
    cellMinWidth,
    cellHeight
}) => {
    const Row = SuppliedRow || DefaultRow
    const Cell = SuppliedCell || DefaultCell

    const RenderCell = ({ actualRowIndex, data, columnIndex, rowIndex, style }) => {
        const reactTableProp = data.getRowProps()

        return (
            <Cell
                key={reactTableProp['key']}
                style={style}
                index={actualRowIndex}
                columnIndex={columnIndex}
                row={rowIndex}
                data={data.original}
            >
                {view == 'ROWCONDENSED' &&
                    <div className="product-row">
                        {data.cells.map(({ column, render }, i) => {
                            if (column.id === 'picture') {
                                return column.CellForGrid ? <div className="proImg">{render('CellForGrid')}</div> : render('Cell')
                            }
                        }
                        )}
                        <div className="proInfo">
                            {data.cells.map(({ column, render }, i) => {
                                if (column.id !== 'picture') {
                                    return column.CellForGrid ? render('CellForGrid') : render('Cell')
                                }
                            }
                            )}
                        </div>
                    </div>
                }
                {view !== 'ROWCONDENSED' &&
                    data.cells.map(({ column, render }, i) =>
                        column.CellForGrid ? render('CellForGrid') : render('Cell')
                    )}
            </Cell>
        )
    }

    const RenderRow = ({ index, style }) => {
        const row = rows[index]
        prepareRow(row)

        return (
            <Row
                data={row.original}
                index={index}
                key={index}
                style={style}
                isCondensed={view === 'ROWCONDENSED'}
            >
                {row.cells.map(({ render, getCellProps }) => (
                    <div {...getCellProps()}>{render('Cell')}</div>
                ))}
            </Row>
        )
    }

    console.log({ width: width })

    const rowHeight = useMemo(
        () => {
            const rowHeightMultiplier = 2
            switch (view) {
                case 'ROW':
                    let rows = 1
                    let cumulatedHeight = 0
                    let remainingRowWidth = width
                    let currentRowHeight = 0
                    for (const c of columns) {
                        currentRowHeight = Math.max(
                            currentRowHeight,
                            c.height || FONT_SIZE * rowHeightMultiplier
                        )

                        // console.log(c.width, c.height, '@debug-dimension')
                        // react-table default width is 150px
                        if (remainingRowWidth > (c.width || 150)) {
                            remainingRowWidth -= c.width || 150
                        } else {
                            rows += 1
                            cumulatedHeight += currentRowHeight
                            // currentRowHeight = 0
                            remainingRowWidth = width
                        }
                        // console.log({rows, cumulatedHeight, currentRowHeight, remainingRowWidth})
                    }

                    cumulatedHeight += currentRowHeight
                    return cumulatedHeight
                    break
                case 'ROWCONDENSED':
                    return GRID_ROW_HEIGHT
                    break
                case 'GRID':
                    return GRID_ROW_HEIGHT
                    break
                default:
                    setError(`view error, current view is ${view}`)
                    return 0
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [view, width]
    )

    return (
        <ViewContainer view={view} isMainWrap={isMainWrap} isHeader={isHeader}>
            {view == 'GRID' && (
                <GridWrapper
                    width={width}
                    height={height}
                    gridCellMinWidth={cellMinWidth || null}
                    gridCellMaxWidth={cellMaxWidth || 250}
                    rows={rows}
                    rowHeight={cellHeight || 300}
                    prepareRow={prepareRow}
                >
                    {RenderCell}
                </GridWrapper>
            )}
            {view == 'ROW' && (
                <FixedSizeList
                    height={height}
                    itemCount={rows.length}
                    itemSize={rowHeight}
                    width={width}
                >
                    {RenderRow}
                </FixedSizeList>
            )}
            {view == 'ROWCONDENSED' && (
                <GridWrapper
                    width={width}
                    height={height}
                    rows={rows}
                    rowHeight={180}
                    prepareRow={prepareRow}
                >
                    {RenderCell}
                </GridWrapper>
            )}
        </ViewContainer>
    )
}

export default Body
