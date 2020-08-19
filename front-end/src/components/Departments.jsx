import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

const DepartmentsContainer = styled.div`
  height: calc(100vh - 150px);
  border-right: 1px solid #DEDEDE;
  padding: 20px 20px 0 0;
  position: sticky;
  top: 0;
`;

const DepartmentsHeader = styled.h4`
  margin-top: 0;
`;

const DepartmentItem = styled.li`
  & {
    margin-bottom: 14px;
    color: #6d6e71;
    cursor: pointer;
    user-select: none;
  }
  &:hover {
    text-decoration: underline;
  }
  &.active-department {
    font-weight: bold;
  }
`;

const Departments = ({ departments, currentDepartment, filterDepartment }) => {
  return (
    <DepartmentsContainer>
      <ul>
        <DepartmentsHeader>Departments</DepartmentsHeader>
        <DepartmentItem 
          className={`${!currentDepartment ? 'active-department' : ''}`}
          onClick={() => filterDepartment(null)}>All departments</DepartmentItem>
        {departments.map(department => (
          <DepartmentItem 
            key={department.id}
            className={`${currentDepartment === department.id ? 'active-department' : ''}`}
            onClick={() => filterDepartment(department.id)}>{ department.name }</DepartmentItem>
        ))}
      </ul>
    </DepartmentsContainer>
  );
}
 
const mapStateToProps = ({ departments }) => ({ departments })

export default connect(mapStateToProps)(Departments);