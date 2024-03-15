import { HostingCustomDomainCertVerificationDnsDiscoveredRecord } from "./HostingCustomDomainCertVerificationDnsDiscoveredRecord";

export interface HostingCustomDomainCertVerificationDnsDiscovered {
  /*
Records on the domain
Structure is documented below.
*/
  Records?: Array<HostingCustomDomainCertVerificationDnsDiscoveredRecord>;

  // The domain name the record pertains to, e.g. `foo.bar.com.`.
  DomainName?: string;
}
