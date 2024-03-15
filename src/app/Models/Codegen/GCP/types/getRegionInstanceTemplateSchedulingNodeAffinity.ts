export interface getRegionInstanceTemplateSchedulingNodeAffinity {
  // The key for the node affinity label.
  Key?: string;

  /*
The operator. Can be `IN` for node-affinities
or `NOT_IN` for anti-affinities.
*/
  Operator?: string;

  //
  Values?: Array<string>;
}
