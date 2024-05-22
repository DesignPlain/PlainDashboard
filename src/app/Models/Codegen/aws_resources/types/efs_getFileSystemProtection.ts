import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface efs_getFileSystemProtection {
  //
  replicationOverwrite?: string;
}

export function efs_getFileSystemProtection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "replicationOverwrite",
      "",
      [],
      true,
      false,
    ),
  ];
}
