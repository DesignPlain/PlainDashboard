import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface LogAccountPolicyArgs {
  // Text of the account policy. Refer to the [AWS docs](https://docs.aws.amazon.com/cli/latest/reference/logs/put-account-policy.html) for more information.
  policyDocument?: string;

  // Name of the account policy.
  policyName?: string;

  // Type of account policy. Either `DATA_PROTECTION_POLICY` or `SUBSCRIPTION_FILTER_POLICY`. You can have one account policy per type in an account.
  policyType?: string;

  // Currently defaults to and only accepts the value: `ALL`.
  scope?: string;

  // Criteria for applying a subscription filter policy to a selection of log groups. The only allowable criteria selector is `LogGroupName NOT IN []`.
  selectionCriteria?: string;
}
export class LogAccountPolicy extends DS_Resource {
  // Text of the account policy. Refer to the [AWS docs](https://docs.aws.amazon.com/cli/latest/reference/logs/put-account-policy.html) for more information.
  public policyDocument?: string;

  // Name of the account policy.
  public policyName?: string;

  // Type of account policy. Either `DATA_PROTECTION_POLICY` or `SUBSCRIPTION_FILTER_POLICY`. You can have one account policy per type in an account.
  public policyType?: string;

  // Currently defaults to and only accepts the value: `ALL`.
  public scope?: string;

  // Criteria for applying a subscription filter policy to a selection of log groups. The only allowable criteria selector is `LogGroupName NOT IN []`.
  public selectionCriteria?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policyDocument",
        "Text of the account policy. Refer to the [AWS docs](https://docs.aws.amazon.com/cli/latest/reference/logs/put-account-policy.html) for more information.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyName",
        "Name of the account policy.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyType",
        "Type of account policy. Either `DATA_PROTECTION_POLICY` or `SUBSCRIPTION_FILTER_POLICY`. You can have one account policy per type in an account.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "scope",
        "Currently defaults to and only accepts the value: `ALL`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "selectionCriteria",
        "Criteria for applying a subscription filter policy to a selection of log groups. The only allowable criteria selector is `LogGroupName NOT IN []`.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
