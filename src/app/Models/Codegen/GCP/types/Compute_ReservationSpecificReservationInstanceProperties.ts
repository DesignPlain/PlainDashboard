import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_ReservationSpecificReservationInstancePropertiesGuestAccelerator,
  Compute_ReservationSpecificReservationInstancePropertiesGuestAccelerator_GetTypes,
} from "./Compute_ReservationSpecificReservationInstancePropertiesGuestAccelerator";
import {
  Compute_ReservationSpecificReservationInstancePropertiesLocalSsd,
  Compute_ReservationSpecificReservationInstancePropertiesLocalSsd_GetTypes,
} from "./Compute_ReservationSpecificReservationInstancePropertiesLocalSsd";

export interface Compute_ReservationSpecificReservationInstanceProperties {
  /*
The minimum CPU platform for the reservation. For example,
`"Intel Skylake"`. See
the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)
for information on available CPU platforms.
*/
  MinCpuPlatform?: string;

  /*
Guest accelerator type and count.
Structure is documented below.
*/
  GuestAccelerators?: Array<Compute_ReservationSpecificReservationInstancePropertiesGuestAccelerator>;

  /*
The amount of local ssd to reserve with each instance. This
reserves disks of type `local-ssd`.
Structure is documented below.
*/
  LocalSsds?: Array<Compute_ReservationSpecificReservationInstancePropertiesLocalSsd>;

  // The name of the machine type to reserve.
  MachineType?: string;
}

export function Compute_ReservationSpecificReservationInstanceProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "GuestAccelerators",
      "Guest accelerator type and count.\nStructure is documented below.",
      Compute_ReservationSpecificReservationInstancePropertiesGuestAccelerator_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "LocalSsds",
      "The amount of local ssd to reserve with each instance. This\nreserves disks of type `local-ssd`.\nStructure is documented below.",
      Compute_ReservationSpecificReservationInstancePropertiesLocalSsd_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "MachineType",
      "The name of the machine type to reserve.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinCpuPlatform",
      'The minimum CPU platform for the reservation. For example,\n`"Intel Skylake"`. See\nthe CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)\nfor information on available CPU platforms.',
      [],
      false,
      true,
    ),
  ];
}
