import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_AppImageConfigKernelGatewayImageConfigFileSystemConfig {
  // The default POSIX group ID (GID). If not specified, defaults to `100`. Valid values are `0` and `100`.
  defaultGid?: number;

  // The default POSIX user ID (UID). If not specified, defaults to `1000`. Valid values are `0` and `1000`.
  defaultUid?: number;

  /*
The path within the image to mount the user's EFS home directory. The directory should be empty. If not specified, defaults to `/home/sagemaker-user`.

> --Note:-- When specifying `default_gid` and `default_uid`, Valid value pairs are [`0`, `0`] and [`100`, `1000`].
*/
  mountPath?: string;
}

export function sagemaker_AppImageConfigKernelGatewayImageConfigFileSystemConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mountPath",
      "The path within the image to mount the user's EFS home directory. The directory should be empty. If not specified, defaults to `/home/sagemaker-user`.\n\n> **Note:** When specifying `default_gid` and `default_uid`, Valid value pairs are [`0`, `0`] and [`100`, `1000`].",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "defaultGid",
      "The default POSIX group ID (GID). If not specified, defaults to `100`. Valid values are `0` and `100`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "defaultUid",
      "The default POSIX user ID (UID). If not specified, defaults to `1000`. Valid values are `0` and `1000`.",
      [],
      false,
      false,
    ),
  ];
}
