import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { Text } from '@apeswapfinance/uikit'
import TextInput from 'components/TextInput'
import useERC20Details from 'hooks/useERC20Details'
import { useToast } from 'state/hooks'
import { useWeb3React } from '@web3-react/core'
import TokenDropdown from './TokenDropdown'
import { ExtendedERC20Details } from '../types'

interface PairCreationProps {
  onChange: (pairCreation: ExtendedERC20Details) => void
}

const PairCreationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 725px;
  border-radius: 10px;
  background: #333333;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const PresaleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 126px;
  width: 686px;
  border-radius: 10px;
  background: rgba(255, 179, 0, 0.1);
  padding: 20px 10px 10px 20px;
  border-radius: 10px;
  margin-bottom: 35px;
`

const StyledText = styled(Text)<{ wallet: string }>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  &:after {
    color: rgba(255, 179, 0, 1);
    font-size: 20px;
    content: '${(props) => props.wallet}';
  }
`

const PairContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  width: 300px;
  margin-bottom: 50px;
`

const StyledDescription = styled(Text)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin-top: 10px;
`

const PairCreation: React.FC<PairCreationProps> = ({ onChange }) => {
  const tokenList = ['WBNB', 'BUSD', 'GNANA']
  const [selectedToken, setSelectedToken] = useState<ExtendedERC20Details>({
    userBalance: null,
    tokenSymbol: null,
    totalSupply: null,
    tokenDecimals: null,
    tokenAddress: null,
    quoteToken: tokenList[0],
  })
  const [tokenApproved, setTokenApproved] = useState(false)
  const [loadingTokenData, setLoadingTokenData] = useState(false)
  const { account } = useWeb3React()
  const accountFormated = ` ${account?.slice(0, 6)}...${account?.slice(account?.length - 4, account?.length)}`
  const { onHandleERC20Details } = useERC20Details()
  const { toastError } = useToast()

  const handleAddressChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const tokenValue = e.currentTarget.value
      if (tokenValue.length === 42) {
        setLoadingTokenData(true)
        onHandleERC20Details(tokenValue.toLowerCase())
          .then((resp) => {
            setSelectedToken({ ...resp, tokenAddress: tokenValue, quoteToken: selectedToken.quoteToken })
            setTokenApproved(true)
            setLoadingTokenData(false)
          })
          .catch((error) => {
            toastError('Something went wrong')
            setTokenApproved(false)
            setLoadingTokenData(false)
            console.error(error)
          })
      } else {
        setTokenApproved(false)
      }
    },
    [setSelectedToken, toastError, setTokenApproved, onHandleERC20Details, selectedToken],
  )

  useEffect(() => {
    if (tokenApproved) {
      onChange(selectedToken)
    } else {
      onChange(null)
    }
  }, [selectedToken, tokenApproved, onChange])

  return (
    <>
      <PairCreationWrapper>
        <TextInput
          placeholderText="Token Address..."
          onChange={handleAddressChange}
          size="lg"
          backgroundColor="#414141"
          icon="cancel.svg"
          load={loadingTokenData}
        />
        <TokenDropdown
          tokens={tokenList}
          onChange={(token) => setSelectedToken({ ...selectedToken, quoteToken: token })}
        />
      </PairCreationWrapper>
      {tokenApproved && (
        <>
          <PairContainer>
            <StyledDescription fontSize="16px">Apeswap pair to be created</StyledDescription>
            <StyledDescription color="rgba(255, 179, 0, 1)" fontSize="20px">
              {selectedToken?.quoteToken} / {selectedToken?.tokenSymbol}
            </StyledDescription>
          </PairContainer>
          <PresaleInfoContainer>
            <StyledText wallet={accountFormated}>Presale Creator:</StyledText>
            <StyledDescription fontSize="13px">
              This account will be the only account capable of adding presale information, editing presale contract
              paramaters and unlocking liquidity.
            </StyledDescription>
            <StyledDescription fontSize="13px">
              We reccomend a minimum liquidity percentage of 60%, and a minimum lock of 1 year.
            </StyledDescription>
          </PresaleInfoContainer>
        </>
      )}
    </>
  )
}

export default React.memo(PairCreation)
