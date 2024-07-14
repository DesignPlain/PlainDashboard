import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleCaptchaConfigImmunityTimeProperty,
  wafv2_WebAclRuleCaptchaConfigImmunityTimeProperty_GetTypes,
} from "./wafv2_WebAclRuleCaptchaConfigImmunityTimeProperty";

export interface wafv2_WebAclRuleCaptchaConfig {
  // Defines custom immunity time. See `immunity_time_property` below for details.
  immunityTimeProperty?: wafv2_WebAclRuleCaptchaConfigImmunityTimeProperty;
}

export function wafv2_WebAclRuleCaptchaConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "immunityTimeProperty",
      "Defines custom immunity time. See `immunity_time_property` below for details.",
      wafv2_WebAclRuleCaptchaConfigImmunityTimeProperty_GetTypes(),
      false,
      false,
    ),
  ];
}
