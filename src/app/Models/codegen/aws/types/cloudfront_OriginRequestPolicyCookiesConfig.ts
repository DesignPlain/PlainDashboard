import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_OriginRequestPolicyCookiesConfigCookies,
  cloudfront_OriginRequestPolicyCookiesConfigCookies_GetTypes,
} from "./cloudfront_OriginRequestPolicyCookiesConfigCookies";

export interface cloudfront_OriginRequestPolicyCookiesConfig {
  //
  cookieBehavior?: string;

  //
  cookies?: cloudfront_OriginRequestPolicyCookiesConfigCookies;
}

export function cloudfront_OriginRequestPolicyCookiesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cookieBehavior",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "",
      () => cloudfront_OriginRequestPolicyCookiesConfigCookies_GetTypes(),
      false,
      false,
    ),
  ];
}
