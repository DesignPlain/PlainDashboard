export interface InstanceTemplateSchedulingNodeAffinity {
  // Corresponds to the label values of a reservation resource.
  Values?: Array<string>;

  // The key for the node affinity label.
  Key?: string;

  /*
The operator. Can be `IN` for node-affinities
or `NOT_IN` for anti-affinities.
*/
  Operator?: string;
}
