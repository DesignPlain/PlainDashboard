export interface InstanceFromTemplateNetworkInterfaceIpv6AccessConfig {
  // The service-level to be provided for IPv6 traffic when the subnet has an external subnet. Only PREMIUM tier is valid for IPv6
  NetworkTier?: string;

  // The domain name to be used when creating DNSv6 records for the external IPv6 ranges.
  PublicPtrDomainName?: string;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  SecurityPolicy?: string;

  // The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.
  ExternalIpv6?: string;

  // The prefix length of the external IPv6 range.
  ExternalIpv6PrefixLength?: string;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  Name?: string;
}
