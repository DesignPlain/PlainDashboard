import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  certificatemanager_CertificateManagedAuthorizationAttemptInfo,
  certificatemanager_CertificateManagedAuthorizationAttemptInfo_GetTypes,
} from "./certificatemanager_CertificateManagedAuthorizationAttemptInfo";
import {
  certificatemanager_CertificateManagedProvisioningIssue,
  certificatemanager_CertificateManagedProvisioningIssue_GetTypes,
} from "./certificatemanager_CertificateManagedProvisioningIssue";

export interface certificatemanager_CertificateManaged {
  /*
(Output)
Detailed state of the latest authorization attempt for each domain
specified for this Managed Certificate.
Structure is documented below.


<a name="nested_provisioning_issue"></a>The `provisioning_issue` block contains:
*/
  authorizationAttemptInfos?: Array<certificatemanager_CertificateManagedAuthorizationAttemptInfo>;

  // Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both.
  dnsAuthorizations?: Array<string>;

  /*
The domains for which a managed SSL certificate will be generated.
Wildcard domains are only supported with DNS challenge resolution
*/
  domains?: Array<string>;

  /*
The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/-/locations/-/certificateIssuanceConfigs/-.
If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.
Either issuanceConfig or dnsAuthorizations should be specificed, but not both.
*/
  issuanceConfig?: string;

  /*
(Output)
Information about issues with provisioning this Managed Certificate.
Structure is documented below.
*/
  provisioningIssues?: Array<certificatemanager_CertificateManagedProvisioningIssue>;

  /*
(Output)
State of the domain for managed certificate issuance.
*/
  state?: string;
}

export function certificatemanager_CertificateManaged_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "state",
      "(Output)\nState of the domain for managed certificate issuance.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "authorizationAttemptInfos",
      '(Output)\nDetailed state of the latest authorization attempt for each domain\nspecified for this Managed Certificate.\nStructure is documented below.\n\n\n<a name="nested_provisioning_issue"></a>The `provisioning_issue` block contains:',
      () =>
        certificatemanager_CertificateManagedAuthorizationAttemptInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dnsAuthorizations",
      "Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both.",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "domains",
      "The domains for which a managed SSL certificate will be generated.\nWildcard domains are only supported with DNS challenge resolution",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "issuanceConfig",
      "The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/*/locations/*/certificateIssuanceConfigs/*.\nIf this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.\nEither issuanceConfig or dnsAuthorizations should be specificed, but not both.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "provisioningIssues",
      "(Output)\nInformation about issues with provisioning this Managed Certificate.\nStructure is documented below.",
      () => certificatemanager_CertificateManagedProvisioningIssue_GetTypes(),
      false,
      false,
    ),
  ];
}
