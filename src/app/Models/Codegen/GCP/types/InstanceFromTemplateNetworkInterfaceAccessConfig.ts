export interface InstanceFromTemplateNetworkInterfaceAccessConfig {
  // The IP address that is be 1:1 mapped to the instance's network ip.
  NatIp?: string;

  // The networking tier used for configuring this instance. One of PREMIUM or STANDARD.
  NetworkTier?: string;

  // The DNS domain name for the public PTR record.
  PublicPtrDomainName?: string;

  // A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  SecurityPolicy?: string;
}
