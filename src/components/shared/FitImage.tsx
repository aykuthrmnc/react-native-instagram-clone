import {Dimensions, Image, StyleSheet} from "react-native";

const FitImage = ({media}: any) => {
  const width = Dimensions.get("window").width;
  const ratio = media.width / width;
  const height = media.height / ratio;

  return (
    <Image
      style={{
        width,
        height,
      }}
      source={{
        uri: media.src,
      }}
    />
  );
};

export default FitImage;

const styles = StyleSheet.create({});
