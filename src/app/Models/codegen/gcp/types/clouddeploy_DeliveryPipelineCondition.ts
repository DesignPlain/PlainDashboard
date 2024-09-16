import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  clouddeploy_DeliveryPipelineConditionPipelineReadyCondition,
  clouddeploy_DeliveryPipelineConditionPipelineReadyCondition_GetTypes,
} from './clouddeploy_DeliveryPipelineConditionPipelineReadyCondition';
import {
  clouddeploy_DeliveryPipelineConditionTargetsPresentCondition,
  clouddeploy_DeliveryPipelineConditionTargetsPresentCondition_GetTypes,
} from './clouddeploy_DeliveryPipelineConditionTargetsPresentCondition';
import {
  clouddeploy_DeliveryPipelineConditionTargetsTypeCondition,
  clouddeploy_DeliveryPipelineConditionTargetsTypeCondition_GetTypes,
} from './clouddeploy_DeliveryPipelineConditionTargetsTypeCondition';

export interface clouddeploy_DeliveryPipelineCondition {
  // Details around the Pipeline's overall status.
  pipelineReadyConditions?: Array<clouddeploy_DeliveryPipelineConditionPipelineReadyCondition>;

  // Details around targets enumerated in the pipeline.
  targetsPresentConditions?: Array<clouddeploy_DeliveryPipelineConditionTargetsPresentCondition>;

  // Details on the whether the targets enumerated in the pipeline are of the same type.
  targetsTypeConditions?: Array<clouddeploy_DeliveryPipelineConditionTargetsTypeCondition>;
}

export function clouddeploy_DeliveryPipelineCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'pipelineReadyConditions',
      "Details around the Pipeline's overall status.",
      () =>
        clouddeploy_DeliveryPipelineConditionPipelineReadyCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'targetsPresentConditions',
      'Details around targets enumerated in the pipeline.',
      () =>
        clouddeploy_DeliveryPipelineConditionTargetsPresentCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'targetsTypeConditions',
      'Details on the whether the targets enumerated in the pipeline are of the same type.',
      () =>
        clouddeploy_DeliveryPipelineConditionTargetsTypeCondition_GetTypes(),
      false,
      false,
    ),
  ];
}
