import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ServerlessLifecyclePolicyArgs {
  // JSON policy document to use as the content for the new policy.
  policy?: string;

  /*
Type of lifecycle policy. Must be `retention`.

The following arguments are optional:
*/
  type?: string;

  // Description of the policy.
  description?: string;

  // Name of the policy.
  name?: string;
}
export class ServerlessLifecyclePolicy extends Resource {
  // Description of the policy.
  public description?: string;

  // Name of the policy.
  public name?: string;

  // JSON policy document to use as the content for the new policy.
  public policy?: string;

  // Version of the policy.
  public policyVersion?: string;

  /*
Type of lifecycle policy. Must be `retention`.

The following arguments are optional:
*/
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the policy.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "JSON policy document to use as the content for the new policy.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of lifecycle policy. Must be `retention`.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the policy.",
        [],
        false,
        false,
      ),
    ];
  }
}
