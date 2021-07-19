import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import styled from "styled-components";
import CreateIcon from '@material-ui/icons/Create';

function Sidebar() {
  return (
    <SidebarContainer>
      {/* SidebarHeader */}
      <SidebarHeader>
        <SidebarInfo>
          <h2>TORRES FAM HQ</h2>
          <h3>
            <FiberManualRecordIcon />
              Mike Torres
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    font-size: 13px;
    display: flex;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    color: green;
    margin-top: 1px;
    margin-right: 2px;
  }
`;