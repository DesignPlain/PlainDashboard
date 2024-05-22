import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_InstanceScratchDisk {
  /*
Name with which the attached disk will be accessible
under `/dev/disk/by-id/google--`
*/
  deviceName?: string;

  // The disk interface to use for attaching this disk; either SCSI or NVME.
  interface?: string;

  /*
The size of the image in gigabytes. If not specified, it
will inherit the size of its base image.
*/
  size?: number;
}

export function compute_InstanceScratchDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "size",
      "The size of the image in gigabytes. If not specified, it\nwill inherit the size of its base image.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Name with which the attached disk will be accessible\nunder `/dev/disk/by-id/google-*`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "interface",
      "The disk interface to use for attaching this disk; either SCSI or NVME.",
      [],
      true,
      false,
    ),
  ];
}
