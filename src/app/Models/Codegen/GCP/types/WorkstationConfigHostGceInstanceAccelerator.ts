export interface WorkstationConfigHostGceInstanceAccelerator {
  // Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".
  Type?: string;

  // Number of accelerator cards exposed to the instance.
  Count?: number;
}
