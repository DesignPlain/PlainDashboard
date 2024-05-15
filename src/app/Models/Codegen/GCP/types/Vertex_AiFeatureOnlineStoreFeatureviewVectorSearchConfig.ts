import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig,
  Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig_GetTypes,
} from "./Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig";
import {
  Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig,
  Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig_GetTypes,
} from "./Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig";

export interface Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig {
  // The number of dimensions of the input embedding.
  EmbeddingDimension?: number;

  // Columns of features that are used to filter vector search results.
  FilterColumns?: Array<string>;

  /*
Configuration options for the tree-AH algorithm (Shallow tree + Asymmetric Hashing). Please refer to this paper for more details: https://arxiv.org/abs/1908.10396
Structure is documented below.
*/
  TreeAhConfig?: Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig;

  // Configuration options for using brute force search, which simply implements the standard linear search in the database for each query. It is primarily meant for benchmarking and to generate the ground truth for approximate search.
  BruteForceConfig?: Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig;

  // Column of crowding. This column contains crowding attribute which is a constraint on a neighbor list produced by nearest neighbor search requiring that no more than some value k' of the k neighbors returned have the same value of crowdingAttribute.
  CrowdingColumn?: string;

  /*
The distance measure used in nearest neighbor search.
For details on allowed values, see the [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1beta1/projects.locations.featureOnlineStores.featureViews#DistanceMeasureType).
Possible values are: `SQUARED_L2_DISTANCE`, `COSINE_DISTANCE`, `DOT_PRODUCT_DISTANCE`.
*/
  DistanceMeasureType?: string;

  // Column of embedding. This column contains the source data to create index for vector search.
  EmbeddingColumn?: string;
}

export function Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "EmbeddingColumn",
      "Column of embedding. This column contains the source data to create index for vector search.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "EmbeddingDimension",
      "The number of dimensions of the input embedding.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "FilterColumns",
      "Columns of features that are used to filter vector search results.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TreeAhConfig",
      "Configuration options for the tree-AH algorithm (Shallow tree + Asymmetric Hashing). Please refer to this paper for more details: https://arxiv.org/abs/1908.10396\nStructure is documented below.",
      Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "BruteForceConfig",
      "Configuration options for using brute force search, which simply implements the standard linear search in the database for each query. It is primarily meant for benchmarking and to generate the ground truth for approximate search.",
      Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CrowdingColumn",
      "Column of crowding. This column contains crowding attribute which is a constraint on a neighbor list produced by nearest neighbor search requiring that no more than some value k' of the k neighbors returned have the same value of crowdingAttribute.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DistanceMeasureType",
      "The distance measure used in nearest neighbor search.\nFor details on allowed values, see the [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1beta1/projects.locations.featureOnlineStores.featureViews#DistanceMeasureType).\nPossible values are: `SQUARED_L2_DISTANCE`, `COSINE_DISTANCE`, `DOT_PRODUCT_DISTANCE`.",
      [],
      false,
      false,
    ),
  ];
}
