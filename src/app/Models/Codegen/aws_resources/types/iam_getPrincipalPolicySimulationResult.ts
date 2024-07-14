import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  iam_getPrincipalPolicySimulationResultMatchedStatement,
  iam_getPrincipalPolicySimulationResultMatchedStatement_GetTypes,
} from "./iam_getPrincipalPolicySimulationResultMatchedStatement";

export interface iam_getPrincipalPolicySimulationResult {
  // A map of arbitrary metadata entries returned by the policy simulator for this request.
  decisionDetails?: Map<string, string>;

  // A nested set of objects describing which policies contained statements that were relevant to this simulation request. Each object has attributes `source_policy_id` and `source_policy_type` to identify one of the policies.
  matchedStatements?: Array<iam_getPrincipalPolicySimulationResultMatchedStatement>;

  // A set of context keys (or condition keys) that were needed by some of the policies contributing to this result but not specified using a `context` block in the configuration. Missing or incorrect context keys will typically cause a simulated request to be disallowed.
  missingContextKeys?: Array<string>;

  // ARN of the resource that was used for this particular request. When you specify multiple actions and multiple resource ARNs, that causes a separate policy request for each combination of unique action and resource.
  resourceArn?: string;

  // The name of the single IAM action used for this particular request.
  actionName?: string;

  // `true` if `decision` is "allowed", and `false` otherwise.
  allowed?: boolean;

  // The raw decision determined from all of the policies in scope; either "allowed", "explicitDeny", or "implicitDeny".
  decision?: string;
}

export function iam_getPrincipalPolicySimulationResult_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "decision",
      'The raw decision determined from all of the policies in scope; either "allowed", "explicitDeny", or "implicitDeny".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "decisionDetails",
      "A map of arbitrary metadata entries returned by the policy simulator for this request.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "matchedStatements",
      "A nested set of objects describing which policies contained statements that were relevant to this simulation request. Each object has attributes `source_policy_id` and `source_policy_type` to identify one of the policies.",
      iam_getPrincipalPolicySimulationResultMatchedStatement_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "missingContextKeys",
      "A set of context keys (or condition keys) that were needed by some of the policies contributing to this result but not specified using a `context` block in the configuration. Missing or incorrect context keys will typically cause a simulated request to be disallowed.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceArn",
      "ARN of the resource that was used for this particular request. When you specify multiple actions and multiple resource ARNs, that causes a separate policy request for each combination of unique action and resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "actionName",
      "The name of the single IAM action used for this particular request.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowed",
      '`true` if `decision` is "allowed", and `false` otherwise.',
      [],
      true,
      false,
    ),
  ];
}
