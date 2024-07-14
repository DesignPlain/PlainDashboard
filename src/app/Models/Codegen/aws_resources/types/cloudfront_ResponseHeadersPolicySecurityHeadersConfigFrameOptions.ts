import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudfront_ResponseHeadersPolicySecurityHeadersConfigFrameOptions {
  // The value of the `X-Frame-Options` HTTP response header. Valid values: `DENY` | `SAMEORIGIN`
  frameOption?: string;

  // Whether CloudFront overrides the `X-Frame-Options` HTTP response header received from the origin with the one specified in this response headers policy.
  override?: boolean;
}

export function cloudfront_ResponseHeadersPolicySecurityHeadersConfigFrameOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "frameOption",
      "The value of the `X-Frame-Options` HTTP response header. Valid values: `DENY` | `SAMEORIGIN`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "override",
      "Whether CloudFront overrides the `X-Frame-Options` HTTP response header received from the origin with the one specified in this response headers policy.",
      [],
      true,
      false,
    ),
  ];
}
