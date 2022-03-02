import React from 'react'
import { useMatchBreakpoints } from '@apeswapfinance/uikit'
import ServiceTokenDisplay from 'components/ServiceTokenDisplay'
import ListCard from './ListCard'
import { ListViewContainer } from './styles'
import MobileListCard from './MobileListCard'
import { ExtendedListViewProps } from './types'

const ListView: React.FC<{ listViews: ExtendedListViewProps[] }> = ({ listViews }) => {
  const { isXl, isLg } = useMatchBreakpoints()
  const isMobile = !isLg && !isXl
  return (
    <ListViewContainer>
      {listViews.map((view) => {
        return isMobile ? (
          <MobileListCard
            serviceTokenDisplay={
              <ServiceTokenDisplay
                token1={view.tokens.token1}
                token2={view.tokens.token2}
                token3={view.tokens?.token3}
                token4={view.tokens?.token4}
                stakeLp={view.tokens?.stakeLp}
                earnLp={view.tokens?.earnLp}
              />
            }
            tag={view?.tag}
            title={view.title}
            cardContent={view.cardContent}
            expandedContent={view.expandedContent}
          />
        ) : (
          <ListCard
            serviceTokenDisplay={
              <ServiceTokenDisplay
                token1={view.tokens.token1}
                token2={view.tokens.token2}
                token3={view.tokens?.token3}
                token4={view.tokens?.token4}
                stakeLp={view.tokens?.stakeLp}
                earnLp={view.tokens?.earnLp}
              />
            }
            tag={view?.tag}
            title={view.title}
            cardContent={view.cardContent}
            expandedContent={view.expandedContent}
          />
        )
      })}
    </ListViewContainer>
  )
}

export default React.memo(ListView)
