import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dlm_LifecyclePolicyPolicyDetailsSchedule,
  dlm_LifecyclePolicyPolicyDetailsSchedule_GetTypes,
} from './dlm_LifecyclePolicyPolicyDetailsSchedule';
import {
  dlm_LifecyclePolicyPolicyDetailsAction,
  dlm_LifecyclePolicyPolicyDetailsAction_GetTypes,
} from './dlm_LifecyclePolicyPolicyDetailsAction';
import {
  dlm_LifecyclePolicyPolicyDetailsEventSource,
  dlm_LifecyclePolicyPolicyDetailsEventSource_GetTypes,
} from './dlm_LifecyclePolicyPolicyDetailsEventSource';
import {
  dlm_LifecyclePolicyPolicyDetailsParameters,
  dlm_LifecyclePolicyPolicyDetailsParameters_GetTypes,
} from './dlm_LifecyclePolicyPolicyDetailsParameters';

export interface dlm_LifecyclePolicyPolicyDetails {
  // A list of resource types that should be targeted by the lifecycle policy. Valid values are `VOLUME` and `INSTANCE`.
  resourceTypes?: Array<string>;

  // See the `schedule` configuration block.
  schedules?: Array<dlm_LifecyclePolicyPolicyDetailsSchedule>;

  /*
A map of tag keys and their values. Any resources that match the `resource_types` and are tagged with _any_ of these tags will be targeted.

> Note: You cannot have overlapping lifecycle policies that share the same `target_tags`. Pulumi is unable to detect this at plan time but it will fail during apply.
*/
  targetTags?: Map<string, string>;

  // The actions to be performed when the event-based policy is triggered. You can specify only one action per policy. This parameter is required for event-based policies only. If you are creating a snapshot or AMI policy, omit this parameter. See the `action` configuration block.
  action?: dlm_LifecyclePolicyPolicyDetailsAction;

  // The event that triggers the event-based policy. This parameter is required for event-based policies only. If you are creating a snapshot or AMI policy, omit this parameter. See the `event_source` configuration block.
  eventSource?: dlm_LifecyclePolicyPolicyDetailsEventSource;

  //
  parameters?: dlm_LifecyclePolicyPolicyDetailsParameters;

  // The valid target resource types and actions a policy can manage. Specify `EBS_SNAPSHOT_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify `IMAGE_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify `EVENT_BASED_POLICY` to create an event-based policy that performs specific actions when a defined event occurs in your AWS account. Default value is `EBS_SNAPSHOT_MANAGEMENT`.
  policyType?: string;

  // The location of the resources to backup. If the source resources are located in an AWS Region, specify `CLOUD`. If the source resources are located on an Outpost in your account, specify `OUTPOST`. If you specify `OUTPOST`, Amazon Data Lifecycle Manager backs up all resources of the specified type with matching target tags across all of the Outposts in your account. Valid values are `CLOUD` and `OUTPOST`.
  resourceLocations?: string;
}

export function dlm_LifecyclePolicyPolicyDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'action',
      'The actions to be performed when the event-based policy is triggered. You can specify only one action per policy. This parameter is required for event-based policies only. If you are creating a snapshot or AMI policy, omit this parameter. See the `action` configuration block.',
      () => dlm_LifecyclePolicyPolicyDetailsAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'eventSource',
      'The event that triggers the event-based policy. This parameter is required for event-based policies only. If you are creating a snapshot or AMI policy, omit this parameter. See the `event_source` configuration block.',
      () => dlm_LifecyclePolicyPolicyDetailsEventSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'parameters',
      '',
      () => dlm_LifecyclePolicyPolicyDetailsParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'policyType',
      'The valid target resource types and actions a policy can manage. Specify `EBS_SNAPSHOT_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify `IMAGE_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify `EVENT_BASED_POLICY` to create an event-based policy that performs specific actions when a defined event occurs in your AWS account. Default value is `EBS_SNAPSHOT_MANAGEMENT`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'resourceLocations',
      'The location of the resources to backup. If the source resources are located in an AWS Region, specify `CLOUD`. If the source resources are located on an Outpost in your account, specify `OUTPOST`. If you specify `OUTPOST`, Amazon Data Lifecycle Manager backs up all resources of the specified type with matching target tags across all of the Outposts in your account. Valid values are `CLOUD` and `OUTPOST`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'resourceTypes',
      'A list of resource types that should be targeted by the lifecycle policy. Valid values are `VOLUME` and `INSTANCE`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'schedules',
      'See the `schedule` configuration block.',
      () => dlm_LifecyclePolicyPolicyDetailsSchedule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'targetTags',
      'A map of tag keys and their values. Any resources that match the `resource_types` and are tagged with _any_ of these tags will be targeted.\n\n> Note: You cannot have overlapping lifecycle policies that share the same `target_tags`. Pulumi is unable to detect this at plan time but it will fail during apply.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
