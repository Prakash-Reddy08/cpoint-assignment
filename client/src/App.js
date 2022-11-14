import styled from 'styled-components'
import Pagination from './Pagination';
import Search from './Search';
import StudentsTable from './StudentsTable';
import ToggleButton from './ToggleButton';
function App() {
  return (
    <Wrapper>
      <section className='top-section'>
        <Search />
        <label htmlFor="toggle">
          Show Paid Students
        </label>
        <ToggleButton id="toggle" />
      </section>
      <section className="table-section">
        <StudentsTable />
      </section>
      <section className='pagination-section'>
        <Pagination />
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display:flex ;
  justify-content:center ;
  align-items:center ;
  flex-direction:column ;
  height:100vh ;
  margin:0 2.7rem ;
  .top-section{
    display:flex ;
    align-items:center ;
    justify-content:flex-end ;
    flex:1 ;
  }
  .table-section{
    flex:10;
    display:flex ;
    justify-content:center ;
  }
  .pagination-section{
    flex:1 ;
  }
`
export default App;
