import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  opsworks_PhpAppLayerCloudwatchConfigurationLogStream,
  opsworks_PhpAppLayerCloudwatchConfigurationLogStream_GetTypes,
} from './opsworks_PhpAppLayerCloudwatchConfigurationLogStream';

export interface opsworks_PhpAppLayerCloudwatchConfiguration {
  //
  enabled?: boolean;

  //
  logStreams?: Array<opsworks_PhpAppLayerCloudwatchConfigurationLogStream>;
}

export function opsworks_PhpAppLayerCloudwatchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, 'enabled', '', () => [], false, false),
    new DynamicUIProps(
      InputType.Array,
      'logStreams',
      '',
      () => opsworks_PhpAppLayerCloudwatchConfigurationLogStream_GetTypes(),
      false,
      false,
    ),
  ];
}
