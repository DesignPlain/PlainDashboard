import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dlm_LifecyclePolicyPolicyDetails,
  dlm_LifecyclePolicyPolicyDetails_GetTypes,
} from "../types/dlm_LifecyclePolicyPolicyDetails";

export interface LifecyclePolicyArgs {
  // The ARN of an IAM role that is able to be assumed by the DLM service.
  executionRoleArn?: string;

  // See the `policy_details` configuration block. Max of 1.
  policyDetails?: dlm_LifecyclePolicyPolicyDetails;

  // Whether the lifecycle policy should be enabled or disabled. `ENABLED` or `DISABLED` are valid values. Defaults to `ENABLED`.
  state?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A description for the DLM lifecycle policy.
  description?: string;
}
export class LifecyclePolicy extends Resource {
  // See the `policy_details` configuration block. Max of 1.
  public policyDetails?: dlm_LifecyclePolicyPolicyDetails;

  // Whether the lifecycle policy should be enabled or disabled. `ENABLED` or `DISABLED` are valid values. Defaults to `ENABLED`.
  public state?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of the DLM Lifecycle Policy.
  public arn?: string;

  // A description for the DLM lifecycle policy.
  public description?: string;

  // The ARN of an IAM role that is able to be assumed by the DLM service.
  public executionRoleArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description for the DLM lifecycle policy.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "executionRoleArn",
        "The ARN of an IAM role that is able to be assumed by the DLM service.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "policyDetails",
        "See the `policy_details` configuration block. Max of 1.",
        dlm_LifecyclePolicyPolicyDetails_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "state",
        "Whether the lifecycle policy should be enabled or disabled. `ENABLED` or `DISABLED` are valid values. Defaults to `ENABLED`.",
        [],
        false,
        false,
      ),
    ];
  }
}
