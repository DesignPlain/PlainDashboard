import { HostingCustomDomainCertVerificationDns } from "./HostingCustomDomainCertVerificationDns";
import { HostingCustomDomainCertVerificationHttp } from "./HostingCustomDomainCertVerificationHttp";

export interface HostingCustomDomainCertVerification {
  /*
A `TXT` record to add to your DNS records that confirms your intent to
let Hosting create an SSL cert for your domain name.
Structure is documented below.
*/
  Dns?: HostingCustomDomainCertVerificationDns;

  /*
A file to add to your existing, non-Hosting hosting service that confirms
your intent to let Hosting create an SSL cert for your domain name.
Structure is documented below.
*/
  Http?: HostingCustomDomainCertVerificationHttp;
}
