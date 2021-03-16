import React from 'react'

import {ColumnSearchBox, GlobalSearchBox} from './Styles'
import {MdSearch} from 'react-icons/md'

// Define a default UI for filtering

//const func=()=>
function Search({column: {filterValue, setFilter}}) {
    return (
        <ColumnSearchBox>
            <input
                value={filterValue || ''}
                onChange={(e) => {
                    setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
                }}
                placeholder={`Search...`}
            />
        </ColumnSearchBox>
    )
}

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
function Slider({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    // Calculate the min and max
    // using the preFilteredRows
  
    const [min, max] = React.useMemo(() => {
      let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
      let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
      preFilteredRows.forEach(row => {
        min = Math.min(row.values[id], min)
        max = Math.max(row.values[id], max)
      })
      return [min, max]
    }, [id, preFilteredRows])
  
    return (
      <>
        <input
          type="range"
          style={{
              width: '100%',
          }}
          min={min}
          max={max}
          value={filterValue || min}
          onChange={e => {
            setFilter(parseInt(e.target.value, 10))
          }}
        />
        <p>{filterValue}</p>
        <button style={{padding: '0.2rem'}} onClick={() => setFilter(undefined)}>Off</button>
      </>
    )
  }
  
  // This is a custom UI for our 'between' or number range
  // filter. It uses two number boxes and filters rows to
  // ones that have values between the two
  function Range({
    column: { filterValue = [], preFilteredRows, setFilter, id },
  }) {
    const [min, max] = React.useMemo(() => {
      let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
      let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
      preFilteredRows.forEach(row => {
        min = Math.min(row.values[id], min)
        max = Math.max(row.values[id], max)
      })
      return [min, max]
    }, [id, preFilteredRows])
  
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <input
          value={filterValue[0] || ''}
          type="number"
          onChange={e => {
            const val = e.target.value
            setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
          }}
          placeholder={`Min (${min})`}
          style={{
            width: '40%',
            marginRight: '0.5rem',
          }}
        />
        to
        <input
          value={filterValue[1] || ''}
          type="number"
          onChange={e => {
            const val = e.target.value
            setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
          }}
          placeholder={`Max (${max})`}
          style={{
            width: '40%',
            marginLeft: '0.5rem',
          }}
        />
      </div>
    )
}

// This is a custom filter UI for selecting
// a unique option from a list
function Dropdown({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
      const options = new Set()
      preFilteredRows.forEach(row => {
        options.add(row.values[id])
      })
      return [...options.values()]
    }, [id, preFilteredRows])
  
    // Render a multi-select box
    return (
      <select
        style={{width: '100%'}}
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  }


// Define a default UI for filtering
const GlobalFilter = ({preGlobalFilteredRows, globalFilter, setGlobalFilter}) => {
    return (
        <GlobalSearchBox>
            <input value={globalFilter || ''} onChange={(e) => setGlobalFilter(e.target.value)} />
            <MdSearch size={36} color={'#232F3E'} />
        </GlobalSearchBox>
    )
}

export {Search, Slider, Range, Dropdown, GlobalFilter}
