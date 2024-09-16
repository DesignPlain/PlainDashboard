import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bedrock_CustomModelTrainingMetric {
  // Loss metric associated with the customization job.
  trainingLoss?: number;
}

export function bedrock_CustomModelTrainingMetric_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'trainingLoss',
      'Loss metric associated with the customization job.',
      () => [],
      true,
      false,
    ),
  ];
}
