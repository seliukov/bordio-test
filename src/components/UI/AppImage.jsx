import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;

  img {
    height: 100%;
  }
`;

export const AppImage = ({ image, width, height, alt }) => {
  return (
    <ImageWrapper width={width} height={height}>
      <img src={image} alt={alt} />
    </ImageWrapper>
  );
};

export default AppImage;
