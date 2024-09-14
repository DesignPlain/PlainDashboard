import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleRetainRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleRetainRule_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsScheduleRetainRule";
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleCreateRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleCreateRule_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsScheduleCreateRule";
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule";
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleShareRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleShareRule_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsScheduleShareRule";
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleDeprecateRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleDeprecateRule_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsScheduleDeprecateRule";
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule";

export interface dlm_LifecyclePolicyPolicyDetailsSchedule {
  // See the `share_rule` block. Max of 1 per schedule.
  shareRule?: dlm_LifecyclePolicyPolicyDetailsScheduleShareRule;

  // A map of tag keys and variable values, where the values are determined when the policy is executed. Only `$(instance-id)` or `$(timestamp)` are valid values. Can only be used when `resource_types` is `INSTANCE`.
  variableTags?: Map<string, string>;

  //
  copyTags?: boolean;

  //
  deprecateRule?: dlm_LifecyclePolicyPolicyDetailsScheduleDeprecateRule;

  // See the `fast_restore_rule` block. Max of 1 per schedule.
  fastRestoreRule?: dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule;

  //
  name?: string;

  //
  retainRule?: dlm_LifecyclePolicyPolicyDetailsScheduleRetainRule;

  // A map of tag keys and their values. DLM lifecycle policies will already tag the snapshot with the tags on the volume. This configuration adds extra tags on top of these.
  tagsToAdd?: Map<string, string>;

  // See the `create_rule` block. Max of 1 per schedule.
  createRule?: dlm_LifecyclePolicyPolicyDetailsScheduleCreateRule;

  // See the `cross_region_copy_rule` block. Max of 3 per schedule.
  crossRegionCopyRules?: Array<dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule>;
}

export function dlm_LifecyclePolicyPolicyDetailsSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "shareRule",
      "See the `share_rule` block. Max of 1 per schedule.",
      () => dlm_LifecyclePolicyPolicyDetailsScheduleShareRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "copyTags", "", () => [], false, true),
    new DynamicUIProps(InputType.String, "name", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "crossRegionCopyRules",
      "See the `cross_region_copy_rule` block. Max of 3 per schedule.",
      () =>
        dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "variableTags",
      "A map of tag keys and variable values, where the values are determined when the policy is executed. Only `$(instance-id)` or `$(timestamp)` are valid values. Can only be used when `resource_types` is `INSTANCE`.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "deprecateRule",
      "",
      () => dlm_LifecyclePolicyPolicyDetailsScheduleDeprecateRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fastRestoreRule",
      "See the `fast_restore_rule` block. Max of 1 per schedule.",
      () => dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retainRule",
      "",
      () => dlm_LifecyclePolicyPolicyDetailsScheduleRetainRule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tagsToAdd",
      "A map of tag keys and their values. DLM lifecycle policies will already tag the snapshot with the tags on the volume. This configuration adds extra tags on top of these.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "createRule",
      "See the `create_rule` block. Max of 1 per schedule.",
      () => dlm_LifecyclePolicyPolicyDetailsScheduleCreateRule_GetTypes(),
      true,
      false,
    ),
  ];
}
