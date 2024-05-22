import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface tpu_V2VmDataDisk {
  /*
The mode in which to attach this disk. If not specified, the default is READ_WRITE
mode. Only applicable to dataDisks.
Default value is `READ_WRITE`.
Possible values are: `READ_WRITE`, `READ_ONLY`.
*/
  mode?: string;

  /*
Specifies the full path to an existing disk. For example:
"projects/my-project/zones/us-central1-c/disks/my-disk".
*/
  sourceDisk?: string;
}

export function tpu_V2VmDataDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mode",
      "The mode in which to attach this disk. If not specified, the default is READ_WRITE\nmode. Only applicable to dataDisks.\nDefault value is `READ_WRITE`.\nPossible values are: `READ_WRITE`, `READ_ONLY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceDisk",
      'Specifies the full path to an existing disk. For example:\n"projects/my-project/zones/us-central1-c/disks/my-disk".',
      [],
      true,
      false,
    ),
  ];
}
