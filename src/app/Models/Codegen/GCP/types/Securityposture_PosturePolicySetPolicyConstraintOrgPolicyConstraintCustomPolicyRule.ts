import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleCondition,
  Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleCondition_GetTypes,
} from "./Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleCondition";
import {
  Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleValues,
  Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleValues_GetTypes,
} from "./Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleValues";

export interface Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule {
  /*
If `true`, then the policy is enforced. If `false`, then any configuration is acceptable.
This field can be set only in policies for boolean constraints.
*/
  Enforce?: boolean;

  /*
List of values to be used for this policy rule. This field can be set only in policies for list constraints.
Structure is documented below.
*/
  Values?: Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleValues;

  // Setting this to true means that all values are allowed. This field can be set only in policies for list constraints.
  AllowAll?: boolean;

  /*
Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language.
This page details the objects and attributes that are used to the build the CEL expressions for
custom access levels - https://cloud.google.com/access-context-manager/docs/custom-access-level-spec.
Structure is documented below.
*/
  Condition?: Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleCondition;

  // Setting this to true means that all values are denied. This field can be set only in policies for list constraints.
  DenyAll?: boolean;
}

export function Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AllowAll",
      "Setting this to true means that all values are allowed. This field can be set only in policies for list constraints.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Condition",
      "Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language.\nThis page details the objects and attributes that are used to the build the CEL expressions for\ncustom access levels - https://cloud.google.com/access-context-manager/docs/custom-access-level-spec.\nStructure is documented below.",
      Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DenyAll",
      "Setting this to true means that all values are denied. This field can be set only in policies for list constraints.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enforce",
      "If `true`, then the policy is enforced. If `false`, then any configuration is acceptable.\nThis field can be set only in policies for boolean constraints.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Values",
      "List of values to be used for this policy rule. This field can be set only in policies for list constraints.\nStructure is documented below.",
      Securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleValues_GetTypes(),
      false,
      false,
    ),
  ];
}
