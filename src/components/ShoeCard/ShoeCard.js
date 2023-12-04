import React from 'react'
import styled from 'styled-components/macro'

import { COLORS, WEIGHTS } from '../../constants'
import { formatPrice, pluralize, isNewShoe } from '../../utils'
import Spacer from '../Spacer'

const ShoeCard = ({ slug, name, imageSrc, price, salePrice, releaseDate, numOfColors }) => {
  const variant = typeof salePrice === 'number' ? 'on-sale' : isNewShoe(releaseDate) ? 'new-release' : 'default'
  // console.log(name, salePrice)
  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt='' src={imageSrc} />
        </ImageWrapper>
        {variant === 'on-sale' && <HypeTag>Sale</HypeTag>}
        {variant === 'new-release' && <JustReleasedTag>Just Released!</JustReleasedTag>}
        <Spacer size={12} />
        <Row>
          <Name>{name} </Name>
          <Price
            style={{
              '--strike-through': variant === 'on-sale' ? 'line-through' : undefined,
              '--color': variant === 'on-sale' ? COLORS.gray[700] : undefined,
            }}
          >
            {formatPrice(price)}
          </Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {variant === 'on-sale' ? <SalePrice>{formatPrice(salePrice)}</SalePrice> : undefined}
        </Row>
      </Wrapper>
    </Link>
  )
}

const Link = styled.a`
  flex: 1;
  min-width: 275px;
  text-decoration: none;
  color: inherit;
`

const Wrapper = styled.article`
  position: relative;
`

const ImageWrapper = styled.div`
  position: relative;
  line-height: 0;
  width: 100%;
`

const Image = styled.img`
  border-radius: 16px 16px 4px 4px;
  width: 100%;
  height: 100%;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
`

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`

const Price = styled.span`
  color: var(--color);
  text-decoration: var(--strike-through);
`

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`
const HypeTag = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  line-height: 32px;
  height: 32px;
  position: absolute;
  top: 12px;
  right: -4px;
  border-radius: 2px;
  color: ${COLORS.white};
  background: ${COLORS.primary};
`
const JustReleasedTag = styled(HypeTag)`
  background: ${COLORS.secondary};
`

export default ShoeCard
