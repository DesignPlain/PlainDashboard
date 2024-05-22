import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_getReservationSpecificReservationInstancePropertyLocalSsd {
  // The size of the disk in base-2 GB.
  diskSizeGb?: number;

  // The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"]
  interface?: string;
}

export function compute_getReservationSpecificReservationInstancePropertyLocalSsd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "diskSizeGb",
      "The size of the disk in base-2 GB.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "interface",
      'The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"]',
      [],
      true,
      false,
    ),
  ];
}
