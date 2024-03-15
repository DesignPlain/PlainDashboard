export interface getMachineTypesMachineTypeAccelerator {
  // Number of accelerator cards exposed to the guest.
  GuestAcceleratorCount?: number;

  // The accelerator type resource name, not a full URL, e.g. `nvidia-tesla-t4`.
  GuestAcceleratorType?: string;
}
