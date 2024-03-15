export interface getInstanceScratchDisk {
  // The size of the image in gigabytes.
  Size?: number;

  /*
Name with which the attached disk is accessible
under `/dev/disk/by-id/`
*/
  DeviceName?: string;

  // The disk interface used for attaching this disk. One of `SCSI` or `NVME`.
  Interface?: string;
}
