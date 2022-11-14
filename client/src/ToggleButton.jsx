import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { getPaidStudents, getStudentsDetails, setCurrentPage } from "./features/StudentsSlice"

const ToggleButton = ({ id }) => {
    const { currentPage } = useSelector((state) => state.students)
    const [isChecked, setIsChecked] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        if (isChecked) {
            dispatch(getPaidStudents())
        } else {
            dispatch(getStudentsDetails());
        }
    }, [isChecked, currentPage])
    useEffect(() => {
        dispatch(setCurrentPage(1))
    }, [isChecked])
    const handleCheckBox = () => {
        setIsChecked((prev) => !prev)
    }
    return (
        <Button>
            <label>
                <input id={id} type="checkbox" onChange={handleCheckBox} defaultChecked={isChecked} />
                <span />
            </label>
        </Button>
    )
}
const Button = styled.div`
    label {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    }

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #2c3e50;
        transition: 0.3s;
        border-radius: 30px;
    }

    span:before {
    position: absolute;
    content: "";
    height: 25px;
    width: 25px;
    left: 3px;
    bottom: 2.6px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.3s;
    }

    input:checked + span {
    background-color: #00c853;
    }

    input:checked + span:before {
    transform: translateX(29px);
    }

`
export default ToggleButton