import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface GroupArgs {
  // The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
  awsAccountId?: string;

  // A description for the group.
  description?: string;

  // A name for the group.
  groupName?: string;

  // The namespace. Currently, you should set this to `default`.
  namespace?: string;
}
export class Group extends Resource {
  // Amazon Resource Name (ARN) of group
  public arn?: string;

  // The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
  public awsAccountId?: string;

  // A description for the group.
  public description?: string;

  // A name for the group.
  public groupName?: string;

  // The namespace. Currently, you should set this to `default`.
  public namespace?: string;

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
        "description",
        "A description for the group.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "groupName",
        "A name for the group.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namespace",
        "The namespace. Currently, you should set this to `default`.",
        [],
        false,
        true,
      ),
    ];
  }
}
