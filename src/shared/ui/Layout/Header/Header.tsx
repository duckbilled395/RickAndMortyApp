import React from 'react'
import styled from 'styled-components'

import { colors } from '../../../constants'

import Login from '../../LoginButtons'
import LoginButtons from "../../LoginButtons";
import { useAppSelector } from "../../../hooks/hooks";
import { getAuthData } from "../../../store/selectors/selectors";

const StyledHeader = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${colors.bg};
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 26px;
`
const StyledHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 220px;
`

const Header: React.FC = () => {
	const email = useAppSelector(state => getAuthData(state)).email;
	return (
		<StyledHeader>
			<StyledHeaderContent />
			<StyledHeaderContent>
				{email}
			</StyledHeaderContent>
			<LoginButtons />
		</StyledHeader>

	)
}

export default Header
