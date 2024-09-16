import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface clouddeploy_AutomationRulePromoteReleaseRule {
  // Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `a-z{0,62}`.
  id?: string;

  // Optional. How long the release need to be paused until being promoted to the next target.
  wait?: string;

  // Optional. The starting phase of the rollout created by this operation. Default to the first phase.
  destinationPhase?: string;

  // Optional. The ID of the stage in the pipeline to which this `Release` is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: - The last segment of a target name. It only needs the ID to determine if the target is one of the stages in the promotion sequence defined in the pipeline. - "@next", the next target in the promotion sequence.
  destinationTargetId?: string;
}

export function clouddeploy_AutomationRulePromoteReleaseRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'id',
      'Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `a-z{0,62}`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'wait',
      'Optional. How long the release need to be paused until being promoted to the next target.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'destinationPhase',
      'Optional. The starting phase of the rollout created by this operation. Default to the first phase.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'destinationTargetId',
      'Optional. The ID of the stage in the pipeline to which this `Release` is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine if the target is one of the stages in the promotion sequence defined in the pipeline. * "@next", the next target in the promotion sequence.',
      () => [],
      false,
      false,
    ),
  ];
}
