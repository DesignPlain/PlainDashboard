export interface getClusterTpuConfig {
  // Whether Cloud TPU integration is enabled or not
  Enabled?: boolean;

  // IPv4 CIDR block reserved for Cloud TPU in the VPC.
  Ipv4CidrBlock?: string;

  // Whether to use service networking for Cloud TPU or not
  UseServiceNetworking?: boolean;
}
