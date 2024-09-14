import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd {
  // The name of the header.
  headerName?: string;

  // The value of the header to add.
  headerValue?: string;

  /*
If false, headerValue is appended to any values that already exist for the header. If true, headerValue is set for the header, discarding any values that were set for that header.
The default value is false.
*/
  replace?: boolean;
}

export function compute_RegionUrlMapDefaultRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "headerName",
      "The name of the header.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "headerValue",
      "The value of the header to add.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "replace",
      "If false, headerValue is appended to any values that already exist for the header. If true, headerValue is set for the header, discarding any values that were set for that header.\nThe default value is false.",
      () => [],
      false,
      false,
    ),
  ];
}
