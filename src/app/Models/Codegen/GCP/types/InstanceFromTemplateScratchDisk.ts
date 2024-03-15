export interface InstanceFromTemplateScratchDisk {
  // Name with which the attached disk is accessible under /dev/disk/by-id/
  DeviceName?: string;

  // The disk interface used for attaching this disk. One of SCSI or NVME.
  Interface?: string;

  // The size of the disk in gigabytes. One of 375 or 3000.
  Size?: number;
}
