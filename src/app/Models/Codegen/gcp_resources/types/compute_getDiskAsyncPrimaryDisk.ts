import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_getDiskAsyncPrimaryDisk {
  // Primary disk for asynchronous disk replication.
  disk?: string;
}

export function compute_getDiskAsyncPrimaryDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "disk",
      "Primary disk for asynchronous disk replication.",
      [],
      true,
      false,
    ),
  ];
}
