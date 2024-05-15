import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfig,
  Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfig_GetTypes,
} from "./Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfig";

export interface Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule {
  /*
Custom module details.
Structure is documented below.
*/
  Config?: Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfig;

  /*
The display name of the Security Health Analytics custom module. This
display name becomes the finding category for all findings that are
returned by this custom module.
*/
  DisplayName?: string;

  /*
(Output)
A server generated id of custom module.
*/
  Id?: string;

  /*
The state of enablement for the module at its level of the resource hierarchy.
Possible values are: `ENABLEMENT_STATE_UNSPECIFIED`, `ENABLED`, `DISABLED`.
*/
  ModuleEnablementState?: string;
}

export function Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Config",
      "Custom module details.\nStructure is documented below.",
      Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "The display name of the Security Health Analytics custom module. This\ndisplay name becomes the finding category for all findings that are\nreturned by this custom module.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Id",
      "(Output)\nA server generated id of custom module.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ModuleEnablementState",
      "The state of enablement for the module at its level of the resource hierarchy.\nPossible values are: `ENABLEMENT_STATE_UNSPECIFIED`, `ENABLED`, `DISABLED`.",
      [],
      false,
      false,
    ),
  ];
}
