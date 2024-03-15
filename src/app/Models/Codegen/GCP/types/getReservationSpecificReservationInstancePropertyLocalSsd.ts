export interface getReservationSpecificReservationInstancePropertyLocalSsd {
  // The size of the disk in base-2 GB.
  DiskSizeGb?: number;

  // The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"]
  Interface?: string;
}
