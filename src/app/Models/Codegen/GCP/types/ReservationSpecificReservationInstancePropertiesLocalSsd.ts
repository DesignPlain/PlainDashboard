export interface ReservationSpecificReservationInstancePropertiesLocalSsd {
  /*
The size of the disk in base-2 GB.

- - -
*/
  DiskSizeGb?: number;

  /*
The disk interface to use for attaching this disk.
Default value is `SCSI`.
Possible values are: `SCSI`, `NVME`.
*/
  Interface?: string;
}
