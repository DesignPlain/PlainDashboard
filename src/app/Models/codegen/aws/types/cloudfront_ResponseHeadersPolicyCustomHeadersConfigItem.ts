import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudfront_ResponseHeadersPolicyCustomHeadersConfigItem {
  //
  override?: boolean;

  // The value for the HTTP response header.
  value?: string;

  //
  header?: string;
}

export function cloudfront_ResponseHeadersPolicyCustomHeadersConfigItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "override", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value for the HTTP response header.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "header", "", () => [], true, false),
  ];
}
