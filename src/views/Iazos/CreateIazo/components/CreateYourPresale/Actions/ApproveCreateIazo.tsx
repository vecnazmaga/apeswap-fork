import React from 'react'
import styled from 'styled-components'
import { ButtonSquare } from '@apeswapfinance/uikit'
import 'react-datepicker/dist/react-datepicker.css'
import useApproveIazoFactory from 'views/Iazos/hooks/useApproveIazoFactory'

interface ApproveCreateIazoProps {
  tokenAddress: string
}

const StyledButton = styled(ButtonSquare)`
  height: 50px;
  width: 200px;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 700;
`

const ApproveCreateIazo: React.FC<ApproveCreateIazoProps> = ({ tokenAddress }) => {
  const onApprovetokenAddress = useApproveIazoFactory(tokenAddress).onApprove

  return (
    <StyledButton
      onClick={async () => {
        await onApprovetokenAddress()
      }}
    >
      APPROVE
    </StyledButton>
  )
}

export default ApproveCreateIazo
