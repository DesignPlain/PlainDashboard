import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiIndexMetadataConfigAlgorithmConfigBruteForceConfig,
  Vertex_AiIndexMetadataConfigAlgorithmConfigBruteForceConfig_GetTypes,
} from "./Vertex_AiIndexMetadataConfigAlgorithmConfigBruteForceConfig";
import {
  Vertex_AiIndexMetadataConfigAlgorithmConfigTreeAhConfig,
  Vertex_AiIndexMetadataConfigAlgorithmConfigTreeAhConfig_GetTypes,
} from "./Vertex_AiIndexMetadataConfigAlgorithmConfigTreeAhConfig";

export interface Vertex_AiIndexMetadataConfigAlgorithmConfig {
  /*
Configuration options for using brute force search, which simply implements the
standard linear search in the database for each query.
*/
  BruteForceConfig?: Vertex_AiIndexMetadataConfigAlgorithmConfigBruteForceConfig;

  /*
Configuration options for using the tree-AH algorithm (Shallow tree + Asymmetric Hashing).
Please refer to this paper for more details: https://arxiv.org/abs/1908.10396
Structure is documented below.
*/
  TreeAhConfig?: Vertex_AiIndexMetadataConfigAlgorithmConfigTreeAhConfig;
}

export function Vertex_AiIndexMetadataConfigAlgorithmConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "BruteForceConfig",
      "Configuration options for using brute force search, which simply implements the\nstandard linear search in the database for each query.",
      Vertex_AiIndexMetadataConfigAlgorithmConfigBruteForceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TreeAhConfig",
      "Configuration options for using the tree-AH algorithm (Shallow tree + Asymmetric Hashing).\nPlease refer to this paper for more details: https://arxiv.org/abs/1908.10396\nStructure is documented below.",
      Vertex_AiIndexMetadataConfigAlgorithmConfigTreeAhConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
