export interface EngineSplitTrafficSplit {
  /*
Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.

- - -
*/
  Allocations?: Map<string, string>;

  /*
Mechanism used to determine which version a request is sent to. The traffic selection algorithm will be stable for either type until allocations are changed.
Possible values are: `UNSPECIFIED`, `COOKIE`, `IP`, `RANDOM`.
*/
  ShardBy?: string;
}
