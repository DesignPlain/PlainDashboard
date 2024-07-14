import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface netapp_VolumeReplicationTransferStat {
  /*
(Output)
Time when last transfer completed. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
*/
  lastTransferEndTime?: string;

  /*
(Output)
A message describing the cause of the last transfer failure.
*/
  lastTransferError?: string;

  /*
(Output)
Total time taken so far during current transfer.
*/
  totalTransferDuration?: string;

  /*
(Output)
Number of bytes transferred so far in current transfer.
*/
  transferBytes?: string;

  /*
(Output)
Time when progress was updated last. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
*/
  updateTime?: string;

  /*
(Output)
The elapsed time since the creation of the snapshot on the source volume that was last replicated
to the destination volume. Lag time represents the difference in age of the destination volume
data in relation to the source volume data.
*/
  lagDuration?: string;

  /*
(Output)
Size of last completed transfer in bytes.
*/
  lastTransferBytes?: string;

  /*
(Output)
Time taken during last completed transfer.
*/
  lastTransferDuration?: string;
}

export function netapp_VolumeReplicationTransferStat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "totalTransferDuration",
      "(Output)\nTotal time taken so far during current transfer.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "transferBytes",
      "(Output)\nNumber of bytes transferred so far in current transfer.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "updateTime",
      '(Output)\nTime when progress was updated last. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lagDuration",
      "(Output)\nThe elapsed time since the creation of the snapshot on the source volume that was last replicated\nto the destination volume. Lag time represents the difference in age of the destination volume\ndata in relation to the source volume data.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastTransferBytes",
      "(Output)\nSize of last completed transfer in bytes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastTransferDuration",
      "(Output)\nTime taken during last completed transfer.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastTransferEndTime",
      '(Output)\nTime when last transfer completed. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastTransferError",
      "(Output)\nA message describing the cause of the last transfer failure.",
      [],
      false,
      false,
    ),
  ];
}
