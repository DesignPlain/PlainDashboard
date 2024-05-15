import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getReservationSpecificReservationInstancePropertyLocalSsd,
  Compute_getReservationSpecificReservationInstancePropertyLocalSsd_GetTypes,
} from "./Compute_getReservationSpecificReservationInstancePropertyLocalSsd";
import {
  Compute_getReservationSpecificReservationInstancePropertyGuestAccelerator,
  Compute_getReservationSpecificReservationInstancePropertyGuestAccelerator_GetTypes,
} from "./Compute_getReservationSpecificReservationInstancePropertyGuestAccelerator";

export interface Compute_getReservationSpecificReservationInstanceProperty {
  /*
The amount of local ssd to reserve with each instance. This
reserves disks of type 'local-ssd'.
*/
  LocalSsds?: Array<Compute_getReservationSpecificReservationInstancePropertyLocalSsd>;

  // The name of the machine type to reserve.
  MachineType?: string;

  /*
The minimum CPU platform for the reservation. For example,
'"Intel Skylake"'. See
the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)
for information on available CPU platforms.
*/
  MinCpuPlatform?: string;

  // Guest accelerator type and count.
  GuestAccelerators?: Array<Compute_getReservationSpecificReservationInstancePropertyGuestAccelerator>;
}

export function Compute_getReservationSpecificReservationInstanceProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MachineType",
      "The name of the machine type to reserve.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinCpuPlatform",
      "The minimum CPU platform for the reservation. For example,\n'\"Intel Skylake\"'. See\nthe CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)\nfor information on available CPU platforms.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "GuestAccelerators",
      "Guest accelerator type and count.",
      Compute_getReservationSpecificReservationInstancePropertyGuestAccelerator_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "LocalSsds",
      "The amount of local ssd to reserve with each instance. This\nreserves disks of type 'local-ssd'.",
      Compute_getReservationSpecificReservationInstancePropertyLocalSsd_GetTypes(),
      true,
      false,
    ),
  ];
}
