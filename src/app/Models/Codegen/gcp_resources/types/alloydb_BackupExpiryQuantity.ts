import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface alloydb_BackupExpiryQuantity {
  /*
(Output)
Output only. The backup's position among its backups with the same source cluster and type, by descending chronological order create time (i.e. newest first).
*/
  retentionCount?: number;

  /*
(Output)
Output only. The length of the quantity-based queue, specified by the backup's retention policy.
*/
  totalRetentionCount?: number;
}

export function alloydb_BackupExpiryQuantity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "retentionCount",
      "(Output)\nOutput only. The backup's position among its backups with the same source cluster and type, by descending chronological order create time (i.e. newest first).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "totalRetentionCount",
      "(Output)\nOutput only. The length of the quantity-based queue, specified by the backup's retention policy.",
      [],
      false,
      false,
    ),
  ];
}
