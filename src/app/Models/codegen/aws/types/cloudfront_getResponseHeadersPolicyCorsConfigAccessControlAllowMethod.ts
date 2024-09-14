import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowMethod {
  //
  items?: Array<string>;
}

export function cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowMethod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "items",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}