export interface VMwareClusterNetworkConfigHostConfig {
  /*
DNS search domains.

<a name="nested_control_plane_v2_config"></a>The `control_plane_v2_config` block supports:
*/
  DnsSearchDomains?: Array<string>;

  // DNS servers.
  DnsServers?: Array<string>;

  // NTP servers.
  NtpServers?: Array<string>;
}
