import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface StackArgs {
  /*
A list of capabilities.
Valid values: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, or `CAPABILITY_AUTO_EXPAND`
*/
  capabilities?: Array<string>;

  // Stack name.
  name?: string;

  // A list of SNS topic ARNs to publish stack related events.
  notificationArns?: Array<string>;

  /*
Action to be taken if stack creation fails. This must be
one of: `DO_NOTHING`, `ROLLBACK`, or `DELETE`. Conflicts with `disable_rollback`.
*/
  onFailure?: string;

  /*
Set to true to disable rollback of the stack if stack creation failed.
Conflicts with `on_failure`.
*/
  disableRollback?: boolean;

  // The ARN of an IAM role that AWS CloudFormation assumes to create the stack. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.
  iamRoleArn?: string;

  // A map of Parameter structures that specify input parameters for the stack.
  parameters?: Map<string, string>;

  /*
Structure containing the stack policy body.
Conflicts w/ `policy_url`.
*/
  policyBody?: string;

  /*
Location of a file containing the stack policy.
Conflicts w/ `policy_body`.
*/
  policyUrl?: string;

  // Map of resource tags to associate with this stack. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Structure containing the template body (max size: 51,200 bytes).
  templateBody?: string;

  // Location of a file containing the template body (max size: 460,800 bytes).
  templateUrl?: string;

  // The amount of time that can pass before the stack status becomes `CREATE_FAILED`.
  timeoutInMinutes?: number;
}
export class Stack extends Resource {
  // The ARN of an IAM role that AWS CloudFormation assumes to create the stack. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.
  public iamRoleArn?: string;

  // Stack name.
  public name?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
Set to true to disable rollback of the stack if stack creation failed.
Conflicts with `on_failure`.
*/
  public disableRollback?: boolean;

  // A list of SNS topic ARNs to publish stack related events.
  public notificationArns?: Array<string>;

  // A map of Parameter structures that specify input parameters for the stack.
  public parameters?: Map<string, string>;

  /*
Location of a file containing the stack policy.
Conflicts w/ `policy_body`.
*/
  public policyUrl?: string;

  // The amount of time that can pass before the stack status becomes `CREATE_FAILED`.
  public timeoutInMinutes?: number;

  /*
A list of capabilities.
Valid values: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, or `CAPABILITY_AUTO_EXPAND`
*/
  public capabilities?: Array<string>;

  /*
Action to be taken if stack creation fails. This must be
one of: `DO_NOTHING`, `ROLLBACK`, or `DELETE`. Conflicts with `disable_rollback`.
*/
  public onFailure?: string;

  /*
Structure containing the stack policy body.
Conflicts w/ `policy_url`.
*/
  public policyBody?: string;

  // Map of resource tags to associate with this stack. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Structure containing the template body (max size: 51,200 bytes).
  public templateBody?: string;

  // A map of outputs from the stack.
  public outputs?: Map<string, string>;

  // Location of a file containing the template body (max size: 460,800 bytes).
  public templateUrl?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "templateBody",
        "Structure containing the template body (max size: 51,200 bytes).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "timeoutInMinutes",
        "The amount of time that can pass before the stack status becomes `CREATE_FAILED`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "capabilities",
        "A list of capabilities.\nValid values: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, or `CAPABILITY_AUTO_EXPAND`",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "onFailure",
        "Action to be taken if stack creation fails. This must be\none of: `DO_NOTHING`, `ROLLBACK`, or `DELETE`. Conflicts with `disable_rollback`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableRollback",
        "Set to true to disable rollback of the stack if stack creation failed.\nConflicts with `on_failure`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "parameters",
        "A map of Parameter structures that specify input parameters for the stack.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyBody",
        "Structure containing the stack policy body.\nConflicts w/ `policy_url`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyUrl",
        "Location of a file containing the stack policy.\nConflicts w/ `policy_body`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of resource tags to associate with this stack. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "templateUrl",
        "Location of a file containing the template body (max size: 460,800 bytes).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Stack name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "notificationArns",
        "A list of SNS topic ARNs to publish stack related events.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "iamRoleArn",
        "The ARN of an IAM role that AWS CloudFormation assumes to create the stack. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.",
        [],
        false,
        false,
      ),
    ];
  }
}
