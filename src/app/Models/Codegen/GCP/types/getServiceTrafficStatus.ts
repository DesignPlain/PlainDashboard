export interface getServiceTrafficStatus {
  // Specifies percent of the traffic to this Revision.
  Percent?: number;

  // Revision to which this traffic is sent.
  Revision?: string;

  // Indicates the string used in the URI to exclusively reference this target.
  Tag?: string;

  // The allocation type for this traffic target.
  Type?: string;

  // Displays the target URI.
  Uri?: string;
}
