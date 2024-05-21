import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_getReservationSpecificReservationInstancePropertyGuestAccelerator,
  compute_getReservationSpecificReservationInstancePropertyGuestAccelerator_GetTypes,
} from "./compute_getReservationSpecificReservationInstancePropertyGuestAccelerator";
import {
  compute_getReservationSpecificReservationInstancePropertyLocalSsd,
  compute_getReservationSpecificReservationInstancePropertyLocalSsd_GetTypes,
} from "./compute_getReservationSpecificReservationInstancePropertyLocalSsd";

export interface compute_getReservationSpecificReservationInstanceProperty {
  // Guest accelerator type and count.
  guestAccelerators?: Array<compute_getReservationSpecificReservationInstancePropertyGuestAccelerator>;

  /*
The amount of local ssd to reserve with each instance. This
reserves disks of type 'local-ssd'.
*/
  localSsds?: Array<compute_getReservationSpecificReservationInstancePropertyLocalSsd>;

  // The name of the machine type to reserve.
  machineType?: string;

  /*
The minimum CPU platform for the reservation. For example,
'"Intel Skylake"'. See
the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)
for information on available CPU platforms.
*/
  minCpuPlatform?: string;
}

export function compute_getReservationSpecificReservationInstanceProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "localSsds",
      "The amount of local ssd to reserve with each instance. This\nreserves disks of type 'local-ssd'.",
      compute_getReservationSpecificReservationInstancePropertyLocalSsd_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "The name of the machine type to reserve.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "minCpuPlatform",
      "The minimum CPU platform for the reservation. For example,\n'\"Intel Skylake\"'. See\nthe CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)\nfor information on available CPU platforms.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "guestAccelerators",
      "Guest accelerator type and count.",
      compute_getReservationSpecificReservationInstancePropertyGuestAccelerator_GetTypes(),
      true,
      false,
    ),
  ];
}
