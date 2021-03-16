import React from 'react'

import {
    CellForGridImgStyle,
    CellForGridNameStyle,
    CellForGridSKUStyle,
    CellForGridTextStyle,
    CellStyle,
    CellForPriceStyle,
    CellForInfoStyle
} from './Styles'
import { Slider, Range, Dropdown } from '../Filters'

const defaultPic = '../../images/products.svg'

export const sampleColumns = [
    {
        Header: 'SKUID',
        accessor: 'SKUID',
        // defaultCanFilter: true,
        Filter: Dropdown,
        CellForGrid: ({ row }) => <div>SKU: {row.original.SKUID}</div>,
        Cell: ({ row }) => <div>{row.original.SKUID}</div>,
    },
    {
        Header: 'Product Name',
        accessor: 'eName',
        // defaultCanFilter: true,
        Filter: Dropdown,
        CellForGrid: ({ row }) => <div>{row.original.eName}</div>,
        Cell: ({ row }) => <div>{row.original.eName}</div>,
    },
    {
        Header: 'Picture',
        accessor: 'smallPic',

        // defaultCanFilter: true,
        Filter: Dropdown,
        CellForGrid: ({ row }) => (
            <div>
                {' '}
                <img
                    src={`${row.original.smallPic}`}
                    alt={`${row.original.smallPic}`}
                    height="120"
                    width="120"
                />
            </div>
        ),
        Cell: ({ row }) => (
            <div>
                <img
                    src={`${row.original.smallPic}`}
                    alt={`${row.original.smallPic}`}
                    height="30"
                    width="30"
                />
            </div>
        ),
    },
    {
        Header: 'Brand',
        accessor: 'brand',
        // defaultCanFilter: true,
        Filter: Dropdown,
        CellForGrid: ({ row }) => <div>{row.original.brand}</div>,
        Cell: ({ row }) => <div>{row.original.brand}</div>,
    },
    {
        Header: 'Product Cat',
        accessor: 'prdCat',

        // defaultCanFilter: true,
        Filter: Dropdown,
        CellForGrid: ({ row }) => <div>{row.original.prdCat}</div>,
        Cell: ({ row }) => <div>{row.original.prdCat}</div>,
    },
    {
        Header: 'Product SubCat',
        accessor: 'prdSubCat',

        // defaultCanFilter: true,
        Filter: Dropdown,
        CellForGrid: ({ row }) => <div>{row.original.prdSubCat}</div>,
        Cell: ({ row }) => <div>{row.original.prdSubCat}</div>,
    },
    {
        Header: 'Category 1',
        accessor: 'cat1',
        Filter: Dropdown,
        CellForGrid: ({ row }) => <div>{row.original.cat1}</div>,
        Cell: ({ row }) => <div>{row.original.cat1}</div>,
    },
    // {
    //     Header: 'Category 1',
    //     accessor: 'cat1',
    //     defaultCanFilter: true,
    //     CellForGrid: ({row}) => <div>{row.original.cat1}</div>,
    //     Cell: ({row}) => <div>{row.original.cat1}</div>,
    // },
    {
        Header: 'Category 2',
        accessor: 'cat2',
        Filter: Dropdown,
        filter: 'between',
        CellForGrid: ({ row }) => <div>{row.original.cat2}</div>,
        Cell: ({ row }) => <div>{row.original.cat2}</div>,
    },
    {
        Header: 'Price',
        accessor: 'price',
        // defaultCanFilter: true,
        Filter: Dropdown,
        CellForGrid: ({ row }) => <div>{row.original.price}</div>,
        Cell: ({ row }) => <div>{row.original.price}</div>,
    },
]

export const sampleColumns1 = [
    {
        Header: 'SKUID',
        accessor: 'SKUID',
        defaultCanFilter: true,
        height: 60,
        CellForGrid: ({ row }) => <div>SKU: {row.original.SKUID}</div>,
        Cell: ({ row }) => <div>{row.original.SKUID}</div>,
    },
    {
        Header: 'Product Name',
        accessor: 'eName',
        defaultCanFilter: true,
        CellForGrid: ({ row }) => <div>{row.original.eName}</div>,
        Cell: ({ row }) => <div>{row.original.eName}</div>,
    },
    {
        Header: 'Picture',
        accessor: 'smallPic',

        defaultCanFilter: true,
        width: 100,
        CellForGrid: ({ row }) => (
            <div>
                {' '}
                <img
                    src={`${row.original.smallPic}`}
                    alt={`${row.original.smallPic}`}
                    height="120"
                    width="120"
                />
            </div>
        ),
        Cell: ({ row }) => (
            <div>
                <img
                    src={`${row.original.smallPic}`}
                    alt={`${row.original.smallPic}`}
                    height="30"
                    width="30"
                />
            </div>
        ),
    },
    {
        Header: 'Brand',
        accessor: 'brand',
        defaultCanFilter: true,
        CellForGrid: ({ row }) => <div>{row.original.brand}</div>,
        Cell: ({ row }) => <div>{row.original.brand}</div>,
    },
    {
        Header: 'Product Cat',
        accessor: 'prdCat',
        defaultCanFilter: true,
        width: 220,
        CellForGrid: ({ row }) => <div>{row.original.prdCat}</div>,
        Cell: ({ row }) => <div>{row.original.prdCat}</div>,
    },
    {
        Header: 'Product SubCat',
        accessor: 'prdSubCat',
        defaultCanFilter: true,
        width: 220,
        CellForGrid: ({ row }) => <div>{row.original.prdSubCat}</div>,
        Cell: ({ row }) => <div>{row.original.prdSubCat}</div>,
    },
    {
        Header: 'Category 1',
        accessor: 'cat1',
        defaultCanFilter: true,
        CellForGrid: ({ row }) => <div>{row.original.cat1}</div>,
        Cell: ({ row }) => <div>{row.original.cat1}</div>,
    },
    {
        Header: 'Category 2',
        accessor: 'cat2',
        defaultCanFilter: true,
        CellForGrid: ({ row }) => <div>{row.original.cat2}</div>,
        Cell: ({ row }) => <div>{row.original.cat2}</div>,
    },
    {
        Header: 'Price',
        accessor: 'price',
        defaultCanFilter: true,
        CellForGrid: ({ row }) => <div>{row.original.price}</div>,
        Cell: ({ row }) => <div>{row.original.price}</div>,
    },
]

export const sampleData = [
    {
        SKUID: '000',
        eName: 'Pro 00',
        smallPic: defaultPic,
        brand: 'Brand 00',
        prdCat: 'Product Cat 00',
        prdSubCat: 'Product SubCat 00',
        cat1: 'cat1a',
        cat2: 'cat2a',
        price: 10
    },
    {
        SKUID: '111',
        eName: 'Pro 01',
        smallPic: defaultPic,
        brand: 'Brand 01',
        prdCat: 'Product Cat 01',
        prdSubCat: 'Product SubCat 01',
        cat1: 'cat1b',
        cat2: 'cat2b',
        price: 21
    },
    {
        SKUID: '222',
        eName: 'Pro 02',
        smallPic: defaultPic,
        brand: 'Brand 02',
        prdCat: 'Product Cat 02',
        prdSubCat: 'Product SubCat 02',
        cat1: 'cat1c',
        cat2: 'cat2c',
        price: 29
    },
    {
        SKUID: '333',
        eName: 'Pro 03',
        smallPic: defaultPic,
        brand: 'Brand 03',
        prdCat: 'Product Cat 03',
        prdSubCat: 'Product SubCat 03',
        cat1: 'cat1d',
        cat2: 'cat2d',
        price: 40
    },
    {
        SKUID: '444',
        eName: 'Pro 04',
        smallPic: defaultPic,
        brand: 'Brand 04',
        prdCat: 'Product Cat 04',
        prdSubCat: 'Product SubCat 04',
        cat1: 'cat1e',
        cat2: 'cat2e',
        price: 50
    },
    {
        SKUID: '555',
        eName: 'Pro 05',
        smallPic: defaultPic,
        brand: 'Brand 05',
        prdCat: 'Product Cat 05',
        prdSubCat: 'Product SubCat 05',
        cat1: 'cat1f',
        cat2: 'cat2f',
        price: 55
    },
    {
        SKUID: '666',
        eName: 'Pro 06',
        smallPic: defaultPic,
        brand: 'Brand 06',
        prdCat: 'Product Cat 06',
        prdSubCat: 'Product SubCat 06',
        cat1: 'cat1g',
        cat2: 'cat2g',
        price: 73
    },
    {
        SKUID: '777',
        eName: 'Pro 07',
        smallPic: defaultPic,
        brand: 'Brand 07',
        prdCat: 'Product Cat 07',
        prdSubCat: 'Product SubCat 07',
        cat1: 'cat1h',
        cat2: 'cat2h',
        price: 79
    },
    {
        SKUID: '888',
        eName: 'Pro 08',
        smallPic: defaultPic,
        brand: 'Brand 08',
        prdCat: 'Product Cat 08',
        prdSubCat: 'Product SubCat 08',
        cat1: 'cat1i',
        cat2: 'cat2i',
        price: 92
    },
    {
        SKUID: '999',
        eName: 'Pro 09',
        smallPic: defaultPic,
        brand: 'Brand 09',
        prdCat: 'Product Cat 09',
        prdSubCat: 'Product SubCat 09',
        cat1: 'cat1j',
        cat2: 'cat2j',
        price: 99
    },
    {
        SKUID: '000',
        eName: 'Pro 00',
        smallPic: defaultPic,
        brand: 'Brand 00',
        prdCat: 'Product Cat 00',
        prdSubCat: 'Product SubCat 00',
        cat1: 'cat1a',
        cat2: 'cat2a',
        price: 10
    },
    {
        SKUID: '111',
        eName: 'Pro 01',
        smallPic: defaultPic,
        brand: 'Brand 01',
        prdCat: 'Product Cat 01',
        prdSubCat: 'Product SubCat 01',
        cat1: 'cat1b',
        cat2: 'cat2b',
        price: 21
    },
    {
        SKUID: '222',
        eName: 'Pro 02',
        smallPic: defaultPic,
        brand: 'Brand 02',
        prdCat: 'Product Cat 02',
        prdSubCat: 'Product SubCat 02',
        cat1: 'cat1c',
        cat2: 'cat2c',
        price: 29
    },
    {
        SKUID: '333',
        eName: 'Pro 03',
        smallPic: defaultPic,
        brand: 'Brand 03',
        prdCat: 'Product Cat 03',
        prdSubCat: 'Product SubCat 03',
        cat1: 'cat1d',
        cat2: 'cat2d',
        price: 40
    },
    {
        SKUID: '444',
        eName: 'Pro 04',
        smallPic: defaultPic,
        brand: 'Brand 04',
        prdCat: 'Product Cat 04',
        prdSubCat: 'Product SubCat 04',
        cat1: 'cat1e',
        cat2: 'cat2e',
        price: 50
    },
    {
        SKUID: '555',
        eName: 'Pro 05',
        smallPic: defaultPic,
        brand: 'Brand 05',
        prdCat: 'Product Cat 05',
        prdSubCat: 'Product SubCat 05',
        cat1: 'cat1f',
        cat2: 'cat2f',
        price: 55
    },
    {
        SKUID: '666',
        eName: 'Pro 06',
        smallPic: defaultPic,
        brand: 'Brand 06',
        prdCat: 'Product Cat 06',
        prdSubCat: 'Product SubCat 06',
        cat1: 'cat1g',
        cat2: 'cat2g',
        price: 73
    },
    {
        SKUID: '777',
        eName: 'Pro 07',
        smallPic: defaultPic,
        brand: 'Brand 07',
        prdCat: 'Product Cat 07',
        prdSubCat: 'Product SubCat 07',
        cat1: 'cat1h',
        cat2: 'cat2h',
        price: 79
    },
    {
        SKUID: '888',
        eName: 'Pro 08',
        smallPic: defaultPic,
        brand: 'Brand 08',
        prdCat: 'Product Cat 08',
        prdSubCat: 'Product SubCat 08',
        cat1: 'cat1i',
        cat2: 'cat2i',
        price: 92
    },
    {
        SKUID: '999',
        eName: 'Pro 09',
        smallPic: defaultPic,
        brand: 'Brand 09',
        prdCat: 'Product Cat 09',
        prdSubCat: 'Product SubCat 09',
        cat1: 'cat1j',
        cat2: 'cat2j',
        price: 99
    },
    {
        SKUID: '000',
        eName: 'Pro 00',
        smallPic: defaultPic,
        brand: 'Brand 00',
        prdCat: 'Product Cat 00',
        prdSubCat: 'Product SubCat 00',
        cat1: 'cat1a',
        cat2: 'cat2a',
        price: 10
    },
    {
        SKUID: '111',
        eName: 'Pro 01',
        smallPic: defaultPic,
        brand: 'Brand 01',
        prdCat: 'Product Cat 01',
        prdSubCat: 'Product SubCat 01',
        cat1: 'cat1b',
        cat2: 'cat2b',
        price: 21
    },
    {
        SKUID: '222',
        eName: 'Pro 02',
        smallPic: defaultPic,
        brand: 'Brand 02',
        prdCat: 'Product Cat 02',
        prdSubCat: 'Product SubCat 02',
        cat1: 'cat1c',
        cat2: 'cat2c',
        price: 29
    },
    {
        SKUID: '333',
        eName: 'Pro 03',
        smallPic: defaultPic,
        brand: 'Brand 03',
        prdCat: 'Product Cat 03',
        prdSubCat: 'Product SubCat 03',
        cat1: 'cat1d',
        cat2: 'cat2d',
        price: 40
    },
    {
        SKUID: '444',
        eName: 'Pro 04',
        smallPic: defaultPic,
        brand: 'Brand 04',
        prdCat: 'Product Cat 04',
        prdSubCat: 'Product SubCat 04',
        cat1: 'cat1e',
        cat2: 'cat2e',
        price: 50
    },
    {
        SKUID: '555',
        eName: 'Pro 05',
        smallPic: defaultPic,
        brand: 'Brand 05',
        prdCat: 'Product Cat 05',
        prdSubCat: 'Product SubCat 05',
        cat1: 'cat1f',
        cat2: 'cat2f',
        price: 55
    },
    {
        SKUID: '666',
        eName: 'Pro 06',
        smallPic: defaultPic,
        brand: 'Brand 06',
        prdCat: 'Product Cat 06',
        prdSubCat: 'Product SubCat 06',
        cat1: 'cat1g',
        cat2: 'cat2g',
        price: 73
    },
    {
        SKUID: '777',
        eName: 'Pro 07',
        smallPic: defaultPic,
        brand: 'Brand 07',
        prdCat: 'Product Cat 07',
        prdSubCat: 'Product SubCat 07',
        cat1: 'cat1h',
        cat2: 'cat2h',
        price: 79
    },
    {
        SKUID: '888',
        eName: 'Pro 08',
        smallPic: defaultPic,
        brand: 'Brand 08',
        prdCat: 'Product Cat 08',
        prdSubCat: 'Product SubCat 08',
        cat1: 'cat1i',
        cat2: 'cat2i',
        price: 92
    },
    {
        SKUID: '999',
        eName: 'Pro 09',
        smallPic: defaultPic,
        brand: 'Brand 09',
        prdCat: 'Product Cat 09',
        prdSubCat: 'Product SubCat 09',
        cat1: 'cat1j',
        cat2: 'cat2j',
        price: 99
    },
    {
        SKUID: '000',
        eName: 'Pro 00',
        smallPic: defaultPic,
        brand: 'Brand 00',
        prdCat: 'Product Cat 00',
        prdSubCat: 'Product SubCat 00',
        cat1: 'cat1a',
        cat2: 'cat2a',
        price: 10
    },
    {
        SKUID: '111',
        eName: 'Pro 01',
        smallPic: defaultPic,
        brand: 'Brand 01',
        prdCat: 'Product Cat 01',
        prdSubCat: 'Product SubCat 01',
        cat1: 'cat1b',
        cat2: 'cat2b',
        price: 21
    },
    {
        SKUID: '222',
        eName: 'Pro 02',
        smallPic: defaultPic,
        brand: 'Brand 02',
        prdCat: 'Product Cat 02',
        prdSubCat: 'Product SubCat 02',
        cat1: 'cat1c',
        cat2: 'cat2c',
        price: 29
    },
    {
        SKUID: '333',
        eName: 'Pro 03',
        smallPic: defaultPic,
        brand: 'Brand 03',
        prdCat: 'Product Cat 03',
        prdSubCat: 'Product SubCat 03',
        cat1: 'cat1d',
        cat2: 'cat2d',
        price: 40
    },
    {
        SKUID: '444',
        eName: 'Pro 04',
        smallPic: defaultPic,
        brand: 'Brand 04',
        prdCat: 'Product Cat 04',
        prdSubCat: 'Product SubCat 04',
        cat1: 'cat1e',
        cat2: 'cat2e',
        price: 50
    },
    {
        SKUID: '555',
        eName: 'Pro 05',
        smallPic: defaultPic,
        brand: 'Brand 05',
        prdCat: 'Product Cat 05',
        prdSubCat: 'Product SubCat 05',
        cat1: 'cat1f',
        cat2: 'cat2f',
        price: 55
    },
    {
        SKUID: '666',
        eName: 'Pro 06',
        smallPic: defaultPic,
        brand: 'Brand 06',
        prdCat: 'Product Cat 06',
        prdSubCat: 'Product SubCat 06',
        cat1: 'cat1g',
        cat2: 'cat2g',
        price: 73
    },
    {
        SKUID: '777',
        eName: 'Pro 07',
        smallPic: defaultPic,
        brand: 'Brand 07',
        prdCat: 'Product Cat 07',
        prdSubCat: 'Product SubCat 07',
        cat1: 'cat1h',
        cat2: 'cat2h',
        price: 79
    },
    {
        SKUID: '888',
        eName: 'Pro 08',
        smallPic: defaultPic,
        brand: 'Brand 08',
        prdCat: 'Product Cat 08',
        prdSubCat: 'Product SubCat 08',
        cat1: 'cat1i',
        cat2: 'cat2i',
        price: 92
    },
    {
        SKUID: '999',
        eName: 'Pro 09',
        smallPic: defaultPic,
        brand: 'Brand 09',
        prdCat: 'Product Cat 09',
        prdSubCat: 'Product SubCat 09',
        cat1: 'cat1j',
        cat2: 'cat2j',
        price: 99
    },
    {
        SKUID: '000',
        eName: 'Pro 00',
        smallPic: defaultPic,
        brand: 'Brand 00',
        prdCat: 'Product Cat 00',
        prdSubCat: 'Product SubCat 00',
        cat1: 'cat1a',
        cat2: 'cat2a',
        price: 10
    },
    {
        SKUID: '111',
        eName: 'Pro 01',
        smallPic: defaultPic,
        brand: 'Brand 01',
        prdCat: 'Product Cat 01',
        prdSubCat: 'Product SubCat 01',
        cat1: 'cat1b',
        cat2: 'cat2b',
        price: 21
    },
    {
        SKUID: '222',
        eName: 'Pro 02',
        smallPic: defaultPic,
        brand: 'Brand 02',
        prdCat: 'Product Cat 02',
        prdSubCat: 'Product SubCat 02',
        cat1: 'cat1c',
        cat2: 'cat2c',
        price: 29
    },
    {
        SKUID: '333',
        eName: 'Pro 03',
        smallPic: defaultPic,
        brand: 'Brand 03',
        prdCat: 'Product Cat 03',
        prdSubCat: 'Product SubCat 03',
        cat1: 'cat1d',
        cat2: 'cat2d',
        price: 40
    },
    {
        SKUID: '444',
        eName: 'Pro 04',
        smallPic: defaultPic,
        brand: 'Brand 04',
        prdCat: 'Product Cat 04',
        prdSubCat: 'Product SubCat 04',
        cat1: 'cat1e',
        cat2: 'cat2e',
        price: 50
    },
    {
        SKUID: '555',
        eName: 'Pro 05',
        smallPic: defaultPic,
        brand: 'Brand 05',
        prdCat: 'Product Cat 05',
        prdSubCat: 'Product SubCat 05',
        cat1: 'cat1f',
        cat2: 'cat2f',
        price: 55
    },
    {
        SKUID: '666',
        eName: 'Pro 06',
        smallPic: defaultPic,
        brand: 'Brand 06',
        prdCat: 'Product Cat 06',
        prdSubCat: 'Product SubCat 06',
        cat1: 'cat1g',
        cat2: 'cat2g',
        price: 73
    },
    {
        SKUID: '777',
        eName: 'Pro 07',
        smallPic: defaultPic,
        brand: 'Brand 07',
        prdCat: 'Product Cat 07',
        prdSubCat: 'Product SubCat 07',
        cat1: 'cat1h',
        cat2: 'cat2h',
        price: 79
    },
    {
        SKUID: '888',
        eName: 'Pro 08',
        smallPic: defaultPic,
        brand: 'Brand 08',
        prdCat: 'Product Cat 08',
        prdSubCat: 'Product SubCat 08',
        cat1: 'cat1i',
        cat2: 'cat2i',
        price: 92
    },
    {
        SKUID: '999',
        eName: 'Pro 09',
        smallPic: defaultPic,
        brand: 'Brand 09',
        prdCat: 'Product Cat 09',
        prdSubCat: 'Product SubCat 09',
        cat1: 'cat1j',
        cat2: 'cat2j',
        price: 99
    },
    {
        SKUID: '000',
        eName: 'Pro 00',
        smallPic: defaultPic,
        brand: 'Brand 00',
        prdCat: 'Product Cat 00',
        prdSubCat: 'Product SubCat 00',
        cat1: 'cat1a',
        cat2: 'cat2a',
        price: 10
    },
    {
        SKUID: '111',
        eName: 'Pro 01',
        smallPic: defaultPic,
        brand: 'Brand 01',
        prdCat: 'Product Cat 01',
        prdSubCat: 'Product SubCat 01',
        cat1: 'cat1b',
        cat2: 'cat2b',
        price: 21
    },
    {
        SKUID: '222',
        eName: 'Pro 02',
        smallPic: defaultPic,
        brand: 'Brand 02',
        prdCat: 'Product Cat 02',
        prdSubCat: 'Product SubCat 02',
        cat1: 'cat1c',
        cat2: 'cat2c',
        price: 29
    },
    {
        SKUID: '333',
        eName: 'Pro 03',
        smallPic: defaultPic,
        brand: 'Brand 03',
        prdCat: 'Product Cat 03',
        prdSubCat: 'Product SubCat 03',
        cat1: 'cat1d',
        cat2: 'cat2d',
        price: 40
    },
    {
        SKUID: '444',
        eName: 'Pro 04',
        smallPic: defaultPic,
        brand: 'Brand 04',
        prdCat: 'Product Cat 04',
        prdSubCat: 'Product SubCat 04',
        cat1: 'cat1e',
        cat2: 'cat2e',
        price: 50
    },
    {
        SKUID: '555',
        eName: 'Pro 05',
        smallPic: defaultPic,
        brand: 'Brand 05',
        prdCat: 'Product Cat 05',
        prdSubCat: 'Product SubCat 05',
        cat1: 'cat1f',
        cat2: 'cat2f',
        price: 55
    },
    {
        SKUID: '666',
        eName: 'Pro 06',
        smallPic: defaultPic,
        brand: 'Brand 06',
        prdCat: 'Product Cat 06',
        prdSubCat: 'Product SubCat 06',
        cat1: 'cat1g',
        cat2: 'cat2g',
        price: 73
    },
    {
        SKUID: '777',
        eName: 'Pro 07',
        smallPic: defaultPic,
        brand: 'Brand 07',
        prdCat: 'Product Cat 07',
        prdSubCat: 'Product SubCat 07',
        cat1: 'cat1h',
        cat2: 'cat2h',
        price: 79
    },
    {
        SKUID: '888',
        eName: 'Pro 08',
        smallPic: defaultPic,
        brand: 'Brand 08',
        prdCat: 'Product Cat 08',
        prdSubCat: 'Product SubCat 08',
        cat1: 'cat1i',
        cat2: 'cat2i',
        price: 92
    },
    {
        SKUID: '999',
        eName: 'Pro 09',
        smallPic: defaultPic,
        brand: 'Brand 09',
        prdCat: 'Product Cat 09',
        prdSubCat: 'Product SubCat 09',
        cat1: 'cat1j',
        cat2: 'cat2j',
        price: 99
    },
    {
        SKUID: '000',
        eName: 'Pro 00',
        smallPic: defaultPic,
        brand: 'Brand 00',
        prdCat: 'Product Cat 00',
        prdSubCat: 'Product SubCat 00',
        cat1: 'cat1a',
        cat2: 'cat2a',
        price: 10
    },
    {
        SKUID: '111',
        eName: 'Pro 01',
        smallPic: defaultPic,
        brand: 'Brand 01',
        prdCat: 'Product Cat 01',
        prdSubCat: 'Product SubCat 01',
        cat1: 'cat1b',
        cat2: 'cat2b',
        price: 21
    },
    {
        SKUID: '222',
        eName: 'Pro 02',
        smallPic: defaultPic,
        brand: 'Brand 02',
        prdCat: 'Product Cat 02',
        prdSubCat: 'Product SubCat 02',
        cat1: 'cat1c',
        cat2: 'cat2c',
        price: 29
    },
    {
        SKUID: '333',
        eName: 'Pro 03',
        smallPic: defaultPic,
        brand: 'Brand 03',
        prdCat: 'Product Cat 03',
        prdSubCat: 'Product SubCat 03',
        cat1: 'cat1d',
        cat2: 'cat2d',
        price: 40
    },
    {
        SKUID: '444',
        eName: 'Pro 04',
        smallPic: defaultPic,
        brand: 'Brand 04',
        prdCat: 'Product Cat 04',
        prdSubCat: 'Product SubCat 04',
        cat1: 'cat1e',
        cat2: 'cat2e',
        price: 50
    },
    {
        SKUID: '555',
        eName: 'Pro 05',
        smallPic: defaultPic,
        brand: 'Brand 05',
        prdCat: 'Product Cat 05',
        prdSubCat: 'Product SubCat 05',
        cat1: 'cat1f',
        cat2: 'cat2f',
        price: 55
    },
    {
        SKUID: '666',
        eName: 'Pro 06',
        smallPic: defaultPic,
        brand: 'Brand 06',
        prdCat: 'Product Cat 06',
        prdSubCat: 'Product SubCat 06',
        cat1: 'cat1g',
        cat2: 'cat2g',
        price: 73
    },
    {
        SKUID: '777',
        eName: 'Pro 07',
        smallPic: defaultPic,
        brand: 'Brand 07',
        prdCat: 'Product Cat 07',
        prdSubCat: 'Product SubCat 07',
        cat1: 'cat1h',
        cat2: 'cat2h',
        price: 79
    },
    {
        SKUID: '888',
        eName: 'Pro 08',
        smallPic: defaultPic,
        brand: 'Brand 08',
        prdCat: 'Product Cat 08',
        prdSubCat: 'Product SubCat 08',
        cat1: 'cat1i',
        cat2: 'cat2i',
        price: 92
    },
    {
        SKUID: '999',
        eName: 'Pro 09',
        smallPic: defaultPic,
        brand: 'Brand 09',
        prdCat: 'Product Cat 09',
        prdSubCat: 'Product SubCat 09',
        cat1: 'cat1j',
        cat2: 'cat2j',
        price: 99
    },
    {
        SKUID: '000',
        eName: 'Pro 00',
        smallPic: defaultPic,
        brand: 'Brand 00',
        prdCat: 'Product Cat 00',
        prdSubCat: 'Product SubCat 00',
        cat1: 'cat1a',
        cat2: 'cat2a',
        price: 10
    },
    {
        SKUID: '111',
        eName: 'Pro 01',
        smallPic: defaultPic,
        brand: 'Brand 01',
        prdCat: 'Product Cat 01',
        prdSubCat: 'Product SubCat 01',
        cat1: 'cat1b',
        cat2: 'cat2b',
        price: 21
    },
    {
        SKUID: '222',
        eName: 'Pro 02',
        smallPic: defaultPic,
        brand: 'Brand 02',
        prdCat: 'Product Cat 02',
        prdSubCat: 'Product SubCat 02',
        cat1: 'cat1c',
        cat2: 'cat2c',
        price: 29
    },
    {
        SKUID: '333',
        eName: 'Pro 03',
        smallPic: defaultPic,
        brand: 'Brand 03',
        prdCat: 'Product Cat 03',
        prdSubCat: 'Product SubCat 03',
        cat1: 'cat1d',
        cat2: 'cat2d',
        price: 40
    },
    {
        SKUID: '444',
        eName: 'Pro 04',
        smallPic: defaultPic,
        brand: 'Brand 04',
        prdCat: 'Product Cat 04',
        prdSubCat: 'Product SubCat 04',
        cat1: 'cat1e',
        cat2: 'cat2e',
        price: 50
    },
    {
        SKUID: '555',
        eName: 'Pro 05',
        smallPic: defaultPic,
        brand: 'Brand 05',
        prdCat: 'Product Cat 05',
        prdSubCat: 'Product SubCat 05',
        cat1: 'cat1f',
        cat2: 'cat2f',
        price: 55
    },
    {
        SKUID: '666',
        eName: 'Pro 06',
        smallPic: defaultPic,
        brand: 'Brand 06',
        prdCat: 'Product Cat 06',
        prdSubCat: 'Product SubCat 06',
        cat1: 'cat1g',
        cat2: 'cat2g',
        price: 73
    },
    {
        SKUID: '777',
        eName: 'Pro 07',
        smallPic: defaultPic,
        brand: 'Brand 07',
        prdCat: 'Product Cat 07',
        prdSubCat: 'Product SubCat 07',
        cat1: 'cat1h',
        cat2: 'cat2h',
        price: 79
    },
    {
        SKUID: '888',
        eName: 'Pro 08',
        smallPic: defaultPic,
        brand: 'Brand 08',
        prdCat: 'Product Cat 08',
        prdSubCat: 'Product SubCat 08',
        cat1: 'cat1i',
        cat2: 'cat2i',
        price: 92
    },
    {
        SKUID: '999',
        eName: 'Pro 09',
        smallPic: defaultPic,
        brand: 'Brand 09',
        prdCat: 'Product Cat 09',
        prdSubCat: 'Product SubCat 09',
        cat1: 'cat1j',
        cat2: 'cat2j',
        price: 99
    },
    {
        SKUID: '000',
        eName: 'Pro 00',
        smallPic: defaultPic,
        brand: 'Brand 00',
        prdCat: 'Product Cat 00',
        prdSubCat: 'Product SubCat 00',
        cat1: 'cat1a',
        cat2: 'cat2a',
        price: 10
    },
    {
        SKUID: '111',
        eName: 'Pro 01',
        smallPic: defaultPic,
        brand: 'Brand 01',
        prdCat: 'Product Cat 01',
        prdSubCat: 'Product SubCat 01',
        cat1: 'cat1b',
        cat2: 'cat2b',
        price: 21
    },
    {
        SKUID: '222',
        eName: 'Pro 02',
        smallPic: defaultPic,
        brand: 'Brand 02',
        prdCat: 'Product Cat 02',
        prdSubCat: 'Product SubCat 02',
        cat1: 'cat1c',
        cat2: 'cat2c',
        price: 29
    },
    {
        SKUID: '333',
        eName: 'Pro 03',
        smallPic: defaultPic,
        brand: 'Brand 03',
        prdCat: 'Product Cat 03',
        prdSubCat: 'Product SubCat 03',
        cat1: 'cat1d',
        cat2: 'cat2d',
        price: 40
    },
    {
        SKUID: '444',
        eName: 'Pro 04',
        smallPic: defaultPic,
        brand: 'Brand 04',
        prdCat: 'Product Cat 04',
        prdSubCat: 'Product SubCat 04',
        cat1: 'cat1e',
        cat2: 'cat2e',
        price: 50
    },
    {
        SKUID: '555',
        eName: 'Pro 05',
        smallPic: defaultPic,
        brand: 'Brand 05',
        prdCat: 'Product Cat 05',
        prdSubCat: 'Product SubCat 05',
        cat1: 'cat1f',
        cat2: 'cat2f',
        price: 55
    },
    {
        SKUID: '666',
        eName: 'Pro 06',
        smallPic: defaultPic,
        brand: 'Brand 06',
        prdCat: 'Product Cat 06',
        prdSubCat: 'Product SubCat 06',
        cat1: 'cat1g',
        cat2: 'cat2g',
        price: 73
    },
    {
        SKUID: '777',
        eName: 'Pro 07',
        smallPic: defaultPic,
        brand: 'Brand 07',
        prdCat: 'Product Cat 07',
        prdSubCat: 'Product SubCat 07',
        cat1: 'cat1h',
        cat2: 'cat2h',
        price: 79
    },
    {
        SKUID: '888',
        eName: 'Pro 08',
        smallPic: defaultPic,
        brand: 'Brand 08',
        prdCat: 'Product Cat 08',
        prdSubCat: 'Product SubCat 08',
        cat1: 'cat1i',
        cat2: 'cat2i',
        price: 92
    },
    {
        SKUID: '999',
        eName: 'Pro 09',
        smallPic: defaultPic,
        brand: 'Brand 09',
        prdCat: 'Product Cat 09',
        prdSubCat: 'Product SubCat 09',
        cat1: 'cat1j',
        cat2: 'cat2j',
        price: 99
    },
    {
        SKUID: '000',
        eName: 'Pro 00',
        smallPic: defaultPic,
        brand: 'Brand 00',
        prdCat: 'Product Cat 00',
        prdSubCat: 'Product SubCat 00',
        cat1: 'cat1a',
        cat2: 'cat2a',
        price: 10
    },
    {
        SKUID: '111',
        eName: 'Pro 01',
        smallPic: defaultPic,
        brand: 'Brand 01',
        prdCat: 'Product Cat 01',
        prdSubCat: 'Product SubCat 01',
        cat1: 'cat1b',
        cat2: 'cat2b',
        price: 21
    },
    {
        SKUID: '222',
        eName: 'Pro 02',
        smallPic: defaultPic,
        brand: 'Brand 02',
        prdCat: 'Product Cat 02',
        prdSubCat: 'Product SubCat 02',
        cat1: 'cat1c',
        cat2: 'cat2c',
        price: 29
    },
    {
        SKUID: '333',
        eName: 'Pro 03',
        smallPic: defaultPic,
        brand: 'Brand 03',
        prdCat: 'Product Cat 03',
        prdSubCat: 'Product SubCat 03',
        cat1: 'cat1d',
        cat2: 'cat2d',
        price: 40
    },
    {
        SKUID: '444',
        eName: 'Pro 04',
        smallPic: defaultPic,
        brand: 'Brand 04',
        prdCat: 'Product Cat 04',
        prdSubCat: 'Product SubCat 04',
        cat1: 'cat1e',
        cat2: 'cat2e',
        price: 50
    },
    {
        SKUID: '555',
        eName: 'Pro 05',
        smallPic: defaultPic,
        brand: 'Brand 05',
        prdCat: 'Product Cat 05',
        prdSubCat: 'Product SubCat 05',
        cat1: 'cat1f',
        cat2: 'cat2f',
        price: 55
    },
    {
        SKUID: '666',
        eName: 'Pro 06',
        smallPic: defaultPic,
        brand: 'Brand 06',
        prdCat: 'Product Cat 06',
        prdSubCat: 'Product SubCat 06',
        cat1: 'cat1g',
        cat2: 'cat2g',
        price: 73
    },
    {
        SKUID: '777',
        eName: 'Pro 07',
        smallPic: defaultPic,
        brand: 'Brand 07',
        prdCat: 'Product Cat 07',
        prdSubCat: 'Product SubCat 07',
        cat1: 'cat1h',
        cat2: 'cat2h',
        price: 79
    },
    {
        SKUID: '888',
        eName: 'Pro 08',
        smallPic: defaultPic,
        brand: 'Brand 08',
        prdCat: 'Product Cat 08',
        prdSubCat: 'Product SubCat 08',
        cat1: 'cat1i',
        cat2: 'cat2i',
        price: 92
    },
    {
        SKUID: '999',
        eName: 'Pro 09',
        smallPic: defaultPic,
        brand: 'Brand 09',
        prdCat: 'Product Cat 09',
        prdSubCat: 'Product SubCat 09',
        cat1: 'cat1j',
        cat2: 'cat2j',
        price: 99
    },
]

const sampleSliderColumns1 = [...sampleColumns]
sampleSliderColumns1.splice(-1, 1)
sampleSliderColumns1.push(
    {
        Header: 'Price',
        accessor: 'price',
        Filter: Slider,
        CellForGrid: ({ row }) => <div>{row.original.price}</div>,
        Cell: ({ row }) => <div>{row.original.price}</div>,
    })

export const sampleSliderColumns = sampleSliderColumns1

const sampleNumberRangeColumns1 = [...sampleColumns]
sampleNumberRangeColumns1.splice(-1, 1)
sampleNumberRangeColumns1.push(
    {
        Header: 'Price',
        accessor: 'price',
        Filter: Range,
        filter: 'between',
        CellForGrid: ({ row }) => <div>{row.original.price}</div>,
        Cell: ({ row }) => <div>{row.original.price}</div>,
    })

export const sampleNumberRangeColumns = sampleNumberRangeColumns1

export const condensedColumns = [{
    Header: 'SKUID',
    id: 'skuid',
    accessor: 'SKUID',
    defaultCanFilter: true,
    CellForGrid: ({ row }) => (
        <CellForGridSKUStyle>
            SKU: {row.original.SKUID}
        </CellForGridSKUStyle>
    ),
    Cell: ({ row }) => <CellStyle>{row.original.SKUID}</CellStyle>,
},
{
    Header: 'Product Name',
    id: 'product-name',
    accessor: 'eName',

    defaultCanFilter: true,
    CellForGrid: ({ row }) => (
        <CellForGridNameStyle>
            {row.original.eName}
        </CellForGridNameStyle>
    ),
    Cell: ({ row }) => <CellStyle>{row.original.eName}</CellStyle>,
},
{
    Header: 'Picture',
    id: 'picture',
    Cell: ({ row }) => (
        <div className="image">
            <img
                src={`${row.original.smallPic}`}
                alt={`${row.original.smallPic}`}
                height="30"
                width="30"
            />
        </div>
    ),
    CellForGrid: ({ row }) => (
        <CellForGridImgStyle>
            <img
                src={`${row.original.smallPic}`}
                alt={`${row.original.smallPic}`}
            />
        </CellForGridImgStyle>
    )
},
{
    Header: 'Brand',
    id: 'brand',
    accessor: 'brand',
    defaultCanFilter: true,
    CellForGrid: ({ row }) => (
        <CellForGridTextStyle>
            {row.original.brand}
        </CellForGridTextStyle>
    ),
    Cell: ({ row }) => <CellStyle>{row.original.brand}</CellStyle>,
},
{
    Header: 'Product Cat',
    id: 'product-cat',
    accessor: 'prdCat',
    defaultCanFilter: true,
    CellForGrid: ({ row }) => (
        <CellForGridTextStyle>
            {row.original.prdCat}
        </CellForGridTextStyle>
    ),
    Cell: ({ row }) => (
        <CellStyle>{row.original.prdCat}</CellStyle>
    )
},
{
    Header: 'Product SubCat',
    id: 'product-sub-cat',
    accessor: 'prdSubCat',
    defaultCanFilter: true,
    CellForGrid: ({ row }) => (
        <CellForInfoStyle>
            {row.original.prdSubCat}
        </CellForInfoStyle>
    ),
    Cell: ({ row }) => <CellStyle>{row.original.prdSubCat}</CellStyle>
},
{
    Header: 'Category 1',
    id: 'category-1',
    accessor: 'cat1',
    defaultCanFilter: true,
    CellForGrid: ({ row }) => (
        <CellForInfoStyle>{row.original.cat1}</CellForInfoStyle>
    ),
    Cell: ({ row }) => <CellStyle>{row.original.cat1}</CellStyle>,
},
{
    Header: 'Category 2',
    id: 'category-2',
    accessor: 'cat2',
    defaultCanFilter: true,
    CellForGrid: ({ row }) => (
        <CellForInfoStyle>{row.original.cat2}</CellForInfoStyle>
    ),
    Cell: ({ row }) => <CellStyle>{row.original.cat2}</CellStyle>
},
{
    Header: 'Price',
    id: 'Price',
    accessor: 'Price',
    defaultCanFilter: false,
    CellForGrid: ({ row }) => (
        <CellForPriceStyle>${row.original.price}</CellForPriceStyle>
    ),
    Cell: ({ row }) => (
        <CellForPriceStyle>${row.original.price}</CellForPriceStyle>
    )
}]

export const props = {
    loading: false,
    totalCount: 100,
    columns: sampleColumns,
    data: sampleData,
    showToggleButtons: true,
    showTotalRecords: true,
    showGlobalSearch: true,
    showTableHeader: true,
    headerStyle: { fontSize: '10px' },
    headerClass: "custom-header-item-class",
    sortIconSize: "14"
}
