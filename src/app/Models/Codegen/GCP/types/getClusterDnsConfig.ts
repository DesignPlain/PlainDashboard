export interface getClusterDnsConfig {
  // Which in-cluster DNS provider should be used.
  ClusterDns?: string;

  // The suffix used for all cluster service records.
  ClusterDnsDomain?: string;

  // The scope of access to cluster DNS records.
  ClusterDnsScope?: string;
}
