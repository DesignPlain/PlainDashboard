import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bedrock_getCustomModelValidationMetric {
  // The validation loss associated with the validator.
  validationLoss?: number;
}

export function bedrock_getCustomModelValidationMetric_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'validationLoss',
      'The validation loss associated with the validator.',
      () => [],
      true,
      false,
    ),
  ];
}
