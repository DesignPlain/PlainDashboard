import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface RolePolicyArgs {
  /*
The name of the role policy. If omitted, this provider will
assign a random, unique name.
*/
  name?: string;

  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  namePrefix?: string;

  // The inline policy document. This is a JSON formatted string. For more information about building IAM policy documents with the provider, see the AWS IAM Policy Document Guide
  policy?: string;

  // The name of the IAM role to attach to the policy.
  role?: string;
}
export class RolePolicy extends Resource {
  // The inline policy document. This is a JSON formatted string. For more information about building IAM policy documents with the provider, see the AWS IAM Policy Document Guide
  public policy?: string;

  // The name of the IAM role to attach to the policy.
  public role?: string;

  /*
The name of the role policy. If omitted, this provider will
assign a random, unique name.
*/
  public name?: string;

  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  public namePrefix?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "role",
        "The name of the IAM role to attach to the policy.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the role policy. If omitted, this provider will\nassign a random, unique name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified\nprefix. Conflicts with `name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The inline policy document. This is a JSON formatted string. For more information about building IAM policy documents with the provider, see the AWS IAM Policy Document Guide",
        [],
        true,
        false,
      ),
    ];
  }
}
