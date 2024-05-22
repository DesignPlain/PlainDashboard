import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lightsail_DistributionCacheBehaviorSettingsForwardedCookies {
  // Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter.
  option?: string;

  // The specific cookies to forward to your distribution's origin.
  cookiesAllowLists?: Array<string>;
}

export function lightsail_DistributionCacheBehaviorSettingsForwardedCookies_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "option",
      "Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cookiesAllowLists",
      "The specific cookies to forward to your distribution's origin.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
