import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { setCurrentPage } from './features/StudentsSlice';

const Pagination = () => {
    const { totalStudents, studentsPerPage, currentPage } = useSelector((state) => state.students)
    const dispatch = useDispatch();
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalStudents / studentsPerPage); i++) {
        pageNumbers.push(i)
    }
    const handlePageChange = (num) => {
        dispatch(setCurrentPage(num))
    }
    return (
        <Pages>
            <ul>
                {
                    pageNumbers.map((number) => {
                        return <li className={(currentPage === number) ? "selected_page" : ""} key={number} onClick={() => handlePageChange(number)}>{number}</li>
                    })
                }
            </ul>
        </Pages>
    )
}
const Pages = styled.div`
    display:flex ;
    width:100% ;
    ul{
        display: flex;
        padding:0 ;
        li{
            cursor: pointer;
            margin:1.3rem;
            padding:10px ;
            border:1px solid black;
            list-style-type:none ;
        }
        .selected_page{
            background-color:green ;
        }
    }
`
export default Pagination