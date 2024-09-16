import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_ModelInferenceExecutionConfig {
  // The container hosts value `SingleModel/MultiModel`. The default value is `SingleModel`.
  mode?: string;
}

export function sagemaker_ModelInferenceExecutionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'mode',
      'The container hosts value `SingleModel/MultiModel`. The default value is `SingleModel`.',
      () => [],
      true,
      false,
    ),
  ];
}
