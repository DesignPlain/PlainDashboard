import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig,
  Certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig_GetTypes,
} from "../types/Certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig";

export interface CertificateIssuanceConfigArgs {
  /*
Lifetime of issued certificates. A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "1814400s". Valid values are from 21 days (1814400s) to 30 days (2592000s)
*/
  Lifetime?: string;

  /*
It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate.
Must be a number between 1-99, inclusive.
You must set the rotation window percentage in relation to the certificate lifetime so that certificate renewal occurs at least 7 days after
the certificate has been issued and at least 7 days before it expires.
*/
  RotationWindowPercentage?: number;

  /*
The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc.
Structure is documented below.
*/
  CertificateAuthorityConfig?: Certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig;

  /*
Key algorithm to use when generating the private key.
Possible values are: `RSA_2048`, `ECDSA_P256`.
*/
  KeyAlgorithm?: string;

  // The Certificate Manager location. If not specified, "global" is used.
  Location?: string;

  /*
A user-defined name of the certificate issuance config.
CertificateIssuanceConfig names must be unique globally.
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // One or more paragraphs of text description of a CertificateIssuanceConfig.
  Description?: string;

  /*
'Set of label tags associated with the CertificateIssuanceConfig resource.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;
}
export class CertificateIssuanceConfig extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate.
Must be a number between 1-99, inclusive.
You must set the rotation window percentage in relation to the certificate lifetime so that certificate renewal occurs at least 7 days after
the certificate has been issued and at least 7 days before it expires.
*/
  public RotationWindowPercentage?: number;

  /*
The last update timestamp of a CertificateIssuanceConfig. Timestamp is in RFC3339 UTC "Zulu" format,
accurate to nanoseconds with up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc.
Structure is documented below.
*/
  public CertificateAuthorityConfig?: Certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
'Set of label tags associated with the CertificateIssuanceConfig resource.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The Certificate Manager location. If not specified, "global" is used.
  public Location?: string;

  /*
A user-defined name of the certificate issuance config.
CertificateIssuanceConfig names must be unique globally.
*/
  public Name?: string;

  /*
The creation timestamp of a CertificateIssuanceConfig. Timestamp is in RFC3339 UTC "Zulu" format,
accurate to nanoseconds with up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // One or more paragraphs of text description of a CertificateIssuanceConfig.
  public Description?: string;

  /*
Key algorithm to use when generating the private key.
Possible values are: `RSA_2048`, `ECDSA_P256`.
*/
  public KeyAlgorithm?: string;

  /*
Lifetime of issued certificates. A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "1814400s". Valid values are from 21 days (1814400s) to 30 days (2592000s)
*/
  public Lifetime?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "RotationWindowPercentage",
        "It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate.\nMust be a number between 1-99, inclusive.\nYou must set the rotation window percentage in relation to the certificate lifetime so that certificate renewal occurs at least 7 days after\nthe certificate has been issued and at least 7 days before it expires.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CertificateAuthorityConfig",
        "The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc.\nStructure is documented below.",
        Certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "KeyAlgorithm",
        "Key algorithm to use when generating the private key.\nPossible values are: `RSA_2048`, `ECDSA_P256`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        'The Certificate Manager location. If not specified, "global" is used.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Lifetime",
        "Lifetime of issued certificates. A duration in seconds with up to nine fractional digits, ending with 's'.\nExample: \"1814400s\". Valid values are from 21 days (1814400s) to 30 days (2592000s)",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A user-defined name of the certificate issuance config.\nCertificateIssuanceConfig names must be unique globally.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "One or more paragraphs of text description of a CertificateIssuanceConfig.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        '\'Set of label tags associated with the CertificateIssuanceConfig resource.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
