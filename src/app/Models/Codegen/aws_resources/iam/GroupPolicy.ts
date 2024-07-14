import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface GroupPolicyArgs {
  // The policy document. This is a JSON formatted string.
  policy?: string;

  // The IAM group to attach to the policy.
  group?: string;

  /*
The name of the policy. If omitted, the provider will
assign a random, unique name.
*/
  name?: string;

  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  namePrefix?: string;
}
export class GroupPolicy extends Resource {
  // The IAM group to attach to the policy.
  public group?: string;

  /*
The name of the policy. If omitted, the provider will
assign a random, unique name.
*/
  public name?: string;

  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  public namePrefix?: string;

  // The policy document. This is a JSON formatted string.
  public policy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the policy. If omitted, the provider will\nassign a random, unique name.",
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
        "The policy document. This is a JSON formatted string.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "group",
        "The IAM group to attach to the policy.",
        [],
        true,
        true,
      ),
    ];
  }
}
