import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface efs_FileSystemSizeInByte {
  // The latest known metered size (in bytes) of data stored in the file system.
  value?: number;

  // The latest known metered size (in bytes) of data stored in the Infrequent Access storage class.
  valueInIa?: number;

  // The latest known metered size (in bytes) of data stored in the Standard storage class.
  valueInStandard?: number;
}

export function efs_FileSystemSizeInByte_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "value",
      "The latest known metered size (in bytes) of data stored in the file system.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "valueInIa",
      "The latest known metered size (in bytes) of data stored in the Infrequent Access storage class.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "valueInStandard",
      "The latest known metered size (in bytes) of data stored in the Standard storage class.",
      () => [],
      false,
      false,
    ),
  ];
}
