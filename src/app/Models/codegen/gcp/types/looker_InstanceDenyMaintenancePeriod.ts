import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  looker_InstanceDenyMaintenancePeriodTime,
  looker_InstanceDenyMaintenancePeriodTime_GetTypes,
} from './looker_InstanceDenyMaintenancePeriodTime';
import {
  looker_InstanceDenyMaintenancePeriodEndDate,
  looker_InstanceDenyMaintenancePeriodEndDate_GetTypes,
} from './looker_InstanceDenyMaintenancePeriodEndDate';
import {
  looker_InstanceDenyMaintenancePeriodStartDate,
  looker_InstanceDenyMaintenancePeriodStartDate_GetTypes,
} from './looker_InstanceDenyMaintenancePeriodStartDate';

export interface looker_InstanceDenyMaintenancePeriod {
  /*
Required. Start time of the window in UTC time.
Structure is documented below.
*/
  time?: looker_InstanceDenyMaintenancePeriodTime;

  /*
Required. Start date of the deny maintenance period
Structure is documented below.
*/
  endDate?: looker_InstanceDenyMaintenancePeriodEndDate;

  /*
Required. Start date of the deny maintenance period
Structure is documented below.
*/
  startDate?: looker_InstanceDenyMaintenancePeriodStartDate;
}

export function looker_InstanceDenyMaintenancePeriod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'endDate',
      'Required. Start date of the deny maintenance period\nStructure is documented below.',
      () => looker_InstanceDenyMaintenancePeriodEndDate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'startDate',
      'Required. Start date of the deny maintenance period\nStructure is documented below.',
      () => looker_InstanceDenyMaintenancePeriodStartDate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'time',
      'Required. Start time of the window in UTC time.\nStructure is documented below.',
      () => looker_InstanceDenyMaintenancePeriodTime_GetTypes(),
      true,
      false,
    ),
  ];
}
