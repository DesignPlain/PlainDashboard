import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_getBucketAutoclass {
  // While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.
  enabled?: boolean;

  // The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. Supported values include: NEARLINE, ARCHIVE.
  terminalStorageClass?: string;
}

export function storage_getBucketAutoclass_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "terminalStorageClass",
      "The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. Supported values include: NEARLINE, ARCHIVE.",
      [],
      true,
      false,
    ),
  ];
}
