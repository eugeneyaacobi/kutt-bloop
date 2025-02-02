import React from "react";
import { Flex } from "rebass/styled-components";

import FeaturesItem from "./FeaturesItem";
import { ColCenterH } from "./Layout";
import { Colors } from "../consts";
import { H3 } from "./Text";

const Features = () => (
  <ColCenterH
    width={1}
    flex="0 0 auto"
    py={[64, 100]}
    backgroundColor={Colors.FeaturesBg}
  >
    <H3 fontSize={[26, 28]} mb={72} light>
      Bloop them to anywhere.
    </H3>
    <Flex
      width={1200}
      maxWidth="100%"
      flex="1 1 auto"
      justifyContent="center"
      flexWrap={["wrap", "wrap", "nowrap"]}
    >
      <FeaturesItem title="Managing links" icon="edit">
        Create, protect and delete your links and monitor them with detailed
        statistics.
      </FeaturesItem>
      <FeaturesItem title="API" icon="zap">
        Use the API to create, delete, and get URLs from anywhere.
      </FeaturesItem>
      <FeaturesItem title="Free" icon="heart">
        Completely free
      </FeaturesItem>
    </Flex>
  </ColCenterH>
);

export default Features;
