import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd {
  // The value of the header to add.
  HeaderValue?: string;

  /*
If false, headerValue is appended to any values that already exist for the header. If true, headerValue is set for the header, discarding any values that were set for that header.
The default value is false.
*/
  Replace?: boolean;

  // The name of the header.
  HeaderName?: string;
}

export function Compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "HeaderValue",
      "The value of the header to add.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Replace",
      "If false, headerValue is appended to any values that already exist for the header. If true, headerValue is set for the header, discarding any values that were set for that header.\nThe default value is false.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HeaderName",
      "The name of the header.",
      [],
      true,
      false,
    ),
  ];
}
