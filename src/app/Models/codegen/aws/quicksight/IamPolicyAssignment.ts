import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_IamPolicyAssignmentIdentities,
  quicksight_IamPolicyAssignmentIdentities_GetTypes,
} from "../types/quicksight_IamPolicyAssignmentIdentities";

export interface IamPolicyAssignmentArgs {
  // Name of the assignment.
  assignmentName?: string;

  /*
Status of the assignment. Valid values are `ENABLED`, `DISABLED`, and `DRAFT`.

The following arguments are optional:
*/
  assignmentStatus?: string;

  // AWS account ID.
  awsAccountId?: string;

  // Amazon QuickSight users, groups, or both to assign the policy to. See `identities` block.
  identities?: quicksight_IamPolicyAssignmentIdentities;

  // Namespace that contains the assignment. Defaults to `default`.
  namespace?: string;

  // ARN of the IAM policy to apply to the Amazon QuickSight users and groups specified in this assignment.
  policyArn?: string;
}
export class IamPolicyAssignment extends DS_Resource {
  // Assignment ID.
  public assignmentId?: string;

  // Name of the assignment.
  public assignmentName?: string;

  /*
Status of the assignment. Valid values are `ENABLED`, `DISABLED`, and `DRAFT`.

The following arguments are optional:
*/
  public assignmentStatus?: string;

  // AWS account ID.
  public awsAccountId?: string;

  // Amazon QuickSight users, groups, or both to assign the policy to. See `identities` block.
  public identities?: quicksight_IamPolicyAssignmentIdentities;

  // Namespace that contains the assignment. Defaults to `default`.
  public namespace?: string;

  // ARN of the IAM policy to apply to the Amazon QuickSight users and groups specified in this assignment.
  public policyArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policyArn",
        "ARN of the IAM policy to apply to the Amazon QuickSight users and groups specified in this assignment.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "assignmentName",
        "Name of the assignment.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "assignmentStatus",
        "Status of the assignment. Valid values are `ENABLED`, `DISABLED`, and `DRAFT`.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "AWS account ID.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "identities",
        "Amazon QuickSight users, groups, or both to assign the policy to. See `identities` block.",
        () => quicksight_IamPolicyAssignmentIdentities_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "namespace",
        "Namespace that contains the assignment. Defaults to `default`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
