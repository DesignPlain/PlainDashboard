import { AiIndexMetadataConfigAlgorithmConfigBruteForceConfig } from "./AiIndexMetadataConfigAlgorithmConfigBruteForceConfig";
import { AiIndexMetadataConfigAlgorithmConfigTreeAhConfig } from "./AiIndexMetadataConfigAlgorithmConfigTreeAhConfig";

export interface AiIndexMetadataConfigAlgorithmConfig {
  /*
Configuration options for using brute force search, which simply implements the
standard linear search in the database for each query.
*/
  BruteForceConfig?: AiIndexMetadataConfigAlgorithmConfigBruteForceConfig;

  /*
Configuration options for using the tree-AH algorithm (Shallow tree + Asymmetric Hashing).
Please refer to this paper for more details: https://arxiv.org/abs/1908.10396
Structure is documented below.
*/
  TreeAhConfig?: AiIndexMetadataConfigAlgorithmConfigTreeAhConfig;
}
