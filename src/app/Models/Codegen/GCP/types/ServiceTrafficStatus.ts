export interface ServiceTrafficStatus {
  /*
The allocation type for this traffic target.
Possible values are: `TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST`, `TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION`.
*/
  Type?: string;

  /*
(Output)
Displays the target URI.
*/
  Uri?: string;

  // Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.
  Percent?: number;

  // The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name.
  Revision?: string;

  // Indicates a string to be part of the URI to exclusively reference this target.
  Tag?: string;
}
