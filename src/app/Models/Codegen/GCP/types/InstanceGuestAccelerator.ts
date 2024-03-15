export interface InstanceGuestAccelerator {
  // The number of the guest accelerator cards exposed to this instance.
  Count?: number;

  // The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.
  Type?: string;
}
