import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  img {
    width: 100%;
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
