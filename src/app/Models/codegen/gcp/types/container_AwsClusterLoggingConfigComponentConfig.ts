import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_AwsClusterLoggingConfigComponentConfig {
  // Components of the logging configuration to be enabled.
  enableComponents?: Array<string>;
}

export function container_AwsClusterLoggingConfigComponentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'enableComponents',
      'Components of the logging configuration to be enabled.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
