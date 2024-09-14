import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudfront_getResponseHeadersPolicySecurityHeadersConfigFrameOption {
  // Value of the X-Frame-Options HTTP response header. Valid values: `DENY` | `SAMEORIGIN`
  frameOption?: string;

  // Whether CloudFront overrides the X-XSS-Protection HTTP response header received from the origin with the one specified in this response headers policy.
  override?: boolean;
}

export function cloudfront_getResponseHeadersPolicySecurityHeadersConfigFrameOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "frameOption",
      "Value of the X-Frame-Options HTTP response header. Valid values: `DENY` | `SAMEORIGIN`",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "override",
      "Whether CloudFront overrides the X-XSS-Protection HTTP response header received from the origin with the one specified in this response headers policy.",
      () => [],
      true,
      false,
    ),
  ];
}
