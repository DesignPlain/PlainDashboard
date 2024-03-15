export interface StandardAppVersionBasicScaling {
  /*
Duration of time after the last request that an instance must wait before the instance is shut down.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
*/
  IdleTimeout?: string;

  // Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].
  MaxInstances?: number;
}
