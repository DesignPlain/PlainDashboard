import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel,
  networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel_GetTypes,
} from "./networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel";

export interface networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcher {
  /*
The list of label value pairs that must match labels in the provided metadata based on filterMatchCriteria
Structure is documented below.
*/
  metadataLabels?: Array<networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel>;

  /*
Specifies how matching should be done.
Possible values are: `MATCH_ANY`, `MATCH_ALL`.
*/
  metadataLabelMatchCriteria?: string;
}

export function networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "metadataLabels",
      "The list of label value pairs that must match labels in the provided metadata based on filterMatchCriteria\nStructure is documented below.",
      networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metadataLabelMatchCriteria",
      "Specifies how matching should be done.\nPossible values are: `MATCH_ANY`, `MATCH_ALL`.",
      [],
      true,
      false,
    ),
  ];
}
