import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Alloydb_ClusterAutomatedBackupPolicyTimeBasedRetention {
  /*
The retention period.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  RetentionPeriod?: string;
}

export function Alloydb_ClusterAutomatedBackupPolicyTimeBasedRetention_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RetentionPeriod",
      "The retention period.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
  ];
}
