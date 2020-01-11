import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: 10px;
  background-color: #000;

  ${({ width, height }: Pick<Props, 'width' | 'height'>) => `
    max-width: ${width ? `${width}px` : '100%'};
    max-height: ${height ? `${width}px` : '100%'};
  `}
`

const VideoComponent = styled.video`
  width: 100%;
  border-radius: 10px;
  vertical-align: bottom;
`

type Props = {
  autoplay?: HTMLVideoElement['autoplay']
  width?: HTMLVideoElement['width']
  height?: HTMLVideoElement['height']
  srcObject: HTMLVideoElement['srcObject']
}

export const Video: React.FC<Props> = ({ width, height, srcObject, ...rest }) => {
  const videoRef = React.createRef<HTMLVideoElement>()

  React.useEffect(() => {
    const video = videoRef?.current

    if (video && srcObject !== null) {
      video.srcObject = srcObject
      video.play()
    }
  }, [srcObject])

  return (
    <Wrapper width={width} height={height}>
      <VideoComponent ref={videoRef} {...rest} />
    </Wrapper>
  )
}
