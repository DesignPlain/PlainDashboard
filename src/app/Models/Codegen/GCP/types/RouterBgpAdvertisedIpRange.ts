export interface RouterBgpAdvertisedIpRange {
  // User-specified description for the IP range.
  Description?: string;

  /*
The IP range to advertise. The value must be a
CIDR-formatted string.
*/
  Range?: string;
}
