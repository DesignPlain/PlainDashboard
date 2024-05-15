import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Tpu_V2VmDataDisk {
  /*
The mode in which to attach this disk. If not specified, the default is READ_WRITE
mode. Only applicable to dataDisks.
Default value is `READ_WRITE`.
Possible values are: `READ_WRITE`, `READ_ONLY`.
*/
  Mode?: string;

  /*
Specifies the full path to an existing disk. For example:
"projects/my-project/zones/us-central1-c/disks/my-disk".
*/
  SourceDisk?: string;
}

export function Tpu_V2VmDataDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Mode",
      "The mode in which to attach this disk. If not specified, the default is READ_WRITE\nmode. Only applicable to dataDisks.\nDefault value is `READ_WRITE`.\nPossible values are: `READ_WRITE`, `READ_ONLY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceDisk",
      'Specifies the full path to an existing disk. For example:\n"projects/my-project/zones/us-central1-c/disks/my-disk".',
      [],
      true,
      false,
    ),
  ];
}
