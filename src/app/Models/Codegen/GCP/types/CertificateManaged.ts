import { CertificateManagedAuthorizationAttemptInfo } from "./CertificateManagedAuthorizationAttemptInfo";
import { CertificateManagedProvisioningIssue } from "./CertificateManagedProvisioningIssue";

export interface CertificateManaged {
  // Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both.
  DnsAuthorizations?: Array<string>;

  /*
The domains for which a managed SSL certificate will be generated.
Wildcard domains are only supported with DNS challenge resolution
*/
  Domains?: Array<string>;

  /*
The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/-/locations/-/certificateIssuanceConfigs/-.
If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.
Either issuanceConfig or dnsAuthorizations should be specificed, but not both.
*/
  IssuanceConfig?: string;

  /*
(Output)
Information about issues with provisioning this Managed Certificate.
Structure is documented below.
*/
  ProvisioningIssues?: Array<CertificateManagedProvisioningIssue>;

  /*
(Output)
State of the domain for managed certificate issuance.
*/
  State?: string;

  /*
(Output)
Detailed state of the latest authorization attempt for each domain
specified for this Managed Certificate.
Structure is documented below.


<a name="nested_provisioning_issue"></a>The `provisioning_issue` block contains:
*/
  AuthorizationAttemptInfos?: Array<CertificateManagedAuthorizationAttemptInfo>;
}
