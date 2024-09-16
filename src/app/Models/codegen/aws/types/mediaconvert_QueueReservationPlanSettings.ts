import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface mediaconvert_QueueReservationPlanSettings {
  // The length of the term of your reserved queue pricing plan commitment. Valid value is `ONE_YEAR`.
  commitment?: string;

  // Specifies whether the term of your reserved queue pricing plan. Valid values are `AUTO_RENEW` or `EXPIRE`.
  renewalType?: string;

  // Specifies the number of reserved transcode slots (RTS) for queue.
  reservedSlots?: number;
}

export function mediaconvert_QueueReservationPlanSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'commitment',
      'The length of the term of your reserved queue pricing plan commitment. Valid value is `ONE_YEAR`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'renewalType',
      'Specifies whether the term of your reserved queue pricing plan. Valid values are `AUTO_RENEW` or `EXPIRE`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'reservedSlots',
      'Specifies the number of reserved transcode slots (RTS) for queue.',
      () => [],
      true,
      false,
    ),
  ];
}
