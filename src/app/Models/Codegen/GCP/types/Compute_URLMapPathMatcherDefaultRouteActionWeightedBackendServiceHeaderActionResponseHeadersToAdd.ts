import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd {
  /*
If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header.
*/
  Replace?: boolean;

  // The name of the header to add.
  HeaderName?: string;

  // The value of the header to add.
  HeaderValue?: string;
}

export function Compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Replace",
      "If false, headerValue is appended to any values that already exist for the header.\nIf true, headerValue is set for the header, discarding any values that were set for that header.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HeaderName",
      "The name of the header to add.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HeaderValue",
      "The value of the header to add.",
      [],
      false,
      false,
    ),
  ];
}
