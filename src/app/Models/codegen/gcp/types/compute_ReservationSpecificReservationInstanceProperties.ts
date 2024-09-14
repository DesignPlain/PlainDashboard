import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_ReservationSpecificReservationInstancePropertiesGuestAccelerator,
  compute_ReservationSpecificReservationInstancePropertiesGuestAccelerator_GetTypes,
} from "./compute_ReservationSpecificReservationInstancePropertiesGuestAccelerator";
import {
  compute_ReservationSpecificReservationInstancePropertiesLocalSsd,
  compute_ReservationSpecificReservationInstancePropertiesLocalSsd_GetTypes,
} from "./compute_ReservationSpecificReservationInstancePropertiesLocalSsd";

export interface compute_ReservationSpecificReservationInstanceProperties {
  /*
Guest accelerator type and count.
Structure is documented below.
*/
  guestAccelerators?: Array<compute_ReservationSpecificReservationInstancePropertiesGuestAccelerator>;

  /*
The amount of local ssd to reserve with each instance. This
reserves disks of type `local-ssd`.
Structure is documented below.
*/
  localSsds?: Array<compute_ReservationSpecificReservationInstancePropertiesLocalSsd>;

  // The name of the machine type to reserve.
  machineType?: string;

  /*
The minimum CPU platform for the reservation. For example,
`"Intel Skylake"`. See
the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)
for information on available CPU platforms.
*/
  minCpuPlatform?: string;
}

export function compute_ReservationSpecificReservationInstanceProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "guestAccelerators",
      "Guest accelerator type and count.\nStructure is documented below.",
      () =>
        compute_ReservationSpecificReservationInstancePropertiesGuestAccelerator_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "localSsds",
      "The amount of local ssd to reserve with each instance. This\nreserves disks of type `local-ssd`.\nStructure is documented below.",
      () =>
        compute_ReservationSpecificReservationInstancePropertiesLocalSsd_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "The name of the machine type to reserve.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "minCpuPlatform",
      'The minimum CPU platform for the reservation. For example,\n`"Intel Skylake"`. See\nthe CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)\nfor information on available CPU platforms.',
      () => [],
      false,
      true,
    ),
  ];
}
