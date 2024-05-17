import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securityposture_PosturePolicySetPolicyComplianceStandard,
  Securityposture_PosturePolicySetPolicyComplianceStandard_GetTypes,
} from "./Securityposture_PosturePolicySetPolicyComplianceStandard";
import {
  Securityposture_PosturePolicySetPolicyConstraint,
  Securityposture_PosturePolicySetPolicyConstraint_GetTypes,
} from "./Securityposture_PosturePolicySetPolicyConstraint";

export interface Securityposture_PosturePolicySetPolicy {
  // ID of the policy.
  PolicyId?: string;

  /*
Mapping for policy to security standards and controls.
Structure is documented below.
*/
  ComplianceStandards?: Array<Securityposture_PosturePolicySetPolicyComplianceStandard>;

  /*
Policy constraint definition.It can have the definition of one of following constraints: orgPolicyConstraint orgPolicyConstraintCustom securityHealthAnalyticsModule securityHealthAnalyticsCustomModule
Structure is documented below.
*/
  Constraint?: Securityposture_PosturePolicySetPolicyConstraint;

  // Description of the policy.
  Description?: string;
}

export function Securityposture_PosturePolicySetPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ComplianceStandards",
      "Mapping for policy to security standards and controls.\nStructure is documented below.",
      Securityposture_PosturePolicySetPolicyComplianceStandard_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Constraint",
      "Policy constraint definition.It can have the definition of one of following constraints: orgPolicyConstraint orgPolicyConstraintCustom securityHealthAnalyticsModule securityHealthAnalyticsCustomModule\nStructure is documented below.",
      Securityposture_PosturePolicySetPolicyConstraint_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "Description of the policy.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PolicyId",
      "ID of the policy.",
      [],
      true,
      false,
    ),
  ];
}
