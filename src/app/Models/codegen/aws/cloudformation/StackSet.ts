import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudformation_StackSetAutoDeployment,
  cloudformation_StackSetAutoDeployment_GetTypes,
} from "../types/cloudformation_StackSetAutoDeployment";
import {
  cloudformation_StackSetOperationPreferences,
  cloudformation_StackSetOperationPreferences_GetTypes,
} from "../types/cloudformation_StackSetOperationPreferences";
import {
  cloudformation_StackSetManagedExecution,
  cloudformation_StackSetManagedExecution_GetTypes,
} from "../types/cloudformation_StackSetManagedExecution";

export interface StackSetArgs {
  // Configuration block containing the auto-deployment model for your StackSet. This can only be defined when using the `SERVICE_MANAGED` permission model.
  autoDeployment?: cloudformation_StackSetAutoDeployment;

  // Describes how the IAM roles required for your StackSet are created. Valid values: `SELF_MANAGED` (default), `SERVICE_MANAGED`.
  permissionModel?: string;

  // String containing the location of a file containing the CloudFormation template body. The URL must point to a template that is located in an Amazon S3 bucket. Maximum location file size: 460,800 bytes. Conflicts with `template_body`.
  templateUrl?: string;

  // Preferences for how AWS CloudFormation performs a stack set update.
  operationPreferences?: cloudformation_StackSetOperationPreferences;

  // Key-value map of input parameters for the StackSet template. All template parameters, including those with a `Default`, must be configured or ignored with `lifecycle` configuration block `ignore_changes` argument. All `NoEcho` template parameters must be ignored with the `lifecycle` configuration block `ignore_changes` argument.
  parameters?: Map<string, string>;

  // Key-value map of tags to associate with this StackSet and the Stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the Stacks. A maximum number of 50 tags can be specified. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Amazon Resource Number (ARN) of the IAM Role in the administrator account. This must be defined when using the `SELF_MANAGED` permission model.
  administrationRoleArn?: string;

  // Name of the IAM Role in all target accounts for StackSet operations. Defaults to `AWSCloudFormationStackSetExecutionRole` when using the `SELF_MANAGED` permission model. This should not be defined when using the `SERVICE_MANAGED` permission model.
  executionRoleName?: string;

  // Configuration block to allow StackSets to perform non-conflicting operations concurrently and queues conflicting operations.
  managedExecution?: cloudformation_StackSetManagedExecution;

  // Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. Valid values: `SELF` (default), `DELEGATED_ADMIN`.
  callAs?: string;

  // A list of capabilities. Valid values: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`.
  capabilities?: Array<string>;

  // Description of the StackSet.
  description?: string;

  // Name of the StackSet. The name must be unique in the region where you create your StackSet. The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters.
  name?: string;

  // String containing the CloudFormation template body. Maximum size: 51,200 bytes. Conflicts with `template_url`.
  templateBody?: string;
}
export class StackSet extends DS_Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Number (ARN) of the IAM Role in the administrator account. This must be defined when using the `SELF_MANAGED` permission model.
  public administrationRoleArn?: string;

  // Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. Valid values: `SELF` (default), `DELEGATED_ADMIN`.
  public callAs?: string;

  // Description of the StackSet.
  public description?: string;

  // Name of the StackSet. The name must be unique in the region where you create your StackSet. The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters.
  public name?: string;

  // Key-value map of input parameters for the StackSet template. All template parameters, including those with a `Default`, must be configured or ignored with `lifecycle` configuration block `ignore_changes` argument. All `NoEcho` template parameters must be ignored with the `lifecycle` configuration block `ignore_changes` argument.
  public parameters?: Map<string, string>;

  // A list of capabilities. Valid values: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`.
  public capabilities?: Array<string>;

  // Configuration block to allow StackSets to perform non-conflicting operations concurrently and queues conflicting operations.
  public managedExecution?: cloudformation_StackSetManagedExecution;

  // Preferences for how AWS CloudFormation performs a stack set update.
  public operationPreferences?: cloudformation_StackSetOperationPreferences;

  // Describes how the IAM roles required for your StackSet are created. Valid values: `SELF_MANAGED` (default), `SERVICE_MANAGED`.
  public permissionModel?: string;

  // String containing the location of a file containing the CloudFormation template body. The URL must point to a template that is located in an Amazon S3 bucket. Maximum location file size: 460,800 bytes. Conflicts with `template_body`.
  public templateUrl?: string;

  // Unique identifier of the StackSet.
  public stackSetId?: string;

  // Key-value map of tags to associate with this StackSet and the Stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the Stacks. A maximum number of 50 tags can be specified. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of the StackSet.
  public arn?: string;

  // Configuration block containing the auto-deployment model for your StackSet. This can only be defined when using the `SERVICE_MANAGED` permission model.
  public autoDeployment?: cloudformation_StackSetAutoDeployment;

  // Name of the IAM Role in all target accounts for StackSet operations. Defaults to `AWSCloudFormationStackSetExecutionRole` when using the `SELF_MANAGED` permission model. This should not be defined when using the `SERVICE_MANAGED` permission model.
  public executionRoleName?: string;

  // String containing the CloudFormation template body. Maximum size: 51,200 bytes. Conflicts with `template_url`.
  public templateBody?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "permissionModel",
        "Describes how the IAM roles required for your StackSet are created. Valid values: `SELF_MANAGED` (default), `SERVICE_MANAGED`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "parameters",
        "Key-value map of input parameters for the StackSet template. All template parameters, including those with a `Default`, must be configured or ignored with `lifecycle` configuration block `ignore_changes` argument. All `NoEcho` template parameters must be ignored with the `lifecycle` configuration block `ignore_changes` argument.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "executionRoleName",
        "Name of the IAM Role in all target accounts for StackSet operations. Defaults to `AWSCloudFormationStackSetExecutionRole` when using the `SELF_MANAGED` permission model. This should not be defined when using the `SERVICE_MANAGED` permission model.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "managedExecution",
        "Configuration block to allow StackSets to perform non-conflicting operations concurrently and queues conflicting operations.",
        () => cloudformation_StackSetManagedExecution_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "autoDeployment",
        "Configuration block containing the auto-deployment model for your StackSet. This can only be defined when using the `SERVICE_MANAGED` permission model.",
        () => cloudformation_StackSetAutoDeployment_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "callAs",
        "Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. Valid values: `SELF` (default), `DELEGATED_ADMIN`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "capabilities",
        "A list of capabilities. Valid values: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "templateBody",
        "String containing the CloudFormation template body. Maximum size: 51,200 bytes. Conflicts with `template_url`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "templateUrl",
        "String containing the location of a file containing the CloudFormation template body. The URL must point to a template that is located in an Amazon S3 bucket. Maximum location file size: 460,800 bytes. Conflicts with `template_body`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "operationPreferences",
        "Preferences for how AWS CloudFormation performs a stack set update.",
        () => cloudformation_StackSetOperationPreferences_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of tags to associate with this StackSet and the Stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the Stacks. A maximum number of 50 tags can be specified. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "administrationRoleArn",
        "Amazon Resource Number (ARN) of the IAM Role in the administrator account. This must be defined when using the `SELF_MANAGED` permission model.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the StackSet.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the StackSet. The name must be unique in the region where you create your StackSet. The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
