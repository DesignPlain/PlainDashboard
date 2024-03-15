export interface AiIndexIndexStat {
  /*
(Output)
The number of shards in the Index.
*/
  ShardsCount?: number;

  /*
(Output)
The number of vectors in the Index.
*/
  VectorsCount?: string;
}
