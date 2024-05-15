import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_TransferJobTransferSpecPosixDataSink {
  // Root directory path to the filesystem.
  RootDirectory?: string;
}

export function Storage_TransferJobTransferSpecPosixDataSink_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RootDirectory",
      "Root directory path to the filesystem.",
      [],
      true,
      false,
    ),
  ];
}
