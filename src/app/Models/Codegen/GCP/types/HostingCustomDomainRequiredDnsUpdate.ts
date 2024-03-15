import { HostingCustomDomainRequiredDnsUpdateDiscovered } from "./HostingCustomDomainRequiredDnsUpdateDiscovered";
import { HostingCustomDomainRequiredDnsUpdateDesired } from "./HostingCustomDomainRequiredDnsUpdateDesired";

export interface HostingCustomDomainRequiredDnsUpdate {
  /*
(Output)
The last time Hosting checked your CustomDomain's DNS records.
*/
  CheckTime?: string;

  // A text string to serve at the path.
  Desireds?: Array<HostingCustomDomainRequiredDnsUpdateDesired>;

  /*
Whether Hosting was able to find the required file contents on the
specified path during its last check.
*/
  Discovereds?: Array<HostingCustomDomainRequiredDnsUpdateDiscovered>;
}
