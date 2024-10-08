import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface osconfig_PatchDeploymentRecurringScheduleTimeZone {
  // IANA Time Zone Database version number, e.g. "2019a".
  version?: string;

  // IANA Time Zone Database time zone, e.g. "America/New_York".
  id?: string;
}

export function osconfig_PatchDeploymentRecurringScheduleTimeZone_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'id',
      'IANA Time Zone Database time zone, e.g. "America/New_York".',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'version',
      'IANA Time Zone Database version number, e.g. "2019a".',
      () => [],
      false,
      true,
    ),
  ];
}
