import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface GroupArgs {
  // A name for the group.
  groupName?: string;

  // The namespace. Currently, you should set this to `default`.
  namespace?: string;

  // The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
  awsAccountId?: string;

  // A description for the group.
  description?: string;
}
export class Group extends DS_Resource {
  // A name for the group.
  public groupName?: string;

  // The namespace. Currently, you should set this to `default`.
  public namespace?: string;

  // Amazon Resource Name (ARN) of group
  public arn?: string;

  // The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
  public awsAccountId?: string;

  // A description for the group.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'groupName',
        'A name for the group.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'namespace',
        'The namespace. Currently, you should set this to `default`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'awsAccountId',
        'The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description for the group.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
