import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel {
  // Required. Label name presented as key in xDS Node Metadata.
  LabelName?: string;

  /*
Required. Label value presented as value corresponding to the above key, in xDS Node Metadata.

- - -
*/
  LabelValue?: string;
}

export function Networkservices_EndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "LabelName",
      "Required. Label name presented as key in xDS Node Metadata.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LabelValue",
      "Required. Label value presented as value corresponding to the above key, in xDS Node Metadata.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
