import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface UserGroupAssociationArgs {
  // ID of the user group.
  userGroupId?: string;

  // ID of the user to associated with the user group.
  userId?: string;
}
export class UserGroupAssociation extends DS_Resource {
  // ID of the user group.
  public userGroupId?: string;

  // ID of the user to associated with the user group.
  public userId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'userGroupId',
        'ID of the user group.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'userId',
        'ID of the user to associated with the user group.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
