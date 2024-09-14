import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface RepositoryPolicyArgs {
  // The policy document. This is a JSON formatted string.
  policy?: string;

  // Name of the repository to apply the policy.
  repository?: string;
}
export class RepositoryPolicy extends DS_Resource {
  // The policy document. This is a JSON formatted string.
  public policy?: string;

  // The registry ID where the repository was created.
  public registryId?: string;

  // Name of the repository to apply the policy.
  public repository?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "repository",
        "Name of the repository to apply the policy.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The policy document. This is a JSON formatted string.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
