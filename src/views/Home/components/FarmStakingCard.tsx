import React, { useState, useCallback, useRef } from 'react'
import Reward from 'react-rewards'
import rewards from 'config/constants/rewards'
import useReward from 'hooks/useReward'
import styled from 'styled-components'
import { Heading, Button, Card, CardBody, Text } from '@apeswapfinance/uikit'
import { useWeb3React } from '@web3-react/core'
import useI18n from 'hooks/useI18n'

import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from './UnlockButton'
import BananaHarvestBalance from './BananaHarvestBalance'
import BananaHarvestUsdBalance from './BananaHarvestUsdBalance'
import BananaWalletUsdBalance from './BananaWalletUsdBalance'
import BananaWalletBalance from './BananaWalletBalance'
import CardHeader from './CardHeader'

const StyledFarmStakingCard = styled(Card)`
  background-repeat: no-repeat;
  background-position: top right;
  width: 332px;
  height: 436px;
  text-align: center;
  overflow: visible;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-left: 50px;
  }
`

const Block = styled.div`
  margin-bottom: 16px;
`

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Label = styled.div`
  color: #ffb300;
  font-size: 12px;
  margin-left: 2px;
`

const Actions = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

const StyledTextLock = styled(Text)`
  margin-top: 10px;
  font-size: 28px;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    margin-top: 50px;
  }
`

const StyledButton = styled(Button)`
  background: #ffb300;
  border-radius: 10px;
  border: 0px;
  width: 234px;
  height: 44px;
`

const StyledLabel = styled(Label)`
  font-family: Poppins;
  font-weight: 700;
`

const HarvestDiv = styled.div`
  padding-bottom: 50px;
`

const CardHeaderImage = styled.div`
  position: absolute;
  background: ${(props) =>
    props.theme.isDark ? '#333333' : 'linear-gradient(41.5deg, #a16552 0%, #e1b242 169.83%)'};
  opacity: 0.6;
  top: 0px;
  left: 0px;
  z-index: -1;
  height: 111px;
  width: 100%;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)

  const rewardRef = useRef(null)
  const [typeOfReward, setTypeOfReward] = useState('rewardBanana')

  const { account } = useWeb3React()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const onReward = useReward(
    rewardRef,
    useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid)).onReward,
  )

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      setTypeOfReward('rewardBanana')
      await onReward()
    } catch (error) {
      setTypeOfReward('error')
      rewardRef.current?.rewardMe()
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardHeader>
        <CardHeaderImage />
        <Heading size="lg" mb="0px" color="white">
          {TranslateString(542, 'BANANA')}
          <br />
          {TranslateString(542, 'Earnings')}
        </Heading>
      </CardHeader>
      <CardBody>
        {account ? (
          <HarvestDiv>
            <Block>
              <BananaHarvestBalance />
              <FlexRow>
                <BananaHarvestUsdBalance />
                <StyledLabel>{TranslateString(544, ' total harvest value')}</StyledLabel>
              </FlexRow>
            </Block>
            <Block>
              <BananaWalletBalance />
              <FlexRow>
                <BananaWalletUsdBalance />
                <StyledLabel>{TranslateString(546, 'in BANANA in Wallet')}</StyledLabel>
              </FlexRow>
            </Block>
          </HarvestDiv>
        ) : (
          <FlexRow>
            <StyledTextLock>LOCKED</StyledTextLock>
          </FlexRow>
        )}
        <Actions>
          {account ? (
            <Reward ref={rewardRef} type="emoji" config={rewards[typeOfReward]}>
              <StyledButton
                id="harvest-all"
                disabled={balancesWithValue.length <= 0 || pendingTx}
                onClick={harvestAllFarms}
                fullWidth
              >
                {pendingTx
                  ? TranslateString(548, 'COLLECTING BANANA')
                  : TranslateString(999, `HARVEST ALL (${balancesWithValue.length})`)}
              </StyledButton>
            </Reward>
          ) : (
            <UnlockButton fullWidth />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
