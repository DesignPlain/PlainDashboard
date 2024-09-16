import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  opsworks_EcsClusterLayerCloudwatchConfigurationLogStream,
  opsworks_EcsClusterLayerCloudwatchConfigurationLogStream_GetTypes,
} from './opsworks_EcsClusterLayerCloudwatchConfigurationLogStream';

export interface opsworks_EcsClusterLayerCloudwatchConfiguration {
  //
  logStreams?: Array<opsworks_EcsClusterLayerCloudwatchConfigurationLogStream>;

  //
  enabled?: boolean;
}

export function opsworks_EcsClusterLayerCloudwatchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'logStreams',
      '',
      () => opsworks_EcsClusterLayerCloudwatchConfigurationLogStream_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.Bool, 'enabled', '', () => [], false, false),
  ];
}
