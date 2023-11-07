import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../../components";

const rocket = () => {
  return (
    <>
      <Header title={"rocket"} />
      <Center flex={1}>
        <Heading>Rocket</Heading>
      </Center>
    </>
  );
};

export default rocket;