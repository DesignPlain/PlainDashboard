import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_getAiIndexMetadataConfigAlgorithmConfigBruteForceConfig,
  Vertex_getAiIndexMetadataConfigAlgorithmConfigBruteForceConfig_GetTypes,
} from "./Vertex_getAiIndexMetadataConfigAlgorithmConfigBruteForceConfig";
import {
  Vertex_getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig,
  Vertex_getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig_GetTypes,
} from "./Vertex_getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig";

export interface Vertex_getAiIndexMetadataConfigAlgorithmConfig {
  /*
Configuration options for using brute force search, which simply implements the
standard linear search in the database for each query.
*/
  BruteForceConfigs?: Array<Vertex_getAiIndexMetadataConfigAlgorithmConfigBruteForceConfig>;

  /*
Configuration options for using the tree-AH algorithm (Shallow tree + Asymmetric Hashing).
Please refer to this paper for more details: https://arxiv.org/abs/1908.10396
*/
  TreeAhConfigs?: Array<Vertex_getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig>;
}

export function Vertex_getAiIndexMetadataConfigAlgorithmConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "BruteForceConfigs",
      "Configuration options for using brute force search, which simply implements the\nstandard linear search in the database for each query.",
      Vertex_getAiIndexMetadataConfigAlgorithmConfigBruteForceConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "TreeAhConfigs",
      "Configuration options for using the tree-AH algorithm (Shallow tree + Asymmetric Hashing).\nPlease refer to this paper for more details: https://arxiv.org/abs/1908.10396",
      Vertex_getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
