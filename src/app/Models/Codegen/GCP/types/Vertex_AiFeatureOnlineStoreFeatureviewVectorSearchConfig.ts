import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig,
  vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig_GetTypes,
} from "./vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig";
import {
  vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig,
  vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig_GetTypes,
} from "./vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig";

export interface vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig {
  // Column of crowding. This column contains crowding attribute which is a constraint on a neighbor list produced by nearest neighbor search requiring that no more than some value k' of the k neighbors returned have the same value of crowdingAttribute.
  crowdingColumn?: string;

  /*
The distance measure used in nearest neighbor search.
For details on allowed values, see the [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1beta1/projects.locations.featureOnlineStores.featureViews#DistanceMeasureType).
Possible values are: `SQUARED_L2_DISTANCE`, `COSINE_DISTANCE`, `DOT_PRODUCT_DISTANCE`.
*/
  distanceMeasureType?: string;

  // Column of embedding. This column contains the source data to create index for vector search.
  embeddingColumn?: string;

  // The number of dimensions of the input embedding.
  embeddingDimension?: number;

  // Columns of features that are used to filter vector search results.
  filterColumns?: Array<string>;

  /*
Configuration options for the tree-AH algorithm (Shallow tree + Asymmetric Hashing). Please refer to this paper for more details: https://arxiv.org/abs/1908.10396
Structure is documented below.
*/
  treeAhConfig?: vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig;

  // Configuration options for using brute force search, which simply implements the standard linear search in the database for each query. It is primarily meant for benchmarking and to generate the ground truth for approximate search.
  bruteForceConfig?: vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig;
}

export function vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "distanceMeasureType",
      "The distance measure used in nearest neighbor search.\nFor details on allowed values, see the [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1beta1/projects.locations.featureOnlineStores.featureViews#DistanceMeasureType).\nPossible values are: `SQUARED_L2_DISTANCE`, `COSINE_DISTANCE`, `DOT_PRODUCT_DISTANCE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "embeddingColumn",
      "Column of embedding. This column contains the source data to create index for vector search.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "embeddingDimension",
      "The number of dimensions of the input embedding.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "filterColumns",
      "Columns of features that are used to filter vector search results.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "treeAhConfig",
      "Configuration options for the tree-AH algorithm (Shallow tree + Asymmetric Hashing). Please refer to this paper for more details: https://arxiv.org/abs/1908.10396\nStructure is documented below.",
      vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "bruteForceConfig",
      "Configuration options for using brute force search, which simply implements the standard linear search in the database for each query. It is primarily meant for benchmarking and to generate the ground truth for approximate search.",
      vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "crowdingColumn",
      "Column of crowding. This column contains crowding attribute which is a constraint on a neighbor list produced by nearest neighbor search requiring that no more than some value k' of the k neighbors returned have the same value of crowdingAttribute.",
      [],
      false,
      false,
    ),
  ];
}
