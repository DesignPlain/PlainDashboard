export interface RegionSecurityPolicyDdosProtectionConfig {
  /*
Google Cloud Armor offers the following options to help protect systems against DDoS attacks:
- STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses.
- ADVANCED: additional protections for Managed Protection Plus subscribers who use network load balancers, protocol forwarding, or VMs with public IP addresses.
- ADVANCED_PREVIEW: flag to enable the security policy in preview mode.
Possible values are: `ADVANCED`, `ADVANCED_PREVIEW`, `STANDARD`.
*/
  DdosProtection?: string;
}
