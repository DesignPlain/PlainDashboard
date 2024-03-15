export interface InstanceGceSetupBootDisk {
  /*
Optional. Input only. Disk encryption method used on the boot and
data disks, defaults to GMEK.
Possible values are: `GMEK`, `CMEK`.
*/
  DiskEncryption?: string;

  /*
Optional. The size of the boot disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to the
recommended value of 150GB.
*/
  DiskSizeGb?: string;

  /*
Optional. Indicates the type of the disk.
Possible values are: `PD_STANDARD`, `PD_SSD`, `PD_BALANCED`, `PD_EXTREME`.
*/
  DiskType?: string;

  /*
'Optional. The KMS key used to encrypt the disks, only
applicable if disk_encryption is CMEK. Format: `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}`
Learn more about using your own encryption keys.'
*/
  KmsKey?: string;
}
