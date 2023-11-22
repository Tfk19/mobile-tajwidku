import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Box, Image, Text, Heading } from "@gluestack-ui/themed";
import { memo } from "react";

const IsiTentang = ({ item }) => {
  const isiTentang = {
    description: item.description,
    title: item.title,
    video: item.url,
    image: item.image,
  };
  return (
    <Link
      href={{
        pathname: "/isiTentang",
        params: isiTentang,
      }}
      asChild
    >
      <TouchableOpacity activeOpacity={0.5}>
        <Box
          p={"$4"}
          borderBottomColor={"$coolGray300"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1}
        >
          <Box flex={1} mr={"$4"}>
            <Image
              source={{ uri: item.image }}
              w="$full"
              h="$full"
              alt="Image Data"
              role="img"
            />
          </Box>
          <Box flex={1.8}>
            <Heading lineHeight={"$md"} fontSize={"$md"}>
              {item.title}
            </Heading>
          </Box>
        </Box>
      </TouchableOpacity>
    </Link>
  );
};

export default memo(IsiTentang);