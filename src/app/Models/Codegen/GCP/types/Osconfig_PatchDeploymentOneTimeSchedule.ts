import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_PatchDeploymentOneTimeSchedule {
  /*
The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format,
accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  ExecuteTime?: string;
}

export function Osconfig_PatchDeploymentOneTimeSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ExecuteTime",
      'The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format,\naccurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".',
      [],
      true,
      true,
    ),
  ];
}
