import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudfront_getResponseHeadersPolicySecurityHeadersConfigFrameOption {
  // Whether CloudFront overrides the X-XSS-Protection HTTP response header received from the origin with the one specified in this response headers policy.
  override?: boolean;

  // Value of the X-Frame-Options HTTP response header. Valid values: `DENY` | `SAMEORIGIN`
  frameOption?: string;
}

export function cloudfront_getResponseHeadersPolicySecurityHeadersConfigFrameOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "override",
      "Whether CloudFront overrides the X-XSS-Protection HTTP response header received from the origin with the one specified in this response headers policy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "frameOption",
      "Value of the X-Frame-Options HTTP response header. Valid values: `DENY` | `SAMEORIGIN`",
      [],
      true,
      false,
    ),
  ];
}
