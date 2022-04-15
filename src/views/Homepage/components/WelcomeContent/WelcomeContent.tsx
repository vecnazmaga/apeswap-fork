import React from 'react'
import { ApeSwapRoundIcon, Flex, Text, useMatchBreakpoints } from '@apeswapfinance/uikit'
import { BuyBanana, ContentContainer, HeadingText, LearnMore } from './styles'

const WelcomeContent: React.FC = () => {
  const { isSm, isXs } = useMatchBreakpoints()
  const isMobile = isSm || isXs

  return (
    <Flex justifyContent="center" alignItems="center" style={{ width: '100%' }}>
      <ContentContainer>
        <Flex flexDirection="column" style={{ maxWidth: '650px' }}>
          <HeadingText>Welcome to the Most Connected DeFi Hub</HeadingText>
          {!isMobile && (
            <>
              <br />
              <br />
              <Text>
                Whether you are new to crypto or you are a DeFi veteran, ApeSwap has the tools and the community to
                support your decentralized finance needs.
              </Text>
            </>
          )}
          <br />
          <br />
          <Flex>
            {isMobile ? (
              <Flex justifyContent="center" alignItems="center" flexDirection="column" style={{ width: '100%' }}>
                <a href="/swap" rel="noopener noreferrer" style={{ width: '90%' }}>
                  <BuyBanana fullWidth>
                    Buy Banana
                    <ApeSwapRoundIcon ml="10px" width="27px" height="27px" />
                  </BuyBanana>
                </a>
                <a
                  href="https://apeswap.gitbook.io/apeswap-finance/welcome/master"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '90%' }}
                >
                  <LearnMore>Learn More</LearnMore>
                </a>
              </Flex>
            ) : (
              <Flex justifyContent="space-between" style={{ width: '435px' }}>
                <a href="/swap" rel="noopener noreferrer">
                  <BuyBanana>
                    Buy Banana
                    <ApeSwapRoundIcon ml="10px" width="27px" height="27px" />
                  </BuyBanana>
                </a>
                <a
                  href="https://apeswap.gitbook.io/apeswap-finance/welcome/master"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LearnMore>Learn More</LearnMore>
                </a>
              </Flex>
            )}
          </Flex>
        </Flex>

        {/*
         Will be added later
         {!isMobile && (
          <Flex alignItems="center" justifyContent="center" paddingBottom="100px">
            <Spinner size={400} />
          </Flex>
        )} */}
      </ContentContainer>
    </Flex>
  )
}

export default React.memo(WelcomeContent)
