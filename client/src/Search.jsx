import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getStudentsDetails, searchStudents } from './features/StudentsSlice'

const Search = () => {
    const [searchInput, setSearchInput] = useState('')
    const dispatch = useDispatch();
    useEffect(() => {
        if (searchInput !== "") {
            dispatch(searchStudents(searchInput))
        }
        else {
            dispatch(getStudentsDetails())
        }
    }, [searchInput])
    console.log(searchInput);
    const handleInputChange = (e) => {
        setSearchInput(e.target.value)
    }
    return (
        <Wrapper>
            <input type="text" onChange={handleInputChange} name="Search" placeholder='Search' />
        </Wrapper>
    )
}
const Wrapper = styled.div`

`
export default Search