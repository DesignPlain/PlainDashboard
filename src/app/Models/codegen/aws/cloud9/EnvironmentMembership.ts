import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface EnvironmentMembershipArgs {
  // The ID of the environment that contains the environment member you want to add.
  environmentId?: string;

  // The type of environment member permissions you want to associate with this environment member. Allowed values are `read-only` and `read-write` .
  permissions?: string;

  // The Amazon Resource Name (ARN) of the environment member you want to add.
  userArn?: string;
}
export class EnvironmentMembership extends DS_Resource {
  // The ID of the environment that contains the environment member you want to add.
  public environmentId?: string;

  // The type of environment member permissions you want to associate with this environment member. Allowed values are `read-only` and `read-write` .
  public permissions?: string;

  // The Amazon Resource Name (ARN) of the environment member you want to add.
  public userArn?: string;

  // The user ID in AWS Identity and Access Management (AWS IAM) of the environment member.
  public userId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'environmentId',
        'The ID of the environment that contains the environment member you want to add.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'permissions',
        'The type of environment member permissions you want to associate with this environment member. Allowed values are `read-only` and `read-write` .',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'userArn',
        'The Amazon Resource Name (ARN) of the environment member you want to add.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
