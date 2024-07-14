import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig,
  certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig_GetTypes,
} from "../types/certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig";

export interface CertificateIssuanceConfigArgs {
  /*
Key algorithm to use when generating the private key.
Possible values are: `RSA_2048`, `ECDSA_P256`.
*/
  keyAlgorithm?: string;

  /*
'Set of label tags associated with the CertificateIssuanceConfig resource.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate.
Must be a number between 1-99, inclusive.
You must set the rotation window percentage in relation to the certificate lifetime so that certificate renewal occurs at least 7 days after
the certificate has been issued and at least 7 days before it expires.
*/
  rotationWindowPercentage?: number;

  /*
A user-defined name of the certificate issuance config.
CertificateIssuanceConfig names must be unique globally.
*/
  name?: string;

  /*
The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc.
Structure is documented below.
*/
  certificateAuthorityConfig?: certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig;

  // One or more paragraphs of text description of a CertificateIssuanceConfig.
  description?: string;

  /*
Lifetime of issued certificates. A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "1814400s". Valid values are from 21 days (1814400s) to 30 days (2592000s)
*/
  lifetime?: string;

  // The Certificate Manager location. If not specified, "global" is used.
  location?: string;
}
export class CertificateIssuanceConfig extends Resource {
  /*
'Set of label tags associated with the CertificateIssuanceConfig resource.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Lifetime of issued certificates. A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "1814400s". Valid values are from 21 days (1814400s) to 30 days (2592000s)
*/
  public lifetime?: string;

  // The Certificate Manager location. If not specified, "global" is used.
  public location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate.
Must be a number between 1-99, inclusive.
You must set the rotation window percentage in relation to the certificate lifetime so that certificate renewal occurs at least 7 days after
the certificate has been issued and at least 7 days before it expires.
*/
  public rotationWindowPercentage?: number;

  /*
The last update timestamp of a CertificateIssuanceConfig. Timestamp is in RFC3339 UTC "Zulu" format,
accurate to nanoseconds with up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  /*
The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc.
Structure is documented below.
*/
  public certificateAuthorityConfig?: certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig;

  // One or more paragraphs of text description of a CertificateIssuanceConfig.
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Key algorithm to use when generating the private key.
Possible values are: `RSA_2048`, `ECDSA_P256`.
*/
  public keyAlgorithm?: string;

  /*
A user-defined name of the certificate issuance config.
CertificateIssuanceConfig names must be unique globally.
*/
  public name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The creation timestamp of a CertificateIssuanceConfig. Timestamp is in RFC3339 UTC "Zulu" format,
accurate to nanoseconds with up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "keyAlgorithm",
        "Key algorithm to use when generating the private key.\nPossible values are: `RSA_2048`, `ECDSA_P256`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A user-defined name of the certificate issuance config.\nCertificateIssuanceConfig names must be unique globally.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "lifetime",
        "Lifetime of issued certificates. A duration in seconds with up to nine fractional digits, ending with 's'.\nExample: \"1814400s\". Valid values are from 21 days (1814400s) to 30 days (2592000s)",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        '\'Set of label tags associated with the CertificateIssuanceConfig resource.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "rotationWindowPercentage",
        "It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate.\nMust be a number between 1-99, inclusive.\nYou must set the rotation window percentage in relation to the certificate lifetime so that certificate renewal occurs at least 7 days after\nthe certificate has been issued and at least 7 days before it expires.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "certificateAuthorityConfig",
        "The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc.\nStructure is documented below.",
        certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "One or more paragraphs of text description of a CertificateIssuanceConfig.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        'The Certificate Manager location. If not specified, "global" is used.',
        [],
        false,
        true,
      ),
    ];
  }
}
