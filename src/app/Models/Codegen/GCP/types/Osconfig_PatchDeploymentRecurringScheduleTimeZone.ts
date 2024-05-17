import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_PatchDeploymentRecurringScheduleTimeZone {
  // IANA Time Zone Database time zone, e.g. "America/New_York".
  Id?: string;

  // IANA Time Zone Database version number, e.g. "2019a".
  Version?: string;
}

export function Osconfig_PatchDeploymentRecurringScheduleTimeZone_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Id",
      'IANA Time Zone Database time zone, e.g. "America/New_York".',
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      'IANA Time Zone Database version number, e.g. "2019a".',
      [],
      false,
      true,
    ),
  ];
}
