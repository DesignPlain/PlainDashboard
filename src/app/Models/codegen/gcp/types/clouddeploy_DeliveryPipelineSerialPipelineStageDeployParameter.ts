import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface clouddeploy_DeliveryPipelineSerialPipelineStageDeployParameter {
  // Optional. Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target).
  matchTargetLabels?: Map<string, string>;

  // Required. Values are deploy parameters in key-value pairs.
  values?: Map<string, string>;
}

export function clouddeploy_DeliveryPipelineSerialPipelineStageDeployParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'values',
      'Required. Values are deploy parameters in key-value pairs.',
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'matchTargetLabels',
      'Optional. Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target).',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
