export interface ClusterAuthenticatorGroupsConfig {
  // The name of the RBAC security group for use with Google security groups in Kubernetes RBAC. Group name must be in format `gke-security-groups@yourdomain.com`.
  SecurityGroup?: string;
}
