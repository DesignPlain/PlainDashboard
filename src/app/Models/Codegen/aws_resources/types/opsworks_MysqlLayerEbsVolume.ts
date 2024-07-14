import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface opsworks_MysqlLayerEbsVolume {
  // The RAID level to use for the volume.
  raidLevel?: string;

  // The size of the volume in gigabytes.
  size?: number;

  // The type of volume to create. This may be `standard` (the default), `io1` or `gp2`.
  type?: string;

  //
  encrypted?: boolean;

  // For PIOPS volumes, the IOPS per disk.
  iops?: number;

  // The path to mount the EBS volume on the layer's instances.
  mountPoint?: string;

  // The number of disks to use for the EBS volume.
  numberOfDisks?: number;
}

export function opsworks_MysqlLayerEbsVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "encrypted", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "For PIOPS volumes, the IOPS per disk.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mountPoint",
      "The path to mount the EBS volume on the layer's instances.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numberOfDisks",
      "The number of disks to use for the EBS volume.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "raidLevel",
      "The RAID level to use for the volume.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "size",
      "The size of the volume in gigabytes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of volume to create. This may be `standard` (the default), `io1` or `gp2`.",
      [],
      false,
      false,
    ),
  ];
}
