import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Workbench_InstanceGceSetupDataDisks {
  /*
'Optional. The KMS key used to encrypt the disks,
only applicable if disk_encryption is CMEK. Format: `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}`
Learn more about using your own encryption keys.'
*/
  KmsKey?: string;

  /*
Optional. Input only. Disk encryption method used on the boot
and data disks, defaults to GMEK.
Possible values are: `GMEK`, `CMEK`.
*/
  DiskEncryption?: string;

  /*
Optional. The size of the disk in GB attached to this VM instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to
100.
*/
  DiskSizeGb?: string;

  /*
Optional. Input only. Indicates the type of the disk.
Possible values are: `PD_STANDARD`, `PD_SSD`, `PD_BALANCED`, `PD_EXTREME`.
*/
  DiskType?: string;
}

export function Workbench_InstanceGceSetupDataDisks_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKey",
      "'Optional. The KMS key used to encrypt the disks,\nonly applicable if disk_encryption is CMEK. Format: `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}`\nLearn more about using your own encryption keys.'",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskEncryption",
      "Optional. Input only. Disk encryption method used on the boot\nand data disks, defaults to GMEK.\nPossible values are: `GMEK`, `CMEK`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskSizeGb",
      "Optional. The size of the disk in GB attached to this VM instance,\nup to a maximum of 64000 GB (64 TB). If not specified, this defaults to\n100.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskType",
      "Optional. Input only. Indicates the type of the disk.\nPossible values are: `PD_STANDARD`, `PD_SSD`, `PD_BALANCED`, `PD_EXTREME`.",
      [],
      false,
      true,
    ),
  ];
}
