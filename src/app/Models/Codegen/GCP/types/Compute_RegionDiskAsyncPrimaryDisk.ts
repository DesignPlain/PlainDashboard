import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionDiskAsyncPrimaryDisk {
  // Primary disk for asynchronous disk replication.
  Disk?: string;
}

export function Compute_RegionDiskAsyncPrimaryDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Disk",
      "Primary disk for asynchronous disk replication.",
      [],
      true,
      true,
    ),
  ];
}
