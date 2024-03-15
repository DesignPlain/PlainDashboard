export interface ClusterTpuConfig {
  // Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.
  Enabled?: boolean;

  // IPv4 CIDR block reserved for Cloud TPU in the VPC.
  Ipv4CidrBlock?: string;

  // Whether to use service networking for Cloud TPU or not
  UseServiceNetworking?: boolean;
}
