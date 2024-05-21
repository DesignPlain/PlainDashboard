import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      false,
      false,
    ),
  ];
}
