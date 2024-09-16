import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  opsworks_RailsAppLayerLoadBasedAutoScalingUpscaling,
  opsworks_RailsAppLayerLoadBasedAutoScalingUpscaling_GetTypes,
} from './opsworks_RailsAppLayerLoadBasedAutoScalingUpscaling';
import {
  opsworks_RailsAppLayerLoadBasedAutoScalingDownscaling,
  opsworks_RailsAppLayerLoadBasedAutoScalingDownscaling_GetTypes,
} from './opsworks_RailsAppLayerLoadBasedAutoScalingDownscaling';

export interface opsworks_RailsAppLayerLoadBasedAutoScaling {
  //
  enable?: boolean;

  //
  upscaling?: opsworks_RailsAppLayerLoadBasedAutoScalingUpscaling;

  //
  downscaling?: opsworks_RailsAppLayerLoadBasedAutoScalingDownscaling;
}

export function opsworks_RailsAppLayerLoadBasedAutoScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, 'enable', '', () => [], false, false),
    new DynamicUIProps(
      InputType.Object,
      'upscaling',
      '',
      () => opsworks_RailsAppLayerLoadBasedAutoScalingUpscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'downscaling',
      '',
      () => opsworks_RailsAppLayerLoadBasedAutoScalingDownscaling_GetTypes(),
      false,
      false,
    ),
  ];
}
