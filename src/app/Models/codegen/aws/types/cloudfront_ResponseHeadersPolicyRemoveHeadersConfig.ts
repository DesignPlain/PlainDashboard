import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_ResponseHeadersPolicyRemoveHeadersConfigItem,
  cloudfront_ResponseHeadersPolicyRemoveHeadersConfigItem_GetTypes,
} from "./cloudfront_ResponseHeadersPolicyRemoveHeadersConfigItem";

export interface cloudfront_ResponseHeadersPolicyRemoveHeadersConfig {
  //
  items?: Array<cloudfront_ResponseHeadersPolicyRemoveHeadersConfigItem>;
}

export function cloudfront_ResponseHeadersPolicyRemoveHeadersConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "items",
      "",
      () => cloudfront_ResponseHeadersPolicyRemoveHeadersConfigItem_GetTypes(),
      false,
      false,
    ),
  ];
}
