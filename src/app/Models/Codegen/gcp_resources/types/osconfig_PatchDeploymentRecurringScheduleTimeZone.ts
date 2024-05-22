import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_PatchDeploymentRecurringScheduleTimeZone {
  // IANA Time Zone Database time zone, e.g. "America/New_York".
  id?: string;

  // IANA Time Zone Database version number, e.g. "2019a".
  version?: string;
}

export function osconfig_PatchDeploymentRecurringScheduleTimeZone_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "version",
      'IANA Time Zone Database version number, e.g. "2019a".',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      'IANA Time Zone Database time zone, e.g. "America/New_York".',
      [],
      true,
      true,
    ),
  ];
}
