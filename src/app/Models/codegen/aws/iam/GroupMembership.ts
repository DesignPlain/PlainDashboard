import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface GroupMembershipArgs {
  // The IAM Group name to attach the list of `users` to
  group?: string;

  // The name to identify the Group Membership
  name?: string;

  // A list of IAM User names to associate with the Group
  users?: Array<string>;
}
export class GroupMembership extends DS_Resource {
  // The name to identify the Group Membership
  public name?: string;

  // A list of IAM User names to associate with the Group
  public users?: Array<string>;

  // The IAM Group name to attach the list of `users` to
  public group?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'users',
        'A list of IAM User names to associate with the Group',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'group',
        'The IAM Group name to attach the list of `users` to',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name to identify the Group Membership',
        () => [],
        false,
        true,
      ),
    ];
  }
}
