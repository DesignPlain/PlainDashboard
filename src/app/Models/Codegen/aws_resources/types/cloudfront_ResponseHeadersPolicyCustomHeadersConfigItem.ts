import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudfront_ResponseHeadersPolicyCustomHeadersConfigItem {
  // Whether CloudFront overrides the `Content-Security-Policy` HTTP response header received from the origin with the one specified in this response headers policy.
  override?: boolean;

  // The value for the HTTP response header.
  value?: string;

  // The HTTP response header name.
  header?: string;
}

export function cloudfront_ResponseHeadersPolicyCustomHeadersConfigItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "override",
      "Whether CloudFront overrides the `Content-Security-Policy` HTTP response header received from the origin with the one specified in this response headers policy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value for the HTTP response header.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "header",
      "The HTTP response header name.",
      [],
      true,
      false,
    ),
  ];
}
