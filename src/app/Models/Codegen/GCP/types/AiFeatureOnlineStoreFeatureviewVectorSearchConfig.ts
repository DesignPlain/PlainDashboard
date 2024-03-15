import { AiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig } from "./AiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig";
import { AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig } from "./AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig";

export interface AiFeatureOnlineStoreFeatureviewVectorSearchConfig {
  // Configuration options for using brute force search, which simply implements the standard linear search in the database for each query. It is primarily meant for benchmarking and to generate the ground truth for approximate search.
  BruteForceConfig?: AiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig;

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

  // The number of dimensions of the input embedding.
  EmbeddingDimension?: number;

  // Columns of features that are used to filter vector search results.
  FilterColumns?: Array<string>;

  /*
Configuration options for the tree-AH algorithm (Shallow tree + Asymmetric Hashing). Please refer to this paper for more details: https://arxiv.org/abs/1908.10396
Structure is documented below.
*/
  TreeAhConfig?: AiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig;
}
