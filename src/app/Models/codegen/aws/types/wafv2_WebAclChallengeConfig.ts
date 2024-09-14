import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclChallengeConfigImmunityTimeProperty,
  wafv2_WebAclChallengeConfigImmunityTimeProperty_GetTypes,
} from "./wafv2_WebAclChallengeConfigImmunityTimeProperty";

export interface wafv2_WebAclChallengeConfig {
  // Defines custom immunity time. See `immunity_time_property` below for details.
  immunityTimeProperty?: wafv2_WebAclChallengeConfigImmunityTimeProperty;
}

export function wafv2_WebAclChallengeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "immunityTimeProperty",
      "Defines custom immunity time. See `immunity_time_property` below for details.",
      () => wafv2_WebAclChallengeConfigImmunityTimeProperty_GetTypes(),
      false,
      false,
    ),
  ];
}
