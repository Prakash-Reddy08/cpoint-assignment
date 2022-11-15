import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getPaidStudents, getStudentsDetails, searchStudents } from './features/StudentsSlice'

const Search = () => {
    const { showPaidStudents } = useSelector((state) => state.students)
    const [searchInput, setSearchInput] = useState('')
    const dispatch = useDispatch();
    useEffect(() => {
        if (searchInput !== "") {
            dispatch(searchStudents(searchInput))
        }
        else if (showPaidStudents) {
            dispatch(getPaidStudents())
        }
        else {
            dispatch(getStudentsDetails())
        }
    }, [searchInput])
    const handleInputChange = (e) => {
        setSearchInput(e.target.value)
    }
    return (
        <Wrapper>
            <input type="text" onChange={handleInputChange} value={searchInput} name="Search" placeholder='Search' />
        </Wrapper>
    )
}
const Wrapper = styled.div`

`
export default Search