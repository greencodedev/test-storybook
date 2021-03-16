import React, {useCallback} from 'react'
import {MdExpandMore, MdExpandLess} from 'react-icons/md'

import {
    HeaderWrapper,
    TableHeaderRow,
    TableHeaderTitle,
    TableHeaderSearchBox,
    TitlesWrapper,
} from '../Styles'

const Header = ({headerGroups, view}) => {
    const renderArrow = useCallback((direction) => {
        if (direction === 'down') return <MdExpandMore data-testid="arrow-down" size={18} />
        if (direction === 'up') return <MdExpandLess data-testid="arrow-up" size={18} />
        return <MdExpandLess size={18} color={'transparent'} />
    }, [])

    return (
        <HeaderWrapper>
            {headerGroups.map((headerGroup, i) => (
                <TableHeaderRow key={i}>
                    {headerGroup.headers.map((column, i) => (
                        <TitlesWrapper key={i} {...column.getHeaderProps()}>
                            <TableHeaderTitle {...column.getSortByToggleProps()} key={i}>
                                {column.render('Header')}
                                {column.isSorted
                                    ? column.isSortedDesc
                                        ? renderArrow('down')
                                        : renderArrow('up')
                                    : renderArrow()}
                            </TableHeaderTitle>
                            {!column.disableFilters && (
                                <TableHeaderSearchBox key={i + 'i'}>
                                    {column.canFilter ? column.render('Filter') : null}
                                </TableHeaderSearchBox>
                            )}
                        </TitlesWrapper>
                    ))}
                </TableHeaderRow>
            ))}
        </HeaderWrapper>
    )
}

export default Header
