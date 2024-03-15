import { HostingCustomDomainCertVerification } from "./HostingCustomDomainCertVerification";

export interface HostingCustomDomainCert {
  /*
The state of the certificate. Only the `CERT_ACTIVE` and
`CERT_EXPIRING_SOON` states provide SSL coverage for a domain name. If the
state is `PROPAGATING` and Hosting had an active cert for the domain name
before, that formerly-active cert provides SSL coverage for the domain name
until the current cert propagates.
*/
  State?: string;

  // The record's type, which determines what data the record contains.
  Type?: string;

  /*
A set of ACME challenges you can add to your DNS records or existing,
non-Hosting hosting provider to allow Hosting to create an SSL certificate
for your domain name before you point traffic toward hosting. You can use
thse challenges as part of a zero downtime transition from your old
provider to Hosting.
Structure is documented below.
*/
  Verification?: HostingCustomDomainCertVerification;
}
