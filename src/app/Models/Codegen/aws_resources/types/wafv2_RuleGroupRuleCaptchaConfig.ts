import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleCaptchaConfigImmunityTimeProperty,
  wafv2_RuleGroupRuleCaptchaConfigImmunityTimeProperty_GetTypes,
} from "./wafv2_RuleGroupRuleCaptchaConfigImmunityTimeProperty";

export interface wafv2_RuleGroupRuleCaptchaConfig {
  // Defines custom immunity time. See Immunity Time Property below for details.
  immunityTimeProperty?: wafv2_RuleGroupRuleCaptchaConfigImmunityTimeProperty;
}

export function wafv2_RuleGroupRuleCaptchaConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "immunityTimeProperty",
      "Defines custom immunity time. See Immunity Time Property below for details.",
      wafv2_RuleGroupRuleCaptchaConfigImmunityTimeProperty_GetTypes(),
      false,
      false,
    ),
  ];
}
