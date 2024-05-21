import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField,
  dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField";

export interface dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfig {
  /*
When the job is started by a JobTrigger we will automatically figure out a valid startTime to avoid
scanning files that have not been modified since the last time the JobTrigger executed. This will
be based on the time of the execution of the last run of the JobTrigger or the timespan endTime
used in the last run of the JobTrigger.
*/
  enableAutoPopulationOfTimespanConfig?: boolean;

  // Exclude files, tables, or rows newer than this value. If not set, no upper time limit is applied.
  endTime?: string;

  // Exclude files, tables, or rows older than this value. If not set, no lower time limit is applied.
  startTime?: string;

  /*
Specification of the field containing the timestamp of scanned items.
Structure is documented below.
*/
  timestampField?: dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField;
}

export function dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "timestampField",
      "Specification of the field containing the timestamp of scanned items.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableAutoPopulationOfTimespanConfig",
      "When the job is started by a JobTrigger we will automatically figure out a valid startTime to avoid\nscanning files that have not been modified since the last time the JobTrigger executed. This will\nbe based on the time of the execution of the last run of the JobTrigger or the timespan endTime\nused in the last run of the JobTrigger.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endTime",
      "Exclude files, tables, or rows newer than this value. If not set, no upper time limit is applied.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "Exclude files, tables, or rows older than this value. If not set, no lower time limit is applied.",
      [],
      false,
      false,
    ),
  ];
}
