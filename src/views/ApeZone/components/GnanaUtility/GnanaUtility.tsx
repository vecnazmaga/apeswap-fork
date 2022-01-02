import React from 'react'
import styled from 'styled-components'
import { AddIcon, Text, Card, Heading } from '@apeswapfinance/uikit'

import OptionCard from './OptionCard'
import OpDetails from './OpDetails'

const UtilityCon = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
`
const UtilityTitle = styled.div`
  display: none;
`
const Options = styled.div`
  display: flex;
  flex-direction: column;
`
const OtherOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
`

// NOT BEING USED FOR NOW (Example how to use UIKit Icon)
const StyledAddIcon = styled(AddIcon)`
  fill: #ffb300;
  width: 60px;
`
const PlusIcon = styled(Text)`
  color: #ffb300;
  font-family: 'Titan One';
  font-size: 35px;
`
const Section = styled(Card)`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => (theme.isDark ? '#212121' : theme.colors.white)};
  align-items: center;
  padding-left: 0.6em;
  padding-right: 0.6em;
  border-radius: 22px;
`
const Section2 = styled(Card)`
  background: ${({ theme }) => (theme.isDark ? '#212121' : theme.colors.white)};
  border-radius: 22px;
`

const OtherOpStyle = {}

export const GnanaUtility: React.FC = () => (
  <UtilityCon>
    <UtilityTitle>
      <Heading textTransform="uppercase">Gnana Utility</Heading>
    </UtilityTitle>
    <Options>
      <OptionCard type="1" title="Option 1" desc="Hold in Wallet">
        <Section>
          <OpDetails
            Icon={<StyledAddIcon />}
            Title="Passive Farming"
            Desc="Propose and Vote on platform decisions"
            ActionTitle="BUY GNANA"
            onAction={() => null}
            OpStyle={OtherOpStyle}
            type="1"
          />
          <PlusIcon>+</PlusIcon>
          <OpDetails
            Icon={<StyledAddIcon />}
            Title="Governance"
            Desc="Propose and Vote on platform decisions"
            ActionTitle="EXPLORE"
            onAction={() => null}
            OpStyle={OtherOpStyle}
            type="1"
          />
        </Section>
      </OptionCard>

      <OtherOptions>
        <OptionCard type="2" title="Option 2" desc="Stake">
          <Section2>
            <OpDetails
              Icon={<StyledAddIcon />}
              Title="Exclusive Pools"
              Desc="Access unique pools with higher APRs"
              ActionTitle="GO TO POOLS"
              onAction={() => null}
              OpStyle={OtherOpStyle}
              type="2"
            />
          </Section2>
        </OptionCard>

        <OptionCard type="3" title="Option 3" desc="Commit">
          <Section2>
            <OpDetails
              Icon={<StyledAddIcon />}
              Title="Exclusive IAO Acess"
              Desc="Access to secondary offerings for a higher token allocation"
              ActionTitle="GO TO IAOs"
              onAction={() => null}
              OpStyle={OtherOpStyle}
              type="3"
            />
          </Section2>
        </OptionCard>
      </OtherOptions>
    </Options>
  </UtilityCon>
)

export default GnanaUtility
