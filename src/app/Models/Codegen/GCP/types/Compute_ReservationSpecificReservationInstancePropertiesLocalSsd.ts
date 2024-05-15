import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_ReservationSpecificReservationInstancePropertiesLocalSsd {
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

export function Compute_ReservationSpecificReservationInstancePropertiesLocalSsd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Interface",
      "The disk interface to use for attaching this disk.\nDefault value is `SCSI`.\nPossible values are: `SCSI`, `NVME`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DiskSizeGb",
      "The size of the disk in base-2 GB.\n\n- - -",
      [],
      true,
      true,
    ),
  ];
}
