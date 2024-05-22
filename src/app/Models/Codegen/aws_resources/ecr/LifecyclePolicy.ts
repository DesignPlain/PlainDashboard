import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface LifecyclePolicyArgs {
  // The policy document. This is a JSON formatted string. See more details about [Policy Parameters](http://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html#lifecycle_policy_parameters) in the official AWS docs.
  policy?: string;

  // Name of the repository to apply the policy.
  repository?: string;
}
export class LifecyclePolicy extends Resource {
  // The policy document. This is a JSON formatted string. See more details about [Policy Parameters](http://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html#lifecycle_policy_parameters) in the official AWS docs.
  public policy?: string;

  // The registry ID where the repository was created.
  public registryId?: string;

  // Name of the repository to apply the policy.
  public repository?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The policy document. This is a JSON formatted string. See more details about [Policy Parameters](http://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html#lifecycle_policy_parameters) in the official AWS docs.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "repository",
        "Name of the repository to apply the policy.",
        [],
        true,
        true,
      ),
    ];
  }
}
