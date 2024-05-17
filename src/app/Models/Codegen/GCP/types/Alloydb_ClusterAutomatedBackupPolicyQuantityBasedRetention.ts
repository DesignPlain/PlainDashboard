import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Alloydb_ClusterAutomatedBackupPolicyQuantityBasedRetention {
  // The number of backups to retain.
  Count?: number;
}

export function Alloydb_ClusterAutomatedBackupPolicyQuantityBasedRetention_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Count",
      "The number of backups to retain.",
      [],
      false,
      false,
    ),
  ];
}
