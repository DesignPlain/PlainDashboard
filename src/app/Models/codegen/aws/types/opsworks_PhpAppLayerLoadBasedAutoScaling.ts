import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  opsworks_PhpAppLayerLoadBasedAutoScalingUpscaling,
  opsworks_PhpAppLayerLoadBasedAutoScalingUpscaling_GetTypes,
} from './opsworks_PhpAppLayerLoadBasedAutoScalingUpscaling';
import {
  opsworks_PhpAppLayerLoadBasedAutoScalingDownscaling,
  opsworks_PhpAppLayerLoadBasedAutoScalingDownscaling_GetTypes,
} from './opsworks_PhpAppLayerLoadBasedAutoScalingDownscaling';

export interface opsworks_PhpAppLayerLoadBasedAutoScaling {
  //
  downscaling?: opsworks_PhpAppLayerLoadBasedAutoScalingDownscaling;

  //
  enable?: boolean;

  //
  upscaling?: opsworks_PhpAppLayerLoadBasedAutoScalingUpscaling;
}

export function opsworks_PhpAppLayerLoadBasedAutoScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'upscaling',
      '',
      () => opsworks_PhpAppLayerLoadBasedAutoScalingUpscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'downscaling',
      '',
      () => opsworks_PhpAppLayerLoadBasedAutoScalingDownscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.Bool, 'enable', '', () => [], false, false),
  ];
}
