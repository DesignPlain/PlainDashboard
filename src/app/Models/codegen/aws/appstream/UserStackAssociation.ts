import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface UserStackAssociationArgs {
  /*
Email address of the user who is associated with the stack.

The following arguments are optional:
*/
  userName?: string;

  // Authentication type for the user.
  authenticationType?: string;

  // Whether a welcome email is sent to a user after the user is created in the user pool.
  sendEmailNotification?: boolean;

  // Name of the stack that is associated with the user.
  stackName?: string;
}
export class UserStackAssociation extends DS_Resource {
  // Whether a welcome email is sent to a user after the user is created in the user pool.
  public sendEmailNotification?: boolean;

  // Name of the stack that is associated with the user.
  public stackName?: string;

  /*
Email address of the user who is associated with the stack.

The following arguments are optional:
*/
  public userName?: string;

  // Authentication type for the user.
  public authenticationType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'userName',
        'Email address of the user who is associated with the stack.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'authenticationType',
        'Authentication type for the user.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'sendEmailNotification',
        'Whether a welcome email is sent to a user after the user is created in the user pool.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'stackName',
        'Name of the stack that is associated with the user.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
