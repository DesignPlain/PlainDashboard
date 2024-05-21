import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcher,
  networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcher_GetTypes,
} from "./networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcher";

export interface networkservices_EndpointPolicyEndpointMatcher {
  /*
The matcher is based on node metadata presented by xDS clients.
Structure is documented below.
*/
  metadataLabelMatcher?: networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcher;
}

export function networkservices_EndpointPolicyEndpointMatcher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "metadataLabelMatcher",
      "The matcher is based on node metadata presented by xDS clients.\nStructure is documented below.",
      networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcher_GetTypes(),
      true,
      false,
    ),
  ];
}
