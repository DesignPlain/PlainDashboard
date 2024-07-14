import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentTypeOptions {
  // Whether CloudFront overrides the `X-Content-Type-Options` HTTP response header received from the origin with the one specified in this response headers policy.
  override?: boolean;
}

export function cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentTypeOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "override",
      "Whether CloudFront overrides the `X-Content-Type-Options` HTTP response header received from the origin with the one specified in this response headers policy.",
      [],
      true,
      false,
    ),
  ];
}
