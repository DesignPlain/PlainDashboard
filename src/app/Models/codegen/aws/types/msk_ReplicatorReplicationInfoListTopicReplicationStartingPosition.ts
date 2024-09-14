import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface msk_ReplicatorReplicationInfoListTopicReplicationStartingPosition {
  // The type of replication starting position. Supports `LATEST` and `EARLIEST`.
  type?: string;
}

export function msk_ReplicatorReplicationInfoListTopicReplicationStartingPosition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of replication starting position. Supports `LATEST` and `EARLIEST`.",
      () => [],
      false,
      true,
    ),
  ];
}
