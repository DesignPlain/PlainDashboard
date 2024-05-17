import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel,
  Networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel_GetTypes,
} from "./Networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel";

export interface Networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcher {
  /*
Specifies how matching should be done.
Possible values are: `MATCH_ANY`, `MATCH_ALL`.
*/
  MetadataLabelMatchCriteria?: string;

  /*
The list of label value pairs that must match labels in the provided metadata based on filterMatchCriteria
Structure is documented below.
*/
  MetadataLabels?: Array<Networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel>;
}

export function Networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MetadataLabelMatchCriteria",
      "Specifies how matching should be done.\nPossible values are: `MATCH_ANY`, `MATCH_ALL`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MetadataLabels",
      "The list of label value pairs that must match labels in the provided metadata based on filterMatchCriteria\nStructure is documented below.",
      Networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel_GetTypes(),
      false,
      false,
    ),
  ];
}
