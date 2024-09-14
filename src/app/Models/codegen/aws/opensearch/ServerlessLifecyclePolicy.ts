import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ServerlessLifecyclePolicyArgs {
  // Description of the policy.
  description?: string;

  // Name of the policy.
  name?: string;

  // JSON policy document to use as the content for the new policy.
  policy?: string;

  /*
Type of lifecycle policy. Must be `retention`.

The following arguments are optional:
*/
  type?: string;
}
export class ServerlessLifecyclePolicy extends DS_Resource {
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

  // Description of the policy.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the policy.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the policy.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "JSON policy document to use as the content for the new policy.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of lifecycle policy. Must be `retention`.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
    ];
  }
}
