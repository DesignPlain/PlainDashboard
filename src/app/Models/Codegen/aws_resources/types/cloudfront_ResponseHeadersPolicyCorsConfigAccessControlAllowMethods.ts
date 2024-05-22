import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowMethods {
  //
  items?: Array<string>;
}

export function cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowMethods_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "items",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
