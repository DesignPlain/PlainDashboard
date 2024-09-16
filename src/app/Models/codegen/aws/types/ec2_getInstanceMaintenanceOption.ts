import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getInstanceMaintenanceOption {
  // Automatic recovery behavior of the instance.
  autoRecovery?: string;
}

export function ec2_getInstanceMaintenanceOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'autoRecovery',
      'Automatic recovery behavior of the instance.',
      () => [],
      true,
      false,
    ),
  ];
}
