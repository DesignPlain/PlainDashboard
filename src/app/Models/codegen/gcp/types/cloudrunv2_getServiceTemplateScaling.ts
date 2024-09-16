import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudrunv2_getServiceTemplateScaling {
  // Maximum number of serving instances that this resource should have.
  maxInstanceCount?: number;

  // Minimum number of serving instances that this resource should have.
  minInstanceCount?: number;
}

export function cloudrunv2_getServiceTemplateScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'maxInstanceCount',
      'Maximum number of serving instances that this resource should have.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minInstanceCount',
      'Minimum number of serving instances that this resource should have.',
      () => [],
      true,
      false,
    ),
  ];
}
