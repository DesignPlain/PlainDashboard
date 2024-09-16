import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface UserPolicyArgs {
  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  // The policy document. This is a JSON formatted string.
  policy?: string;

  // IAM user to which to attach this policy.
  user?: string;

  // The name of the policy. If omitted, the provider will assign a random, unique name.
  name?: string;
}
export class UserPolicy extends DS_Resource {
  // The name of the policy. If omitted, the provider will assign a random, unique name.
  public name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // The policy document. This is a JSON formatted string.
  public policy?: string;

  // IAM user to which to attach this policy.
  public user?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'namePrefix',
        'Creates a unique name beginning with the specified prefix. Conflicts with `name`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'policy',
        'The policy document. This is a JSON formatted string.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'user',
        'IAM user to which to attach this policy.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the policy. If omitted, the provider will assign a random, unique name.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
