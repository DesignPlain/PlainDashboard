import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificatemanager_CertificateManagedProvisioningIssue,
  Certificatemanager_CertificateManagedProvisioningIssue_GetTypes,
} from "./Certificatemanager_CertificateManagedProvisioningIssue";
import {
  Certificatemanager_CertificateManagedAuthorizationAttemptInfo,
  Certificatemanager_CertificateManagedAuthorizationAttemptInfo_GetTypes,
} from "./Certificatemanager_CertificateManagedAuthorizationAttemptInfo";

export interface Certificatemanager_CertificateManaged {
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
  ProvisioningIssues?: Array<Certificatemanager_CertificateManagedProvisioningIssue>;

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
  AuthorizationAttemptInfos?: Array<Certificatemanager_CertificateManagedAuthorizationAttemptInfo>;

  // Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both.
  DnsAuthorizations?: Array<string>;
}

export function Certificatemanager_CertificateManaged_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Domains",
      "The domains for which a managed SSL certificate will be generated.\nWildcard domains are only supported with DNS challenge resolution",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "IssuanceConfig",
      "The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/*/locations/*/certificateIssuanceConfigs/*.\nIf this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.\nEither issuanceConfig or dnsAuthorizations should be specificed, but not both.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ProvisioningIssues",
      "(Output)\nInformation about issues with provisioning this Managed Certificate.\nStructure is documented below.",
      Certificatemanager_CertificateManagedProvisioningIssue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nState of the domain for managed certificate issuance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AuthorizationAttemptInfos",
      '(Output)\nDetailed state of the latest authorization attempt for each domain\nspecified for this Managed Certificate.\nStructure is documented below.\n\n\n<a name="nested_provisioning_issue"></a>The `provisioning_issue` block contains:',
      Certificatemanager_CertificateManagedAuthorizationAttemptInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DnsAuthorizations",
      "Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
