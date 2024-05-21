import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  vertex_AiIndexMetadataConfigAlgorithmConfigBruteForceConfig,
  vertex_AiIndexMetadataConfigAlgorithmConfigBruteForceConfig_GetTypes,
} from "./vertex_AiIndexMetadataConfigAlgorithmConfigBruteForceConfig";
import {
  vertex_AiIndexMetadataConfigAlgorithmConfigTreeAhConfig,
  vertex_AiIndexMetadataConfigAlgorithmConfigTreeAhConfig_GetTypes,
} from "./vertex_AiIndexMetadataConfigAlgorithmConfigTreeAhConfig";

export interface vertex_AiIndexMetadataConfigAlgorithmConfig {
  /*
Configuration options for using brute force search, which simply implements the
standard linear search in the database for each query.
*/
  bruteForceConfig?: vertex_AiIndexMetadataConfigAlgorithmConfigBruteForceConfig;

  /*
Configuration options for using the tree-AH algorithm (Shallow tree + Asymmetric Hashing).
Please refer to this paper for more details: https://arxiv.org/abs/1908.10396
Structure is documented below.
*/
  treeAhConfig?: vertex_AiIndexMetadataConfigAlgorithmConfigTreeAhConfig;
}

export function vertex_AiIndexMetadataConfigAlgorithmConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "bruteForceConfig",
      "Configuration options for using brute force search, which simply implements the\nstandard linear search in the database for each query.",
      vertex_AiIndexMetadataConfigAlgorithmConfigBruteForceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "treeAhConfig",
      "Configuration options for using the tree-AH algorithm (Shallow tree + Asymmetric Hashing).\nPlease refer to this paper for more details: https://arxiv.org/abs/1908.10396\nStructure is documented below.",
      vertex_AiIndexMetadataConfigAlgorithmConfigTreeAhConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
