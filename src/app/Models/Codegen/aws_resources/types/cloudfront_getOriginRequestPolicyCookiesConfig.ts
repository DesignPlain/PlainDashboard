import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfront_getOriginRequestPolicyCookiesConfigCookie,
  cloudfront_getOriginRequestPolicyCookiesConfigCookie_GetTypes,
} from "./cloudfront_getOriginRequestPolicyCookiesConfigCookie";

export interface cloudfront_getOriginRequestPolicyCookiesConfig {
  //
  cookieBehavior?: string;

  //
  cookies?: Array<cloudfront_getOriginRequestPolicyCookiesConfigCookie>;
}

export function cloudfront_getOriginRequestPolicyCookiesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "cookieBehavior", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "cookies",
      "",
      cloudfront_getOriginRequestPolicyCookiesConfigCookie_GetTypes(),
      true,
      false,
    ),
  ];
}
