import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  opsworks_StaticWebLayerCloudwatchConfigurationLogStream,
  opsworks_StaticWebLayerCloudwatchConfigurationLogStream_GetTypes,
} from './opsworks_StaticWebLayerCloudwatchConfigurationLogStream';

export interface opsworks_StaticWebLayerCloudwatchConfiguration {
  //
  enabled?: boolean;

  //
  logStreams?: Array<opsworks_StaticWebLayerCloudwatchConfigurationLogStream>;
}

export function opsworks_StaticWebLayerCloudwatchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, 'enabled', '', () => [], false, false),
    new DynamicUIProps(
      InputType.Array,
      'logStreams',
      '',
      () => opsworks_StaticWebLayerCloudwatchConfigurationLogStream_GetTypes(),
      false,
      false,
    ),
  ];
}
