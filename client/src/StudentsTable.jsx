import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { changePaymentStatus, setPaymentStatus } from './features/StudentsSlice'
const StudentsTable = () => {
    const { students } = useSelector(state => state.students)
    const dispatch = useDispatch();
    const handleClick = (id) => {
        dispatch(setPaymentStatus(id))
        dispatch(changePaymentStatus(id))
    }
    return (
        <Table>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Amount Paid</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, i) => {
                        return <tr key={student._id}>
                            <td>{student.first_name + " " + student.last_name}</td>
                            <td>{student.email_id}</td>
                            <td>{student.is_paid ? "Yes" : "No"}</td>
                            <td>{!student.is_paid && (
                                <button onClick={() => handleClick(student._id)}>Mark as Paid</button>
                            )}</td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
        </Table>
    )
}
const Table = styled.div`
table{
    width:90vw ;
}
td, th {
    border: 2px solid #777;
    padding: 2rem;
    width:10rem ;
    text-align: center;
}
td{
    height:3rem ;
}
th{
    height:4rem ;
}
 
table {
    border-collapse: collapse;
}

`
export default StudentsTable