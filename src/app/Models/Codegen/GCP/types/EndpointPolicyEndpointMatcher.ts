import { EndpointPolicyEndpointMatcherMetadataLabelMatcher } from "./EndpointPolicyEndpointMatcherMetadataLabelMatcher";

export interface EndpointPolicyEndpointMatcher {
  /*
The matcher is based on node metadata presented by xDS clients.
Structure is documented below.
*/
  MetadataLabelMatcher?: EndpointPolicyEndpointMatcherMetadataLabelMatcher;
}
