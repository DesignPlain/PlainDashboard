import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_getAiIndexMetadataConfigAlgorithmConfig,
  Vertex_getAiIndexMetadataConfigAlgorithmConfig_GetTypes,
} from "./Vertex_getAiIndexMetadataConfigAlgorithmConfig";

export interface Vertex_getAiIndexMetadataConfig {
  /*
The default number of neighbors to find via approximate search before exact reordering is
performed. Exact reordering is a procedure where results returned by an
approximate search algorithm are reordered via a more expensive distance computation.
Required if tree-AH algorithm is used.
*/
  ApproximateNeighborsCount?: number;

  // The number of dimensions of the input vectors.
  Dimensions?: number;

  /*
The distance measure used in nearest neighbor search. The value must be one of the followings:
- SQUARED_L2_DISTANCE: Euclidean (L_2) Distance
- L1_DISTANCE: Manhattan (L_1) Distance
- COSINE_DISTANCE: Cosine Distance. Defined as 1 - cosine similarity.
- DOT_PRODUCT_DISTANCE: Dot Product Distance. Defined as a negative of the dot product
*/
  DistanceMeasureType?: string;

  /*
Type of normalization to be carried out on each vector. The value must be one of the followings:
- UNIT_L2_NORM: Unit L2 normalization type
- NONE: No normalization type is specified.
*/
  FeatureNormType?: string;

  /*
Index data is split into equal parts to be processed. These are called "shards".
The shard size must be specified when creating an index. The value must be one of the followings:
- SHARD_SIZE_SMALL: Small (2GB)
- SHARD_SIZE_MEDIUM: Medium (20GB)
- SHARD_SIZE_LARGE: Large (50GB)
*/
  ShardSize?: string;

  // The configuration with regard to the algorithms used for efficient search.
  AlgorithmConfigs?: Array<Vertex_getAiIndexMetadataConfigAlgorithmConfig>;
}

export function Vertex_getAiIndexMetadataConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "FeatureNormType",
      "Type of normalization to be carried out on each vector. The value must be one of the followings:\n* UNIT_L2_NORM: Unit L2 normalization type\n* NONE: No normalization type is specified.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ShardSize",
      'Index data is split into equal parts to be processed. These are called "shards".\nThe shard size must be specified when creating an index. The value must be one of the followings:\n* SHARD_SIZE_SMALL: Small (2GB)\n* SHARD_SIZE_MEDIUM: Medium (20GB)\n* SHARD_SIZE_LARGE: Large (50GB)',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AlgorithmConfigs",
      "The configuration with regard to the algorithms used for efficient search.",
      Vertex_getAiIndexMetadataConfigAlgorithmConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ApproximateNeighborsCount",
      "The default number of neighbors to find via approximate search before exact reordering is\nperformed. Exact reordering is a procedure where results returned by an\napproximate search algorithm are reordered via a more expensive distance computation.\nRequired if tree-AH algorithm is used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Dimensions",
      "The number of dimensions of the input vectors.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DistanceMeasureType",
      "The distance measure used in nearest neighbor search. The value must be one of the followings:\n* SQUARED_L2_DISTANCE: Euclidean (L_2) Distance\n* L1_DISTANCE: Manhattan (L_1) Distance\n* COSINE_DISTANCE: Cosine Distance. Defined as 1 - cosine similarity.\n* DOT_PRODUCT_DISTANCE: Dot Product Distance. Defined as a negative of the dot product",
      [],
      true,
      false,
    ),
  ];
}
