import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GroupMembershipArgs {
  // The namespace that you want the user to be a part of. Defaults to `default`.
  namespace?: string;

  // The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
  awsAccountId?: string;

  // The name of the group in which the member will be added.
  groupName?: string;

  // The name of the member to add to the group.
  memberName?: string;
}
export class GroupMembership extends Resource {
  // The namespace that you want the user to be a part of. Defaults to `default`.
  public namespace?: string;

  //
  public arn?: string;

  // The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
  public awsAccountId?: string;

  // The name of the group in which the member will be added.
  public groupName?: string;

  // The name of the member to add to the group.
  public memberName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "groupName",
        "The name of the group in which the member will be added.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "memberName",
        "The name of the member to add to the group.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namespace",
        "The namespace that you want the user to be a part of. Defaults to `default`.",
        [],
        false,
        true,
      ),
    ];
  }
}
