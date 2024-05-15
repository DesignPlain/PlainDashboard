import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_getBucketAutoclass {
  // While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.
  Enabled?: boolean;

  // The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. Supported values include: NEARLINE, ARCHIVE.
  TerminalStorageClass?: string;
}

export function Storage_getBucketAutoclass_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TerminalStorageClass",
      "The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. Supported values include: NEARLINE, ARCHIVE.",
      [],
      true,
      false,
    ),
  ];
}
