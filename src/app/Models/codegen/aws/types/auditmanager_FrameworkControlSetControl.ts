import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface auditmanager_FrameworkControlSetControl {
  // Unique identifier of the control.
  id?: string;
}

export function auditmanager_FrameworkControlSetControl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'id',
      'Unique identifier of the control.',
      () => [],
      true,
      false,
    ),
  ];
}
