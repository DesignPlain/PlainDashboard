export interface EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel {
  // Required. Label name presented as key in xDS Node Metadata.
  LabelName?: string;

  /*
Required. Label value presented as value corresponding to the above key, in xDS Node Metadata.

- - -
*/
  LabelValue?: string;
}
