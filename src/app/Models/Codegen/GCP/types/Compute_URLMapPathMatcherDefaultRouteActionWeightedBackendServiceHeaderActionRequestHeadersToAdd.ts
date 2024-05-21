import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd {
  // The name of the header to add.
  headerName?: string;

  // The value of the header to add.
  headerValue?: string;

  /*
If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header.
*/
  replace?: boolean;
}

export function compute_URLMapPathMatcherDefaultRouteActionWeightedBackendServiceHeaderActionRequestHeadersToAdd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "headerName",
      "The name of the header to add.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "headerValue",
      "The value of the header to add.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "replace",
      "If false, headerValue is appended to any values that already exist for the header.\nIf true, headerValue is set for the header, discarding any values that were set for that header.",
      [],
      false,
      false,
    ),
  ];
}
