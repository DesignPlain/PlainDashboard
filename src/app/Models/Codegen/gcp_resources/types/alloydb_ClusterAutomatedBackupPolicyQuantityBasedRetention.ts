import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface alloydb_ClusterAutomatedBackupPolicyQuantityBasedRetention {
  // The number of backups to retain.
  count?: number;
}

export function alloydb_ClusterAutomatedBackupPolicyQuantityBasedRetention_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "count",
      "The number of backups to retain.",
      [],
      false,
      false,
    ),
  ];
}
