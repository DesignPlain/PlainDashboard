import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfront_ResponseHeadersPolicyCustomHeadersConfigItem,
  cloudfront_ResponseHeadersPolicyCustomHeadersConfigItem_GetTypes,
} from "./cloudfront_ResponseHeadersPolicyCustomHeadersConfigItem";

export interface cloudfront_ResponseHeadersPolicyCustomHeadersConfig {
  //
  items?: Array<cloudfront_ResponseHeadersPolicyCustomHeadersConfigItem>;
}

export function cloudfront_ResponseHeadersPolicyCustomHeadersConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "items",
      "",
      cloudfront_ResponseHeadersPolicyCustomHeadersConfigItem_GetTypes(),
      false,
      false,
    ),
  ];
}
