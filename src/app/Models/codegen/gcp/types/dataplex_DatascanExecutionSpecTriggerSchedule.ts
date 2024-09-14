import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataplex_DatascanExecutionSpecTriggerSchedule {
  /*
Cron schedule for running scans periodically. This field is required for Schedule scans.

- - -
*/
  cron?: string;
}

export function dataplex_DatascanExecutionSpecTriggerSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cron",
      "Cron schedule for running scans periodically. This field is required for Schedule scans.\n\n- - -",
      () => [],
      true,
      false,
    ),
  ];
}
