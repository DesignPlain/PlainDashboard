export interface getServiceTraffic {
  // Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.
  Percent?: number;

  // Revision to which to send this portion of traffic, if traffic allocation is by revision.
  Revision?: string;

  // Indicates a string to be part of the URI to exclusively reference this target.
  Tag?: string;

  // The allocation type for this traffic target. Possible values: ["TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST", "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"]
  Type?: string;
}
