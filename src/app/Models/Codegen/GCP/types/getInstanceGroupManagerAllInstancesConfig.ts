export interface getInstanceGroupManagerAllInstancesConfig {
  // The label key-value pairs that you want to patch onto the instance,
  Labels?: Map<string, string>;

  // The metadata key-value pairs that you want to patch onto the instance. For more information, see Project and instance metadata,
  Metadata?: Map<string, string>;
}
