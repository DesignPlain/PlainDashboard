import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datasync_TaskTaskReportConfigReportOverrides {
  /*
Specifies the level of reporting for the files, objects, and directories that DataSync attempted to verify at the end of your transfer. Valid values: `ERRORS_ONLY` and `SUCCESSES_AND_ERRORS`.

> --NOTE:-- If any `report_overrides` are set to the same value as `task_report_config.report_level`, they will always be flagged as changed. Only set overrides to a value that differs from `task_report_config.report_level`.
*/
  verifiedOverride?: string;

  // Specifies the level of reporting for the files, objects, and directories that DataSync attempted to delete in your destination location. This only applies if you configure your task to delete data in the destination that isn't in the source. Valid values: `ERRORS_ONLY` and `SUCCESSES_AND_ERRORS`.
  deletedOverride?: string;

  // Specifies the level of reporting for the files, objects, and directories that DataSync attempted to skip during your transfer. Valid values: `ERRORS_ONLY` and `SUCCESSES_AND_ERRORS`.
  skippedOverride?: string;

  // Specifies the level of reporting for the files, objects, and directories that DataSync attempted to transfer. Valid values: `ERRORS_ONLY` and `SUCCESSES_AND_ERRORS`.
  transferredOverride?: string;
}

export function datasync_TaskTaskReportConfigReportOverrides_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "verifiedOverride",
      "Specifies the level of reporting for the files, objects, and directories that DataSync attempted to verify at the end of your transfer. Valid values: `ERRORS_ONLY` and `SUCCESSES_AND_ERRORS`.\n\n> **NOTE:** If any `report_overrides` are set to the same value as `task_report_config.report_level`, they will always be flagged as changed. Only set overrides to a value that differs from `task_report_config.report_level`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deletedOverride",
      "Specifies the level of reporting for the files, objects, and directories that DataSync attempted to delete in your destination location. This only applies if you configure your task to delete data in the destination that isn't in the source. Valid values: `ERRORS_ONLY` and `SUCCESSES_AND_ERRORS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "skippedOverride",
      "Specifies the level of reporting for the files, objects, and directories that DataSync attempted to skip during your transfer. Valid values: `ERRORS_ONLY` and `SUCCESSES_AND_ERRORS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "transferredOverride",
      "Specifies the level of reporting for the files, objects, and directories that DataSync attempted to transfer. Valid values: `ERRORS_ONLY` and `SUCCESSES_AND_ERRORS`.",
      [],
      false,
      false,
    ),
  ];
}
