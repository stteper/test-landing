import React from 'react'

import { Header, Footer, LeftImageBlock, RightImageBlock, Slider, HeadLine } from '../../components'
import { images } from '../../data/imagesList'
export const MainPage: React.FC = () => {
  return (
    <>
      <Header />

      <HeadLine level={1} text={'ut aliquip ex ea commodo consequat'} />

      <LeftImageBlock title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} image={'images/julia-2.jpg'}>
        <p>
          Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </LeftImageBlock>

      <RightImageBlock title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} image={'images/taisiia-1.jpg'}>
        <p>
          Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </RightImageBlock>

      <HeadLine level={2} text={'Lorem ipsum dolor sit amet'} />

      <Slider images={images} />

      <HeadLine level={2} text={'ut aliquip ex ea commodo consequat'} />

      <LeftImageBlock title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} image={'images/julia-1.jpg'}>
        <p>
          Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </LeftImageBlock>

      <RightImageBlock title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} image={'images/taisiia-2.jpg'}>
        <p>
          Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </RightImageBlock>

      <Footer />
    </>
  )
}
