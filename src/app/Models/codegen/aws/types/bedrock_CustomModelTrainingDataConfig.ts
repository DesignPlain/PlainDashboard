import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bedrock_CustomModelTrainingDataConfig {
  // The S3 URI where the training data is stored.
  s3Uri?: string;
}

export function bedrock_CustomModelTrainingDataConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      's3Uri',
      'The S3 URI where the training data is stored.',
      () => [],
      true,
      false,
    ),
  ];
}
