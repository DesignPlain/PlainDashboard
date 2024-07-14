import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfront_getOriginRequestPolicyHeadersConfigHeader,
  cloudfront_getOriginRequestPolicyHeadersConfigHeader_GetTypes,
} from "./cloudfront_getOriginRequestPolicyHeadersConfigHeader";

export interface cloudfront_getOriginRequestPolicyHeadersConfig {
  //
  headerBehavior?: string;

  //
  headers?: Array<cloudfront_getOriginRequestPolicyHeadersConfigHeader>;
}

export function cloudfront_getOriginRequestPolicyHeadersConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "headerBehavior", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "",
      cloudfront_getOriginRequestPolicyHeadersConfigHeader_GetTypes(),
      true,
      false,
    ),
  ];
}
