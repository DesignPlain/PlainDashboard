import { HostingCustomDomainCertVerificationDnsDesiredRecord } from "./HostingCustomDomainCertVerificationDnsDesiredRecord";

export interface HostingCustomDomainCertVerificationDnsDesired {
  // The domain name the record pertains to, e.g. `foo.bar.com.`.
  DomainName?: string;

  /*
Records on the domain
Structure is documented below.
*/
  Records?: Array<HostingCustomDomainCertVerificationDnsDesiredRecord>;
}
