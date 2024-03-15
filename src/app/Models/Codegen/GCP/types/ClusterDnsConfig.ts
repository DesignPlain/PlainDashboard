export interface ClusterDnsConfig {
  // The scope of access to cluster DNS records. `DNS_SCOPE_UNSPECIFIED` (default) or `CLUSTER_SCOPE` or `VPC_SCOPE`.
  ClusterDnsScope?: string;

  // Which in-cluster DNS provider should be used. `PROVIDER_UNSPECIFIED` (default) or `PLATFORM_DEFAULT` or `CLOUD_DNS`.
  ClusterDns?: string;

  // The suffix used for all cluster service records.
  ClusterDnsDomain?: string;
}
