import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_DiskAsyncPrimaryDisk {
  // Primary disk for asynchronous disk replication.
  disk?: string;
}

export function compute_DiskAsyncPrimaryDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "disk",
      "Primary disk for asynchronous disk replication.",
      [],
      true,
      true,
    ),
  ];
}
