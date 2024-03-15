import { HostingCustomDomainCertVerificationDnsDesired } from "./HostingCustomDomainCertVerificationDnsDesired";
import { HostingCustomDomainCertVerificationDnsDiscovered } from "./HostingCustomDomainCertVerificationDnsDiscovered";

export interface HostingCustomDomainCertVerificationDns {
  // A text string to serve at the path.
  Desireds?: Array<HostingCustomDomainCertVerificationDnsDesired>;

  /*
Whether Hosting was able to find the required file contents on the
specified path during its last check.
*/
  Discovereds?: Array<HostingCustomDomainCertVerificationDnsDiscovered>;

  /*
(Output)
The last time Hosting checked your CustomDomain's DNS records.
*/
  CheckTime?: string;
}
