export interface getGlobalForwardingRuleServiceDirectoryRegistration {
  /*
[Optional] Service Directory region to register this global forwarding rule under.
Default to "us-central1". Only used for PSC for Google APIs. All PSC for
Google APIs Forwarding Rules on the same network should use the same Service
Directory region.
*/
  ServiceDirectoryRegion?: string;

  // Service Directory namespace to register the forwarding rule under.
  Namespace?: string;
}
