import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_ReservationShareSettingsProjectMap {
  // The identifier for this object. Format specified above.
  id?: string;

  // The project id/number, should be same as the key of this project config in the project map.
  projectId?: string;
}

export function compute_ReservationShareSettingsProjectMap_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'id',
      'The identifier for this object. Format specified above.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'projectId',
      'The project id/number, should be same as the key of this project config in the project map.',
      () => [],
      false,
      false,
    ),
  ];
}
