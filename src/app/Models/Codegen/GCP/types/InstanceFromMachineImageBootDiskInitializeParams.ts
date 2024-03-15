export interface InstanceFromMachineImageBootDiskInitializeParams {
  // A flag to enable confidential compute mode on boot disk
  EnableConfidentialCompute?: boolean;

  // The image from which this disk was initialised.
  Image?: string;

  // A set of key/value label pairs assigned to the disk.
  Labels?: Map<string, string>;

  // Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle.
  ProvisionedIops?: number;

  // Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle.
  ProvisionedThroughput?: number;

  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  ResourceManagerTags?: Map<string, string>;

  // The size of the image in gigabytes.
  Size?: number;

  // The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced.
  Type?: string;
}
