import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface alloydb_ClusterAutomatedBackupPolicyTimeBasedRetention {
  /*
The retention period.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  retentionPeriod?: string;
}

export function alloydb_ClusterAutomatedBackupPolicyTimeBasedRetention_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "retentionPeriod",
      "The retention period.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      () => [],
      false,
      false,
    ),
  ];
}
