import React from 'react'
import styled, { keyframes } from 'styled-components'

interface ImageProps {
  src: string
  alt: string
  originalLink?: string
}

const breatheAnimation = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`

const Container = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 100%;
  animation: ${breatheAnimation} 15s ease infinite;
`

const StyledImage = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transition: opacity 1s linear;
  height: 100%;
  object-fit: cover;
  border-radius: 32px 32px 0 0;
`

const Image: React.FC<ImageProps> = ({ src, alt, originalLink }) => {
const previewImage = <StyledImage src={src} alt={alt} />

  return (
    <Container>
      {originalLink ? (
        <a href={originalLink} target="_blank" rel="noreferrer noopener">
          {previewImage}
        </a>
      ) : (
        previewImage
      )}
    </Container>
  )
}

export default Image
