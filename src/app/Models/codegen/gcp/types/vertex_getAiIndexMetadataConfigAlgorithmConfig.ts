import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vertex_getAiIndexMetadataConfigAlgorithmConfigBruteForceConfig,
  vertex_getAiIndexMetadataConfigAlgorithmConfigBruteForceConfig_GetTypes,
} from './vertex_getAiIndexMetadataConfigAlgorithmConfigBruteForceConfig';
import {
  vertex_getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig,
  vertex_getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig_GetTypes,
} from './vertex_getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig';

export interface vertex_getAiIndexMetadataConfigAlgorithmConfig {
  /*
Configuration options for using brute force search, which simply implements the
standard linear search in the database for each query.
*/
  bruteForceConfigs?: Array<vertex_getAiIndexMetadataConfigAlgorithmConfigBruteForceConfig>;

  /*
Configuration options for using the tree-AH algorithm (Shallow tree + Asymmetric Hashing).
Please refer to this paper for more details: https://arxiv.org/abs/1908.10396
*/
  treeAhConfigs?: Array<vertex_getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig>;
}

export function vertex_getAiIndexMetadataConfigAlgorithmConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'bruteForceConfigs',
      'Configuration options for using brute force search, which simply implements the\nstandard linear search in the database for each query.',
      () =>
        vertex_getAiIndexMetadataConfigAlgorithmConfigBruteForceConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'treeAhConfigs',
      'Configuration options for using the tree-AH algorithm (Shallow tree + Asymmetric Hashing).\nPlease refer to this paper for more details: https://arxiv.org/abs/1908.10396',
      () =>
        vertex_getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
