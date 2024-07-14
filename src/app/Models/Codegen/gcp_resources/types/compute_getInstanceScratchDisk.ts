import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_getInstanceScratchDisk {
  /*
Name with which the attached disk is accessible
under `/dev/disk/by-id/`
*/
  deviceName?: string;

  // The disk interface used for attaching this disk. One of `SCSI` or `NVME`.
  interface?: string;

  // The size of the image in gigabytes.
  size?: number;
}

export function compute_getInstanceScratchDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Name with which the attached disk is accessible\nunder `/dev/disk/by-id/`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "interface",
      "The disk interface used for attaching this disk. One of `SCSI` or `NVME`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "size",
      "The size of the image in gigabytes.",
      [],
      true,
      false,
    ),
  ];
}
