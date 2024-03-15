export interface ReservationSpecificReservationInstancePropertiesGuestAccelerator {
  /*
The full or partial URL of the accelerator type to
attach to this instance. For example:
`projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100`
If you are creating an instance template, specify only the accelerator name.
*/
  AcceleratorType?: string;

  /*
The number of the guest accelerator cards exposed to
this instance.
*/
  AcceleratorCount?: number;
}
