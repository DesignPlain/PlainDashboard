import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  batch_SchedulingPolicyFairSharePolicy,
  batch_SchedulingPolicyFairSharePolicy_GetTypes,
} from "../types/batch_SchedulingPolicyFairSharePolicy";

export interface SchedulingPolicyArgs {
  // Specifies the name of the scheduling policy.
  name?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  fairSharePolicy?: batch_SchedulingPolicyFairSharePolicy;
}
export class SchedulingPolicy extends DS_Resource {
  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name of the scheduling policy.
  public arn?: string;

  //
  public fairSharePolicy?: batch_SchedulingPolicyFairSharePolicy;

  // Specifies the name of the scheduling policy.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "fairSharePolicy",
        "",
        () => batch_SchedulingPolicyFairSharePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Specifies the name of the scheduling policy.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
