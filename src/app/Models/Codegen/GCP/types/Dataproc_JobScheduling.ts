import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_JobScheduling {
  // Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.
  maxFailuresPerHour?: number;

  // Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.
  maxFailuresTotal?: number;
}

export function dataproc_JobScheduling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxFailuresPerHour",
      "Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxFailuresTotal",
      "Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.",
      [],
      true,
      true,
    ),
  ];
}
