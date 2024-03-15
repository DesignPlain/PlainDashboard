export interface InstanceFromMachineImageAdvancedMachineFeatures {
  // Whether to enable nested virtualization or not.
  EnableNestedVirtualization?: boolean;

  // The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  ThreadsPerCore?: number;

  // The number of physical cores to expose to an instance. Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance\'s nominal CPU count and the underlying platform\'s SMT width.
  VisibleCoreCount?: number;
}
