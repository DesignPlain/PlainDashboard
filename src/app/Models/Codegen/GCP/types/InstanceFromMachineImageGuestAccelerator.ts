export interface InstanceFromMachineImageGuestAccelerator {
  // The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80.
  Type?: string;

  // The number of the guest accelerator cards exposed to this instance.
  Count?: number;
}
