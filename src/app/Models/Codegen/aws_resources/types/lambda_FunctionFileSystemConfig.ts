import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lambda_FunctionFileSystemConfig {
  // Amazon Resource Name (ARN) of the Amazon EFS Access Point that provides access to the file system.
  arn?: string;

  // Path where the function can access the file system, starting with /mnt/.
  localMountPath?: string;
}

export function lambda_FunctionFileSystemConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "Amazon Resource Name (ARN) of the Amazon EFS Access Point that provides access to the file system.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "localMountPath",
      "Path where the function can access the file system, starting with /mnt/.",
      [],
      true,
      false,
    ),
  ];
}
