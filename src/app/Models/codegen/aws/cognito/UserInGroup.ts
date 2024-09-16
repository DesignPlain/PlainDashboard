import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface UserInGroupArgs {
  // The name of the group to which the user is to be added.
  groupName?: string;

  // The user pool ID of the user and group.
  userPoolId?: string;

  // The username of the user to be added to the group.
  username?: string;
}
export class UserInGroup extends DS_Resource {
  // The name of the group to which the user is to be added.
  public groupName?: string;

  // The user pool ID of the user and group.
  public userPoolId?: string;

  // The username of the user to be added to the group.
  public username?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'groupName',
        'The name of the group to which the user is to be added.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'userPoolId',
        'The user pool ID of the user and group.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'username',
        'The username of the user to be added to the group.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
