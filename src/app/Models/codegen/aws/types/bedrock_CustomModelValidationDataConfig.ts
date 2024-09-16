import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_CustomModelValidationDataConfigValidator,
  bedrock_CustomModelValidationDataConfigValidator_GetTypes,
} from './bedrock_CustomModelValidationDataConfigValidator';

export interface bedrock_CustomModelValidationDataConfig {
  // Information about the validators.
  validators?: Array<bedrock_CustomModelValidationDataConfigValidator>;
}

export function bedrock_CustomModelValidationDataConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'validators',
      'Information about the validators.',
      () => bedrock_CustomModelValidationDataConfigValidator_GetTypes(),
      false,
      false,
    ),
  ];
}
