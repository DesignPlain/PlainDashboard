import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appstream_getImageImagePermission {
  // Boolean indicating if the image can be used for a fleet.
  allowFleet?: boolean;

  // indicated whether the image can be used for an image builder.
  allowImageBuilder?: boolean;
}

export function appstream_getImageImagePermission_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'allowImageBuilder',
      'indicated whether the image can be used for an image builder.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'allowFleet',
      'Boolean indicating if the image can be used for a fleet.',
      () => [],
      true,
      false,
    ),
  ];
}
