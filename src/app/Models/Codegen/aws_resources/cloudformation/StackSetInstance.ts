import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudformation_StackSetInstanceDeploymentTargets,
  cloudformation_StackSetInstanceDeploymentTargets_GetTypes,
} from "../types/cloudformation_StackSetInstanceDeploymentTargets";
import {
  cloudformation_StackSetInstanceOperationPreferences,
  cloudformation_StackSetInstanceOperationPreferences_GetTypes,
} from "../types/cloudformation_StackSetInstanceOperationPreferences";
import {
  cloudformation_StackSetInstanceStackInstanceSummary,
  cloudformation_StackSetInstanceStackInstanceSummary_GetTypes,
} from "../types/cloudformation_StackSetInstanceStackInstanceSummary";

export interface StackSetInstanceArgs {
  // Target AWS Region to create a Stack based on the StackSet. Defaults to current region.
  region?: string;

  // During resource destroy, remove Instance from StackSet while keeping the Stack and its associated resources. Must be enabled in the state _before_ destroy operation to take effect. You cannot reassociate a retained Stack or add an existing, saved Stack to a new StackSet. Defaults to `false`.
  retainStack?: boolean;

  // Name of the StackSet.
  stackSetName?: string;

  // Target AWS Account ID to create a Stack based on the StackSet. Defaults to current account.
  accountId?: string;

  // Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. Valid values: `SELF` (default), `DELEGATED_ADMIN`.
  callAs?: string;

  // The AWS Organizations accounts to which StackSets deploys. StackSets doesn't deploy stack instances to the organization management account, even if the organization management account is in your organization or in an OU in your organization. Drift detection is not possible for this argument. See deployment_targets below.
  deploymentTargets?: cloudformation_StackSetInstanceDeploymentTargets;

  // Preferences for how AWS CloudFormation performs a stack set operation.
  operationPreferences?: cloudformation_StackSetInstanceOperationPreferences;

  // Key-value map of input parameters to override from the StackSet for this Instance.
  parameterOverrides?: Map<string, string>;
}
export class StackSetInstance extends Resource {
  // Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. Valid values: `SELF` (default), `DELEGATED_ADMIN`.
  public callAs?: string;

  // The AWS Organizations accounts to which StackSets deploys. StackSets doesn't deploy stack instances to the organization management account, even if the organization management account is in your organization or in an OU in your organization. Drift detection is not possible for this argument. See deployment_targets below.
  public deploymentTargets?: cloudformation_StackSetInstanceDeploymentTargets;

  // Organizational unit ID in which the stack is deployed.
  public organizationalUnitId?: string;

  // Key-value map of input parameters to override from the StackSet for this Instance.
  public parameterOverrides?: Map<string, string>;

  // Target AWS Region to create a Stack based on the StackSet. Defaults to current region.
  public region?: string;

  // During resource destroy, remove Instance from StackSet while keeping the Stack and its associated resources. Must be enabled in the state _before_ destroy operation to take effect. You cannot reassociate a retained Stack or add an existing, saved Stack to a new StackSet. Defaults to `false`.
  public retainStack?: boolean;

  // Name of the StackSet.
  public stackSetName?: string;

  // Target AWS Account ID to create a Stack based on the StackSet. Defaults to current account.
  public accountId?: string;

  // Preferences for how AWS CloudFormation performs a stack set operation.
  public operationPreferences?: cloudformation_StackSetInstanceOperationPreferences;

  // Stack identifier.
  public stackId?: string;

  // List of stack instances created from an organizational unit deployment target. This will only be populated when `deployment_targets` is set. See `stack_instance_summaries`.
  public stackInstanceSummaries?: Array<cloudformation_StackSetInstanceStackInstanceSummary>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "operationPreferences",
        "Preferences for how AWS CloudFormation performs a stack set operation.",
        cloudformation_StackSetInstanceOperationPreferences_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "parameterOverrides",
        "Key-value map of input parameters to override from the StackSet for this Instance.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "Target AWS Region to create a Stack based on the StackSet. Defaults to current region.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "retainStack",
        "During resource destroy, remove Instance from StackSet while keeping the Stack and its associated resources. Must be enabled in the state _before_ destroy operation to take effect. You cannot reassociate a retained Stack or add an existing, saved Stack to a new StackSet. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "stackSetName",
        "Name of the StackSet.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "Target AWS Account ID to create a Stack based on the StackSet. Defaults to current account.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "callAs",
        "Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. Valid values: `SELF` (default), `DELEGATED_ADMIN`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "deploymentTargets",
        "The AWS Organizations accounts to which StackSets deploys. StackSets doesn't deploy stack instances to the organization management account, even if the organization management account is in your organization or in an OU in your organization. Drift detection is not possible for this argument. See deployment_targets below.",
        cloudformation_StackSetInstanceDeploymentTargets_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
