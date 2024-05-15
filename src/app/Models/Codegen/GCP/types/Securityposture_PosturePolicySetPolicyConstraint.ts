import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint,
  Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint_GetTypes,
} from "./Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint";
import {
  Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom,
  Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom_GetTypes,
} from "./Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom";
import {
  Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule,
  Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule_GetTypes,
} from "./Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule";
import {
  Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule,
  Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule_GetTypes,
} from "./Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule";

export interface Securityposture_PosturePolicySetPolicyConstraint {
  /*
Organization policy canned constraint definition.
Structure is documented below.
*/
  OrgPolicyConstraint?: Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint;

  /*
Organization policy custom constraint policy definition.
Structure is documented below.
*/
  OrgPolicyConstraintCustom?: Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom;

  /*
Definition of Security Health Analytics Custom Module.
Structure is documented below.
*/
  SecurityHealthAnalyticsCustomModule?: Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule;

  /*
Security Health Analytics built-in detector definition.
Structure is documented below.
*/
  SecurityHealthAnalyticsModule?: Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule;
}

export function Securityposture_PosturePolicySetPolicyConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SecurityHealthAnalyticsCustomModule",
      "Definition of Security Health Analytics Custom Module.\nStructure is documented below.",
      Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SecurityHealthAnalyticsModule",
      "Security Health Analytics built-in detector definition.\nStructure is documented below.",
      Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "OrgPolicyConstraint",
      "Organization policy canned constraint definition.\nStructure is documented below.",
      Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "OrgPolicyConstraintCustom",
      "Organization policy custom constraint policy definition.\nStructure is documented below.",
      Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom_GetTypes(),
      false,
      false,
    ),
  ];
}
