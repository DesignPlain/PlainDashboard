import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudfront_getResponseHeadersPolicySecurityHeadersConfigXssProtection {
  // Whether CloudFront includes the mode=block directive in the X-XSS-Protection header.
  modeBlock?: boolean;

  // Whether CloudFront overrides the X-XSS-Protection HTTP response header received from the origin with the one specified in this response headers policy.
  override?: boolean;

  // Boolean value that determines the value of the X-XSS-Protection HTTP response header. When this setting is true, the value of the X-XSS-Protection header is 1. When this setting is false, the value of the X-XSS-Protection header is 0.
  protection?: boolean;

  // Whether CloudFront sets a reporting URI in the X-XSS-Protection header.
  reportUri?: string;
}

export function cloudfront_getResponseHeadersPolicySecurityHeadersConfigXssProtection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "modeBlock",
      "Whether CloudFront includes the mode=block directive in the X-XSS-Protection header.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "override",
      "Whether CloudFront overrides the X-XSS-Protection HTTP response header received from the origin with the one specified in this response headers policy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "protection",
      "Boolean value that determines the value of the X-XSS-Protection HTTP response header. When this setting is true, the value of the X-XSS-Protection header is 1. When this setting is false, the value of the X-XSS-Protection header is 0.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "reportUri",
      "Whether CloudFront sets a reporting URI in the X-XSS-Protection header.",
      [],
      true,
      false,
    ),
  ];
}
