import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface RolePolicyArgs {
  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  namePrefix?: string;

  // The inline policy document. This is a JSON formatted string. For more information about building IAM policy documents with the provider, see the AWS IAM Policy Document Guide
  policy?: string;

  // The name of the IAM role to attach to the policy.
  role?: string;

  /*
The name of the role policy. If omitted, this provider will
assign a random, unique name.
*/
  name?: string;
}
export class RolePolicy extends DS_Resource {
  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  public namePrefix?: string;

  // The inline policy document. This is a JSON formatted string. For more information about building IAM policy documents with the provider, see the AWS IAM Policy Document Guide
  public policy?: string;

  // The name of the IAM role to attach to the policy.
  public role?: string;

  /*
The name of the role policy. If omitted, this provider will
assign a random, unique name.
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'namePrefix',
        'Creates a unique name beginning with the specified\nprefix. Conflicts with `name`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'policy',
        'The inline policy document. This is a JSON formatted string. For more information about building IAM policy documents with the provider, see the AWS IAM Policy Document Guide',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'role',
        'The name of the IAM role to attach to the policy.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the role policy. If omitted, this provider will\nassign a random, unique name.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
