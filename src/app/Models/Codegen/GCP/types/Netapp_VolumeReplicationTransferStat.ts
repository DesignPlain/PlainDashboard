import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Netapp_VolumeReplicationTransferStat {
  /*
(Output)
Size of last completed transfer in bytes.
*/
  LastTransferBytes?: string;

  /*
(Output)
Time taken during last completed transfer.
*/
  LastTransferDuration?: string;

  /*
(Output)
Time when last transfer completed. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
*/
  LastTransferEndTime?: string;

  /*
(Output)
A message describing the cause of the last transfer failure.
*/
  LastTransferError?: string;

  /*
(Output)
Total time taken so far during current transfer.
*/
  TotalTransferDuration?: string;

  /*
(Output)
Number of bytes transferred so far in current transfer.
*/
  TransferBytes?: string;

  /*
(Output)
Time when progress was updated last. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
*/
  UpdateTime?: string;

  /*
(Output)
The elapsed time since the creation of the snapshot on the source volume that was last replicated
to the destination volume. Lag time represents the difference in age of the destination volume
data in relation to the source volume data.
*/
  LagDuration?: string;
}

export function Netapp_VolumeReplicationTransferStat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "LastTransferDuration",
      "(Output)\nTime taken during last completed transfer.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LastTransferEndTime",
      '(Output)\nTime when last transfer completed. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LastTransferError",
      "(Output)\nA message describing the cause of the last transfer failure.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TotalTransferDuration",
      "(Output)\nTotal time taken so far during current transfer.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TransferBytes",
      "(Output)\nNumber of bytes transferred so far in current transfer.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UpdateTime",
      '(Output)\nTime when progress was updated last. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LagDuration",
      "(Output)\nThe elapsed time since the creation of the snapshot on the source volume that was last replicated\nto the destination volume. Lag time represents the difference in age of the destination volume\ndata in relation to the source volume data.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LastTransferBytes",
      "(Output)\nSize of last completed transfer in bytes.",
      [],
      false,
      false,
    ),
  ];
}
