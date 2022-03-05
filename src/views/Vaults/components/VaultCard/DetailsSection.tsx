import React from 'react'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { useNetworkChainId } from 'state/hooks'
import { Text, Flex, Link, LinkExternal } from '@apeswapfinance/uikit'
import { NETWORK_LABEL } from 'config/constants/chains'

export interface ExpandableSectionProps {
  blockExplorer?: string
  removed?: boolean
  totalValueFormated?: string
  lpLabel?: string
  addLiquidityUrl?: string
  multiplier?: string
  totalStaked?: string
  totalStakedRaw?: string
  personalValueStaked?: number
  blocksRemaining?: number
  isFinished?: boolean
  blocksUntilStart?: number
  stakedTokenPrice?: number
  rewardTokenPrice?: number
  pendingReward?: BigNumber
  projectSite?: string
  tokenDecimals?: number
  depositFee?: number
  withdrawFee?: number
}

const Wrapper = styled.div`
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const StyledText = styled(Text)`
  font-weight: 600;
`

const StyledTextGreen = styled(Text)`
  font-weight: 600;
  color: #38a611;
`

const StyledLink = styled(Link)`
  font-size: 12px;
  text-decoration-line: underline;
  margin-bottom: 14px;
  font-weight: 800;
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  blockExplorer,
  lpLabel,
  addLiquidityUrl,
  personalValueStaked,
  totalStaked,
  totalStakedRaw,
  stakedTokenPrice,
  depositFee,
  withdrawFee,
}) => {
  const { t } = useTranslation()

  const totalDollarAmountStakedFormated = totalStaked
    ? `${Number(totalStaked).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
    : '-'

  const totalStakedFormated = totalStakedRaw
    ? `${Number(totalStakedRaw).toLocaleString(undefined, { maximumFractionDigits: 3 })}`
    : '-'
  const totalUserStaked = personalValueStaked > 0 ? (personalValueStaked * stakedTokenPrice).toFixed(2) : 0

  const chainId = useNetworkChainId()

  return (
    <Wrapper>
      {depositFee && (
        <Flex justifyContent="space-between">
          <StyledText fontSize="12px">{t('Deposit Fee')}:</StyledText>
          <StyledText fontSize="12px">{depositFee}%</StyledText>
        </Flex>
      )}
      <Flex justifyContent="space-between">
        <StyledText fontSize="12px">{t('Withdraw Fee')}:</StyledText>
        <StyledText fontSize="12px">{withdrawFee}%</StyledText>
      </Flex>
      <Flex justifyContent="space-between">
        <StyledText fontSize="12px">{t('Staked Amount')}:</StyledText>
        <StyledText fontSize="12px">{personalValueStaked}</StyledText>
      </Flex>
      <Flex justifyContent="space-between">
        <StyledText fontSize="12px">{t('Staked Value')}:</StyledText>
        <StyledTextGreen fontSize="12px">${totalUserStaked}</StyledTextGreen>
      </Flex>
      <Flex justifyContent="space-between">
        <StyledText fontSize="12px">{t('Total Staked Value')}:</StyledText>
        <StyledTextGreen fontSize="12px">${totalDollarAmountStakedFormated}</StyledTextGreen>
      </Flex>
      <Flex justifyContent="space-between">
        <StyledText fontSize="12px">{t('Total Staked Amount')}:</StyledText>
        <StyledText fontSize="12px">{totalStakedFormated}</StyledText>
      </Flex>
      <Flex justifyContent="space-between">
        <StyledText fontSize="12px">{t('Stake')}:</StyledText>
        <StyledLinkExternal href={addLiquidityUrl}>{lpLabel}</StyledLinkExternal>
      </Flex>
      <Flex justifyContent="center">
        <StyledLink external href={blockExplorer} bold={false}>
          {t(`View on %chain% Scan`, { chain: NETWORK_LABEL[chainId] })}
        </StyledLink>
      </Flex>
    </Wrapper>
  )
}

export default DetailsSection
