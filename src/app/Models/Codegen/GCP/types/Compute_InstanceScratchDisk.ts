import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceScratchDisk {
  /*
Name with which the attached disk will be accessible
under `/dev/disk/by-id/google--`
*/
  DeviceName?: string;

  // The disk interface to use for attaching this disk; either SCSI or NVME.
  Interface?: string;

  /*
The size of the image in gigabytes. If not specified, it
will inherit the size of its base image.
*/
  Size?: number;
}

export function Compute_InstanceScratchDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DeviceName",
      "Name with which the attached disk will be accessible\nunder `/dev/disk/by-id/google-*`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Interface",
      "The disk interface to use for attaching this disk; either SCSI or NVME.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Size",
      "The size of the image in gigabytes. If not specified, it\nwill inherit the size of its base image.",
      [],
      false,
      true,
    ),
  ];
}
