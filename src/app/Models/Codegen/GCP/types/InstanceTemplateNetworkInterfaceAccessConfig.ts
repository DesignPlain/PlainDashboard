export interface InstanceTemplateNetworkInterfaceAccessConfig {
  /*
The IP address that will be 1:1 mapped to the instance's
network ip. If not given, one will be generated.
*/
  NatIp?: string;

  /*
The service-level to be provided for IPv6 traffic when the
subnet has an external subnet. Only PREMIUM and STANDARD tier is valid for IPv6.
*/
  NetworkTier?: string;

  // The DNS domain name for the public PTR record.The DNS domain name for the public PTR record.
  PublicPtrDomainName?: string;
}
