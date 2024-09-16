import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface clouddeploy_DeliveryPipelineConditionTargetsPresentCondition {
  // The list of Target names that are missing. For example, projects/{project_id}/locations/{location_name}/targets/{target_name}.
  missingTargets?: Array<string>;

  // True if there aren't any missing Targets.
  status?: boolean;

  // Output only. Most recent time at which the pipeline was updated.
  updateTime?: string;
}

export function clouddeploy_DeliveryPipelineConditionTargetsPresentCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'status',
      "True if there aren't any missing Targets.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'updateTime',
      'Output only. Most recent time at which the pipeline was updated.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'missingTargets',
      'The list of Target names that are missing. For example, projects/{project_id}/locations/{location_name}/targets/{target_name}.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
