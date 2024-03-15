export interface RegionInstanceGroupManagerAllInstancesConfig {
  // , The metadata key-value pairs that you want to patch onto the instance. For more information, see [Project and instance metadata](https://cloud.google.com/compute/docs/metadata#project_and_instance_metadata).
  Metadata?: Map<string, string>;

  /*
, The label key-value pairs that you want to patch onto the instance.

- - -
*/
  Labels?: Map<string, string>;
}
