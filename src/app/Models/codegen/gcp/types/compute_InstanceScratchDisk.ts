import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

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
      InputType.String,
      'deviceName',
      'Name with which the attached disk will be accessible\nunder `/dev/disk/by-id/google-*`',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'interface',
      'The disk interface to use for attaching this disk; either SCSI or NVME.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'size',
      'The size of the image in gigabytes. If not specified, it\nwill inherit the size of its base image.',
      () => [],
      false,
      true,
    ),
  ];
}
