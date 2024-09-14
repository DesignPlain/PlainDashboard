import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface fsx_OpenZfsVolumeOriginSnapshot {
  // Specifies the strategy used when copying data from the snapshot to the new volume. Valid values are `CLONE`, `FULL_COPY`, `INCREMENTAL_COPY`.
  copyStrategy?: string;

  // The Amazon Resource Name (ARN) of the origin snapshot.
  snapshotArn?: string;
}

export function fsx_OpenZfsVolumeOriginSnapshot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "copyStrategy",
      "Specifies the strategy used when copying data from the snapshot to the new volume. Valid values are `CLONE`, `FULL_COPY`, `INCREMENTAL_COPY`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "snapshotArn",
      "The Amazon Resource Name (ARN) of the origin snapshot.",
      () => [],
      true,
      false,
    ),
  ];
}
