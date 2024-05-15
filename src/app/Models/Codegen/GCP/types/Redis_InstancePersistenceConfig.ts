import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Redis_InstancePersistenceConfig {
  /*
Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.
- DISABLED: 	Persistence is disabled for the instance, and any existing snapshots are deleted.
- RDB: RDB based Persistence is enabled.
Possible values are: `DISABLED`, `RDB`.
*/
  PersistenceMode?: string;

  /*
(Output)
Output only. The next time that a snapshot attempt is scheduled to occur.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up
to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  RdbNextSnapshotTime?: string;

  /*
Optional. Available snapshot periods for scheduling.
- ONE_HOUR:	Snapshot every 1 hour.
- SIX_HOURS:	Snapshot every 6 hours.
- TWELVE_HOURS:	Snapshot every 12 hours.
- TWENTY_FOUR_HOURS:	Snapshot every 24 hours.
Possible values are: `ONE_HOUR`, `SIX_HOURS`, `TWELVE_HOURS`, `TWENTY_FOUR_HOURS`.
*/
  RdbSnapshotPeriod?: string;

  /*
Optional. Date and time that the first snapshot was/will be attempted,
and to which future snapshots will be aligned. If not provided,
the current time will be used.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution
and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  RdbSnapshotStartTime?: string;
}

export function Redis_InstancePersistenceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PersistenceMode",
      "Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.\n- DISABLED: \tPersistence is disabled for the instance, and any existing snapshots are deleted.\n- RDB: RDB based Persistence is enabled.\nPossible values are: `DISABLED`, `RDB`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RdbNextSnapshotTime",
      '(Output)\nOutput only. The next time that a snapshot attempt is scheduled to occur.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up\nto nine fractional digits.\nExamples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RdbSnapshotPeriod",
      "Optional. Available snapshot periods for scheduling.\n- ONE_HOUR:\tSnapshot every 1 hour.\n- SIX_HOURS:\tSnapshot every 6 hours.\n- TWELVE_HOURS:\tSnapshot every 12 hours.\n- TWENTY_FOUR_HOURS:\tSnapshot every 24 hours.\nPossible values are: `ONE_HOUR`, `SIX_HOURS`, `TWELVE_HOURS`, `TWENTY_FOUR_HOURS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RdbSnapshotStartTime",
      'Optional. Date and time that the first snapshot was/will be attempted,\nand to which future snapshots will be aligned. If not provided,\nthe current time will be used.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution\nand up to nine fractional digits.\nExamples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      false,
    ),
  ];
}
