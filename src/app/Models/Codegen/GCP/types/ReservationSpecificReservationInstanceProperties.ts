import { ReservationSpecificReservationInstancePropertiesGuestAccelerator } from "./ReservationSpecificReservationInstancePropertiesGuestAccelerator";
import { ReservationSpecificReservationInstancePropertiesLocalSsd } from "./ReservationSpecificReservationInstancePropertiesLocalSsd";

export interface ReservationSpecificReservationInstanceProperties {
  /*
Guest accelerator type and count.
Structure is documented below.
*/
  GuestAccelerators?: Array<ReservationSpecificReservationInstancePropertiesGuestAccelerator>;

  /*
The amount of local ssd to reserve with each instance. This
reserves disks of type `local-ssd`.
Structure is documented below.
*/
  LocalSsds?: Array<ReservationSpecificReservationInstancePropertiesLocalSsd>;

  // The name of the machine type to reserve.
  MachineType?: string;

  /*
The minimum CPU platform for the reservation. For example,
`"Intel Skylake"`. See
the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)
for information on available CPU platforms.
*/
  MinCpuPlatform?: string;
}
