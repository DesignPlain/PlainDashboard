export interface SpokeLinkedVpcNetwork {
  // IP ranges encompassing the subnets to be excluded from peering.
  ExcludeExportRanges?: Array<string>;

  // The URI of the VPC network resource.
  Uri?: string;
}
