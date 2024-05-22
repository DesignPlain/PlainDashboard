import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cfg_RuleSourceCustomPolicyDetails {
  // The boolean expression for enabling debug logging for your Config Custom Policy rule. The default value is `false`.
  enableDebugLogDelivery?: boolean;

  // The runtime system for your Config Custom Policy rule. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://github.com/aws-cloudformation/cloudformation-guard).
  policyRuntime?: string;

  // The policy definition containing the logic for your Config Custom Policy rule.
  policyText?: string;
}

export function cfg_RuleSourceCustomPolicyDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableDebugLogDelivery",
      "The boolean expression for enabling debug logging for your Config Custom Policy rule. The default value is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "policyRuntime",
      "The runtime system for your Config Custom Policy rule. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://github.com/aws-cloudformation/cloudformation-guard).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "policyText",
      "The policy definition containing the logic for your Config Custom Policy rule.",
      [],
      true,
      false,
    ),
  ];
}
