export interface InstanceAdvancedMachineFeatures {
  // The number of physical cores to expose to an instance. [visible cores info (VC)](https://cloud.google.com/compute/docs/instances/customize-visible-cores).
  VisibleCoreCount?: number;

  // Defines whether the instance should have nested virtualization  enabled. Defaults to false.
  EnableNestedVirtualization?: boolean;

  // he number of threads per physical core. To disable [simultaneous multithreading (SMT)](https://cloud.google.com/compute/docs/instances/disabling-smt) set this to 1.
  ThreadsPerCore?: number;
}
