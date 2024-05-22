import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface efs_getFileSystemLifecyclePolicy {
  //
  transitionToArchive?: string;

  //
  transitionToIa?: string;

  //
  transitionToPrimaryStorageClass?: string;
}

export function efs_getFileSystemLifecyclePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "transitionToArchive",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "transitionToIa", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "transitionToPrimaryStorageClass",
      "",
      [],
      true,
      false,
    ),
  ];
}
