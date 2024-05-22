import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclCaptchaConfigImmunityTimeProperty,
  wafv2_WebAclCaptchaConfigImmunityTimeProperty_GetTypes,
} from "./wafv2_WebAclCaptchaConfigImmunityTimeProperty";

export interface wafv2_WebAclCaptchaConfig {
  // Defines custom immunity time. See `immunity_time_property` below for details.
  immunityTimeProperty?: wafv2_WebAclCaptchaConfigImmunityTimeProperty;
}

export function wafv2_WebAclCaptchaConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "immunityTimeProperty",
      "Defines custom immunity time. See `immunity_time_property` below for details.",
      wafv2_WebAclCaptchaConfigImmunityTimeProperty_GetTypes(),
      false,
      false,
    ),
  ];
}
