import { getAiIndexMetadataConfigAlgorithmConfigBruteForceConfig } from "./getAiIndexMetadataConfigAlgorithmConfigBruteForceConfig";
import { getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig } from "./getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig";

export interface getAiIndexMetadataConfigAlgorithmConfig {
  /*
Configuration options for using brute force search, which simply implements the
standard linear search in the database for each query.
*/
  BruteForceConfigs?: Array<getAiIndexMetadataConfigAlgorithmConfigBruteForceConfig>;

  /*
Configuration options for using the tree-AH algorithm (Shallow tree + Asymmetric Hashing).
Please refer to this paper for more details: https://arxiv.org/abs/1908.10396
*/
  TreeAhConfigs?: Array<getAiIndexMetadataConfigAlgorithmConfigTreeAhConfig>;
}
