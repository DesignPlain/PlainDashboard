import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceFromTemplateScratchDisk {
  // Name with which the attached disk is accessible under /dev/disk/by-id/
  DeviceName?: string;

  // The disk interface used for attaching this disk. One of SCSI or NVME.
  Interface?: string;

  // The size of the disk in gigabytes. One of 375 or 3000.
  Size?: number;
}

export function Compute_InstanceFromTemplateScratchDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DeviceName",
      "Name with which the attached disk is accessible under /dev/disk/by-id/",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Interface",
      "The disk interface used for attaching this disk. One of SCSI or NVME.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Size",
      "The size of the disk in gigabytes. One of 375 or 3000.",
      [],
      false,
      true,
    ),
  ];
}
