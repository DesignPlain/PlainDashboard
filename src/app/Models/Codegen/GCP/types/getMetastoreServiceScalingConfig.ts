export interface getMetastoreServiceScalingConfig {
  // Metastore instance sizes. Possible values: ["EXTRA_SMALL", "SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"]
  InstanceSize?: string;

  // Scaling factor, in increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.
  ScalingFactor?: number;
}
