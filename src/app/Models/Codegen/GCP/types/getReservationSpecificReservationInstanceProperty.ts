import { getReservationSpecificReservationInstancePropertyGuestAccelerator } from "./getReservationSpecificReservationInstancePropertyGuestAccelerator";
import { getReservationSpecificReservationInstancePropertyLocalSsd } from "./getReservationSpecificReservationInstancePropertyLocalSsd";

export interface getReservationSpecificReservationInstanceProperty {
  // Guest accelerator type and count.
  GuestAccelerators?: Array<getReservationSpecificReservationInstancePropertyGuestAccelerator>;

  /*
The amount of local ssd to reserve with each instance. This
reserves disks of type 'local-ssd'.
*/
  LocalSsds?: Array<getReservationSpecificReservationInstancePropertyLocalSsd>;

  // The name of the machine type to reserve.
  MachineType?: string;

  /*
The minimum CPU platform for the reservation. For example,
'"Intel Skylake"'. See
the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)
for information on available CPU platforms.
*/
  MinCpuPlatform?: string;
}
