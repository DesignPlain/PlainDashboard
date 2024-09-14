import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_getOriginRequestPolicyQueryStringsConfigQueryString,
  cloudfront_getOriginRequestPolicyQueryStringsConfigQueryString_GetTypes,
} from "./cloudfront_getOriginRequestPolicyQueryStringsConfigQueryString";

export interface cloudfront_getOriginRequestPolicyQueryStringsConfig {
  //
  queryStringBehavior?: string;

  //
  queryStrings?: Array<cloudfront_getOriginRequestPolicyQueryStringsConfigQueryString>;
}

export function cloudfront_getOriginRequestPolicyQueryStringsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "queryStringBehavior",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "queryStrings",
      "",
      () =>
        cloudfront_getOriginRequestPolicyQueryStringsConfigQueryString_GetTypes(),
      true,
      false,
    ),
  ];
}
