export interface InstanceScratchDisk {
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
