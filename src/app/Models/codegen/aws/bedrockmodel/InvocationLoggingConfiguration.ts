import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrockmodel_InvocationLoggingConfigurationLoggingConfig,
  bedrockmodel_InvocationLoggingConfigurationLoggingConfig_GetTypes,
} from '../types/bedrockmodel_InvocationLoggingConfigurationLoggingConfig';

export interface InvocationLoggingConfigurationArgs {
  // The logging configuration values to set.
  loggingConfig?: bedrockmodel_InvocationLoggingConfigurationLoggingConfig;
}
export class InvocationLoggingConfiguration extends DS_Resource {
  // The logging configuration values to set.
  public loggingConfig?: bedrockmodel_InvocationLoggingConfigurationLoggingConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'loggingConfig',
        'The logging configuration values to set.',
        () =>
          bedrockmodel_InvocationLoggingConfigurationLoggingConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
