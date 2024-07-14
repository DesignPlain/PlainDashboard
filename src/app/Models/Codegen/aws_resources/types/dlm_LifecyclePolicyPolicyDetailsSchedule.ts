import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleRetainRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleRetainRule_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsScheduleRetainRule";
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleShareRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleShareRule_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsScheduleShareRule";
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleCreateRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleCreateRule_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsScheduleCreateRule";
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleDeprecateRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleDeprecateRule_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsScheduleDeprecateRule";
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule";
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule";

export interface dlm_LifecyclePolicyPolicyDetailsSchedule {
  // See the `cross_region_copy_rule` block. Max of 3 per schedule.
  crossRegionCopyRules?: Array<dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule>;

  // A descriptive name for the action.
  name?: string;

  // Specifies the retention rule for cross-Region snapshot copies. See the `retain_rule` block. Max of 1 per action.
  retainRule?: dlm_LifecyclePolicyPolicyDetailsScheduleRetainRule;

  // See the `share_rule` block. Max of 1 per schedule.
  shareRule?: dlm_LifecyclePolicyPolicyDetailsScheduleShareRule;

  // See the `create_rule` block. Max of 1 per schedule.
  createRule?: dlm_LifecyclePolicyPolicyDetailsScheduleCreateRule;

  // The AMI deprecation rule for cross-Region AMI copies created by the rule. See the `deprecate_rule` block.
  deprecateRule?: dlm_LifecyclePolicyPolicyDetailsScheduleDeprecateRule;

  // See the `fast_restore_rule` block. Max of 1 per schedule.
  fastRestoreRule?: dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule;

  // A map of tag keys and their values. DLM lifecycle policies will already tag the snapshot with the tags on the volume. This configuration adds extra tags on top of these.
  tagsToAdd?: Map<string, string>;

  // A map of tag keys and variable values, where the values are determined when the policy is executed. Only `$(instance-id)` or `$(timestamp)` are valid values. Can only be used when `resource_types` is `INSTANCE`.
  variableTags?: Map<string, string>;

  // Whether to copy all user-defined tags from the source snapshot to the cross-region snapshot copy.
  copyTags?: boolean;
}

export function dlm_LifecyclePolicyPolicyDetailsSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "A descriptive name for the action.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retainRule",
      "Specifies the retention rule for cross-Region snapshot copies. See the `retain_rule` block. Max of 1 per action.",
      dlm_LifecyclePolicyPolicyDetailsScheduleRetainRule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "createRule",
      "See the `create_rule` block. Max of 1 per schedule.",
      dlm_LifecyclePolicyPolicyDetailsScheduleCreateRule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "deprecateRule",
      "The AMI deprecation rule for cross-Region AMI copies created by the rule. See the `deprecate_rule` block.",
      dlm_LifecyclePolicyPolicyDetailsScheduleDeprecateRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fastRestoreRule",
      "See the `fast_restore_rule` block. Max of 1 per schedule.",
      dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tagsToAdd",
      "A map of tag keys and their values. DLM lifecycle policies will already tag the snapshot with the tags on the volume. This configuration adds extra tags on top of these.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "copyTags",
      "Whether to copy all user-defined tags from the source snapshot to the cross-region snapshot copy.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "crossRegionCopyRules",
      "See the `cross_region_copy_rule` block. Max of 3 per schedule.",
      dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "shareRule",
      "See the `share_rule` block. Max of 1 per schedule.",
      dlm_LifecyclePolicyPolicyDetailsScheduleShareRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "variableTags",
      "A map of tag keys and variable values, where the values are determined when the policy is executed. Only `$(instance-id)` or `$(timestamp)` are valid values. Can only be used when `resource_types` is `INSTANCE`.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
