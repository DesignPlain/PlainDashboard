import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_InstanceFromTemplateScratchDisk {
  // The size of the disk in gigabytes. One of 375 or 3000.
  size?: number;

  // Name with which the attached disk is accessible under /dev/disk/by-id/
  deviceName?: string;

  // The disk interface used for attaching this disk. One of SCSI or NVME.
  interface?: string;
}

export function compute_InstanceFromTemplateScratchDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'size',
      'The size of the disk in gigabytes. One of 375 or 3000.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'deviceName',
      'Name with which the attached disk is accessible under /dev/disk/by-id/',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'interface',
      'The disk interface used for attaching this disk. One of SCSI or NVME.',
      () => [],
      true,
      false,
    ),
  ];
}
