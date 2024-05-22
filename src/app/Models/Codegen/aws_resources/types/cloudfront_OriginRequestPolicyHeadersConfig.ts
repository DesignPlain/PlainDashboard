import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfront_OriginRequestPolicyHeadersConfigHeaders,
  cloudfront_OriginRequestPolicyHeadersConfigHeaders_GetTypes,
} from "./cloudfront_OriginRequestPolicyHeadersConfigHeaders";

export interface cloudfront_OriginRequestPolicyHeadersConfig {
  //
  headerBehavior?: string;

  //
  headers?: cloudfront_OriginRequestPolicyHeadersConfigHeaders;
}

export function cloudfront_OriginRequestPolicyHeadersConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "headerBehavior",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "headers",
      "",
      cloudfront_OriginRequestPolicyHeadersConfigHeaders_GetTypes(),
      false,
      false,
    ),
  ];
}
