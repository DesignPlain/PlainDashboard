export interface AiIndexMetadataConfigAlgorithmConfigTreeAhConfig {
  // Number of embeddings on each leaf node. The default value is 1000 if not set.
  LeafNodeEmbeddingCount?: number;

  /*
The default percentage of leaf nodes that any query may be searched. Must be in
range 1-100, inclusive. The default value is 10 (means 10%!!(MISSING))(MISSING) if not set.
*/
  LeafNodesToSearchPercent?: number;
}
