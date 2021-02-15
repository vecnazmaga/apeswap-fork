import React from 'react'
import { Card, CardBody, Heading, Text } from '@apeswapfinance/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { usePriceCakeBusd } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import { CAKE_PER_BLOCK } from 'config'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const cakePriceUsd = usePriceCakeBusd()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0
  const bananaPerBlock = CAKE_PER_BLOCK.toNumber()
  const marketCap = cakePriceUsd.toNumber() * cakeSupply

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Banana Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total BANANA Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'USD Market Cap')}</Text>
          {marketCap && <CardValue fontSize="14px" value={marketCap} decimals={0} prefix="$" />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total BANANA Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={getBalanceNumber(burnedBalance)} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New BANANA/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={bananaPerBlock} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
