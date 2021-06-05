import React, { ChangeEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  Card,
  CardBody,
  Heading,
  Text,
  Input as UIKitInput,
  Button,
  AutoRenewIcon,
  CheckmarkIcon,
  Flex,
  WarningIcon,
  useModal,
  Skeleton,
  Checkbox,
} from '@apeswapfinance/uikit'
import { parseISO, formatDistance } from 'date-fns'
import { useWeb3React } from '@web3-react/core'
import { useToast } from 'state/hooks'
import useWeb3 from 'hooks/useWeb3'
import useI18n from 'hooks/useI18n'
import useHasBananaBalance from 'hooks/useHasBananaBalance'
import debounce from 'lodash/debounce'
import useProfileCreation from './contexts/hook'
import ConfirmProfileCreationModal from '../components/ConfirmProfileCreationModal'

enum ExistingUserState {
  IDLE = 'idle', // initial state
  CREATED = 'created', // username has already been created
  NEW = 'new', // username has not been created
}

const MIN_LENGTH = 3
const MAX_LENGTH = 15
const profileApiUrl = process.env.REACT_APP_API_PROFILE
const minimumBananaBalance = 1

const InputWrap = styled.div`
  position: relative;
  max-width: 240px;
`

const Input = styled(UIKitInput)`
  padding-right: 40px;
`

const Indicator = styled(Flex)`
  align-items: center;
  height: 24px;
  justify-content: center;
  margin-top: -12px;
  position: absolute;
  right: 16px;
  top: 50%;
  width: 24px;
`

const UserName: React.FC = () => {
  const [isAcknowledged, setIsAcknoledged] = useState(false)
  const { teamId, tokenId, userName, actions, minimumBananaRequired, allowance } = useProfileCreation()
  const TranslateString = useI18n()
  const { account, library } = useWeb3React()
  const { toastError } = useToast()
  const web3 = useWeb3()
  const [existingUserState, setExistingUserState] = useState<ExistingUserState>(ExistingUserState.IDLE)
  const [isValid, setIsValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const hasMinimumBananaRequired = useHasBananaBalance(minimumBananaBalance)
  const [onPresentConfirmProfileCreation] = useModal(
    <ConfirmProfileCreationModal
      userName={userName}
      tokenId={tokenId}
      account={account}
      teamId={teamId}
      minimumBananaRequired={minimumBananaRequired}
      allowance={allowance}
    />,
  )
  const isUserCreated = existingUserState === ExistingUserState.CREATED

  const checkUsernameValidity = debounce(async (value: string) => {
    try {
      setIsLoading(true)
      const res = await fetch(`${profileApiUrl}/api/users/valid?username=${value}`)

      if (res.ok) {
        setIsValid(true)
        setMessage('')
      } else {
        const data = await res.json()
        setIsValid(false)
        setMessage(data?.error?.message)
      }
    } finally {
      setIsLoading(false)
    }
  }, 200)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    actions.setUserName(value)
    checkUsernameValidity(value)
  }

  const handleConfirm = async () => {
    try {
      setIsLoading(true)

      const signature = library?.bnbSign
        ? (await library.bnbSign(account, userName))?.signature
        : await web3.eth.personal.sign(userName, account, null) // Last param is the password, and is null to request a signature in the wallet

      const response = await fetch(`${profileApiUrl}/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: account,
          username: userName,
          signature,
        }),
      })

      if (response.ok) {
        setExistingUserState(ExistingUserState.CREATED)
      } else {
        const data = await response.json()
        toastError(data?.error?.message)
      }
    } catch (error) {
      toastError(error?.message ? error.message : JSON.stringify(error))
    } finally {
      setIsLoading(false)
    }
  }

  const handleAcknoledge = () => setIsAcknoledged(!isAcknowledged)

  // Perform an initial check to see if the wallet has already created a username
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${profileApiUrl}/api/users?address=${account}`)
        const data = await response.json()

        if (response.ok) {
          const dateCreated = formatDistance(parseISO(data.created_at), new Date())
          setMessage(`Created ${dateCreated} ago`)

          actions.setUserName(data.username)
          setExistingUserState(ExistingUserState.CREATED)
          setIsValid(true)
        } else {
          setExistingUserState(ExistingUserState.NEW)
        }
      } catch (error) {
        toastError('Error: Unable to verify username')
      }
    }

    if (account) {
      fetchUser()
    }
  }, [account, setExistingUserState, setIsValid, setMessage, actions, toastError])

  return (
    <>
      <Text fontSize="20px" color="textSubtle" bold>
        {TranslateString(999, `Step ${4}`)}
      </Text>
      <Heading as="h3" size="xl" mb="24px">
        {TranslateString(999, 'Set Your Name')}
      </Heading>
      <Text as="p" mb="24px">
        {TranslateString(
          999,
          'This name will be shown in team leaderboards and search results as long as your profile is active.',
        )}
      </Text>
      <Card mb="24px">
        <CardBody>
          <Heading as="h4" size="lg" mb="8px">
            {TranslateString(999, 'Set Your Name')}
          </Heading>
          <Text as="p" color="textSubtle" mb="24px">
            {TranslateString(
              999,
              'Your name must be at least 3 and at most 15 standard letters and numbers long. You can’t change this once you click Confirm.',
            )}
          </Text>
          {existingUserState === ExistingUserState.IDLE ? (
            <Skeleton height="40px" width="240px" />
          ) : (
            <InputWrap>
              <Input
                onChange={handleChange}
                isWarning={userName && !isValid}
                isSuccess={userName && isValid}
                minLength={MIN_LENGTH}
                maxLength={MAX_LENGTH}
                disabled={isUserCreated}
                placeholder={TranslateString(999, 'Enter your name...')}
                value={userName}
              />
              <Indicator>
                {isLoading && <AutoRenewIcon spin />}
                {!isLoading && isValid && userName && <CheckmarkIcon color="success" />}
                {!isLoading && !isValid && userName && <WarningIcon color="failure" />}
              </Indicator>
            </InputWrap>
          )}
          <Text color="textSubtle" fontSize="14px" py="4px" mb="16px" style={{ minHeight: '30px' }}>
            {message}
          </Text>
          <Text as="p" color="failure" mb="8px">
            {TranslateString(
              999,
              "Only reuse a name from other social media if you're OK with people viewing your wallet. You can't change your name once you click Confirm.",
            )}
          </Text>
          <label htmlFor="checkbox" style={{ display: 'block', cursor: 'pointer', marginBottom: '24px' }}>
            <Flex alignItems="center">
              <div style={{ flex: 'none' }}>
                <Checkbox id="checkbox" checked={isAcknowledged} onChange={handleAcknoledge} />
              </div>
              <Text ml="8px">
                {TranslateString(999, 'I understand that people can view my wallet if they know my username')}
              </Text>
            </Flex>
          </label>
          <Button onClick={handleConfirm} disabled={!isValid || isUserCreated || isLoading || !isAcknowledged}>
            {TranslateString(999, 'Confirm')}
          </Button>
        </CardBody>
      </Card>
      <Button onClick={onPresentConfirmProfileCreation} disabled={!isValid || !isUserCreated}>
        {TranslateString(999, 'Complete Profile')}
      </Button>
      {!hasMinimumBananaRequired && (
        <Text color="failure" mt="16px">
          {TranslateString(999, `A minimum of ${minimumBananaBalance} BANANA is required`)}
        </Text>
      )}
    </>
  )
}

export default UserName
