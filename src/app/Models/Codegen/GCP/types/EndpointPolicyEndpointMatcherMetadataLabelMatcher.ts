import { EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel } from "./EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel";

export interface EndpointPolicyEndpointMatcherMetadataLabelMatcher {
  /*
Specifies how matching should be done.
Possible values are: `MATCH_ANY`, `MATCH_ALL`.
*/
  MetadataLabelMatchCriteria?: string;

  /*
The list of label value pairs that must match labels in the provided metadata based on filterMatchCriteria
Structure is documented below.
*/
  MetadataLabels?: Array<EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel>;
}
