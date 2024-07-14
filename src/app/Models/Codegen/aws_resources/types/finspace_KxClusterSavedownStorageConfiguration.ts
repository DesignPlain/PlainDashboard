import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface finspace_KxClusterSavedownStorageConfiguration {
  // Size of temporary storage in gigabytes. Must be between 10 and 16000.
  size?: number;

  /*
Type of writeable storage space for temporarily storing your savedown data. The valid values are:
- SDS01 - This type represents 3000 IOPS and io2 ebs volume type.
*/
  type?: string;

  // The name of the kdb volume that you want to use as writeable save-down storage for clusters.
  volumeName?: string;
}

export function finspace_KxClusterSavedownStorageConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "size",
      "Size of temporary storage in gigabytes. Must be between 10 and 16000.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of writeable storage space for temporarily storing your savedown data. The valid values are:\n* SDS01 - This type represents 3000 IOPS and io2 ebs volume type.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "volumeName",
      "The name of the kdb volume that you want to use as writeable save-down storage for clusters.",
      [],
      false,
      true,
    ),
  ];
}
