import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleValues,
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleValues_GetTypes,
} from "./securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleValues";
import {
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleCondition,
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleCondition_GetTypes,
} from "./securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleCondition";

export interface securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule {
  /*
List of values to be used for this policy rule. This field can be set only in policies for list constraints.
Structure is documented below.
*/
  values?: securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleValues;

  // Setting this to true means that all values are allowed. This field can be set only in policies for list constraints.
  allowAll?: boolean;

  /*
Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language.
This page details the objects and attributes that are used to the build the CEL expressions for
custom access levels - https://cloud.google.com/access-context-manager/docs/custom-access-level-spec.
Structure is documented below.
*/
  condition?: securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleCondition;

  // Setting this to true means that all values are denied. This field can be set only in policies for list constraints.
  denyAll?: boolean;

  /*
If `true`, then the policy is enforced. If `false`, then any configuration is acceptable.
This field can be set only in policies for boolean constraints.
*/
  enforce?: boolean;
}

export function securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowAll",
      "Setting this to true means that all values are allowed. This field can be set only in policies for list constraints.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "condition",
      "Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language.\nThis page details the objects and attributes that are used to the build the CEL expressions for\ncustom access levels - https://cloud.google.com/access-context-manager/docs/custom-access-level-spec.\nStructure is documented below.",
      securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "denyAll",
      "Setting this to true means that all values are denied. This field can be set only in policies for list constraints.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enforce",
      "If `true`, then the policy is enforced. If `false`, then any configuration is acceptable.\nThis field can be set only in policies for boolean constraints.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "values",
      "List of values to be used for this policy rule. This field can be set only in policies for list constraints.\nStructure is documented below.",
      securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustomPolicyRuleValues_GetTypes(),
      false,
      false,
    ),
  ];
}
