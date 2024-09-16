import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface autoscaling_getGroupLaunchTemplate {
  // ID of the launch template.
  id?: string;

  // Specify the exact name of the desired autoscaling group.
  name?: string;

  // Template version.
  version?: string;
}

export function autoscaling_getGroupLaunchTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'id',
      'ID of the launch template.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Specify the exact name of the desired autoscaling group.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'version',
      'Template version.',
      () => [],
      true,
      false,
    ),
  ];
}
