import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcher,
  Networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcher_GetTypes,
} from "./Networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcher";

export interface Networkservices_EndpointPolicyEndpointMatcher {
  /*
The matcher is based on node metadata presented by xDS clients.
Structure is documented below.
*/
  MetadataLabelMatcher?: Networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcher;
}

export function Networkservices_EndpointPolicyEndpointMatcher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "MetadataLabelMatcher",
      "The matcher is based on node metadata presented by xDS clients.\nStructure is documented below.",
      Networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcher_GetTypes(),
      true,
      false,
    ),
  ];
}
