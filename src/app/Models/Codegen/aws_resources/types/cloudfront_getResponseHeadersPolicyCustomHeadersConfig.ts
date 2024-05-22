import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfront_getResponseHeadersPolicyCustomHeadersConfigItem,
  cloudfront_getResponseHeadersPolicyCustomHeadersConfigItem_GetTypes,
} from "./cloudfront_getResponseHeadersPolicyCustomHeadersConfigItem";

export interface cloudfront_getResponseHeadersPolicyCustomHeadersConfig {
  //
  items?: Array<cloudfront_getResponseHeadersPolicyCustomHeadersConfigItem>;
}

export function cloudfront_getResponseHeadersPolicyCustomHeadersConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "items",
      "",
      cloudfront_getResponseHeadersPolicyCustomHeadersConfigItem_GetTypes(),
      true,
      false,
    ),
  ];
}
