import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  certificateauthority_AuthoritySubordinateConfig,
  certificateauthority_AuthoritySubordinateConfig_GetTypes,
} from "../types/certificateauthority_AuthoritySubordinateConfig";
import {
  certificateauthority_AuthorityKeySpec,
  certificateauthority_AuthorityKeySpec_GetTypes,
} from "../types/certificateauthority_AuthorityKeySpec";
import {
  certificateauthority_AuthorityConfig,
  certificateauthority_AuthorityConfig_GetTypes,
} from "../types/certificateauthority_AuthorityConfig";
import {
  certificateauthority_AuthorityAccessUrl,
  certificateauthority_AuthorityAccessUrl_GetTypes,
} from "../types/certificateauthority_AuthorityAccessUrl";

export interface AuthorityArgs {
  /*
This field allows the CA to be deleted even if the CA has active certs. Active certs include both unrevoked and unexpired certs.
Use with care. Defaults to `false`.
*/
  ignoreActiveCertificatesOnDeletion?: boolean;

  /*
Labels with user-defined metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".
*/
  lifetime?: string;

  // The name of the CaPool this Certificate Authority belongs to.
  pool?: string;

  /*
If this is a subordinate CertificateAuthority, this field will be set
with the subordinate configuration, which describes its issuers.
Structure is documented below.
*/
  subordinateConfig?: certificateauthority_AuthoritySubordinateConfig;

  /*
The Type of this CertificateAuthority.
> --Note:-- For `SUBORDINATE` Certificate Authorities, they need to
be activated before they can issue certificates.
Default value is `SELF_SIGNED`.
Possible values are: `SELF_SIGNED`, `SUBORDINATE`.
*/
  type?: string;

  /*
Whether or not to allow Terraform to destroy the CertificateAuthority. Unless this field is set to false in Terraform
state, a 'terraform destroy' or 'terraform apply' that would delete the instance will fail.
*/
  deletionProtection?: boolean;

  /*
Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority
is a self-signed CertificateAuthority, this key is also used to sign the self-signed CA
certificate. Otherwise, it is used to sign a CSR.
Structure is documented below.
*/
  keySpec?: certificateauthority_AuthorityKeySpec;

  // The user provided Resource ID for this Certificate Authority.
  certificateAuthorityId?: string;

  // The signed CA certificate issued from the subordinated CA's CSR. This is needed when activating the subordiante CA with a third party issuer.
  pemCaCertificate?: string;

  /*
The name of a Cloud Storage bucket where this CertificateAuthority will publish content,
such as the CA certificate and CRLs. This must be a bucket name, without any prefixes
(such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named
my-bucket, you would simply specify `my-bucket`. If not specified, a managed bucket will be
created.
*/
  gcsBucket?: string;

  /*
Location of the CertificateAuthority. A full list of valid locations can be found by
running `gcloud privateca locations list`.
*/
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
If this flag is set, the Certificate Authority will be deleted as soon as
possible without a 30-day grace period where undeletion would have been
allowed. If you proceed, there will be no way to recover this CA.
Use with care. Defaults to `false`.
*/
  skipGracePeriod?: boolean;

  /*
The config used to create a self-signed X.509 certificate or CSR.
Structure is documented below.
*/
  config?: certificateauthority_AuthorityConfig;

  // Desired state of the CertificateAuthority. Set this field to `STAGED` to create a `STAGED` root CA.
  desiredState?: string;
}
export class Authority extends Resource {
  /*
The config used to create a self-signed X.509 certificate or CSR.
Structure is documented below.
*/
  public config?: certificateauthority_AuthorityConfig;

  /*
Whether or not to allow Terraform to destroy the CertificateAuthority. Unless this field is set to false in Terraform
state, a 'terraform destroy' or 'terraform apply' that would delete the instance will fail.
*/
  public deletionProtection?: boolean;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority
is a self-signed CertificateAuthority, this key is also used to sign the self-signed CA
certificate. Otherwise, it is used to sign a CSR.
Structure is documented below.
*/
  public keySpec?: certificateauthority_AuthorityKeySpec;

  /*
Location of the CertificateAuthority. A full list of valid locations can be found by
running `gcloud privateca locations list`.
*/
  public location?: string;

  // The signed CA certificate issued from the subordinated CA's CSR. This is needed when activating the subordiante CA with a third party issuer.
  public pemCaCertificate?: string;

  /*
This CertificateAuthority's certificate chain, including the current
CertificateAuthority's certificate. Ordered such that the root issuer is the final
element (consistent with RFC 5246). For a self-signed CA, this will only list the current
CertificateAuthority's certificate.
*/
  public pemCaCertificates?: Array<string>;

  /*
The time at which this CertificateAuthority was updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  // Desired state of the CertificateAuthority. Set this field to `STAGED` to create a `STAGED` root CA.
  public desiredState?: string;

  /*
Labels with user-defined metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
If this flag is set, the Certificate Authority will be deleted as soon as
possible without a 30-day grace period where undeletion would have been
allowed. If you proceed, there will be no way to recover this CA.
Use with care. Defaults to `false`.
*/
  public skipGracePeriod?: boolean;

  /*
If this is a subordinate CertificateAuthority, this field will be set
with the subordinate configuration, which describes its issuers.
Structure is documented below.
*/
  public subordinateConfig?: certificateauthority_AuthoritySubordinateConfig;

  /*
URLs for accessing content published by this CA, such as the CA certificate and CRLs.
Structure is documented below.
*/
  public accessUrls?: Array<certificateauthority_AuthorityAccessUrl>;

  /*
This field allows the CA to be deleted even if the CA has active certs. Active certs include both unrevoked and unexpired certs.
Use with care. Defaults to `false`.
*/
  public ignoreActiveCertificatesOnDeletion?: boolean;

  /*
The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".
*/
  public lifetime?: string;

  /*
The resource name for this CertificateAuthority in the format
projects/-/locations/-/certificateAuthorities/-.
*/
  public name?: string;

  // The user provided Resource ID for this Certificate Authority.
  public certificateAuthorityId?: string;

  /*
The time at which this CertificateAuthority was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  /*
The name of a Cloud Storage bucket where this CertificateAuthority will publish content,
such as the CA certificate and CRLs. This must be a bucket name, without any prefixes
(such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named
my-bucket, you would simply specify `my-bucket`. If not specified, a managed bucket will be
created.
*/
  public gcsBucket?: string;

  // The name of the CaPool this Certificate Authority belongs to.
  public pool?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The State for this CertificateAuthority.
  public state?: string;

  /*
The Type of this CertificateAuthority.
> --Note:-- For `SUBORDINATE` Certificate Authorities, they need to
be activated before they can issue certificates.
Default value is `SELF_SIGNED`.
Possible values are: `SELF_SIGNED`, `SUBORDINATE`.
*/
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'Labels with user-defined metadata.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":\n"1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "config",
        "The config used to create a self-signed X.509 certificate or CSR.\nStructure is documented below.",
        certificateauthority_AuthorityConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "subordinateConfig",
        "If this is a subordinate CertificateAuthority, this field will be set\nwith the subordinate configuration, which describes its issuers.\nStructure is documented below.",
        certificateauthority_AuthoritySubordinateConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The Type of this CertificateAuthority.\n> **Note:** For `SUBORDINATE` Certificate Authorities, they need to\nbe activated before they can issue certificates.\nDefault value is `SELF_SIGNED`.\nPossible values are: `SELF_SIGNED`, `SUBORDINATE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "keySpec",
        "Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority\nis a self-signed CertificateAuthority, this key is also used to sign the self-signed CA\ncertificate. Otherwise, it is used to sign a CSR.\nStructure is documented below.",
        certificateauthority_AuthorityKeySpec_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "gcsBucket",
        "The name of a Cloud Storage bucket where this CertificateAuthority will publish content,\nsuch as the CA certificate and CRLs. This must be a bucket name, without any prefixes\n(such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named\nmy-bucket, you would simply specify `my-bucket`. If not specified, a managed bucket will be\ncreated.",
        [],
        false,
        true,
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
        InputType.String,
        "desiredState",
        "Desired state of the CertificateAuthority. Set this field to `STAGED` to create a `STAGED` root CA.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "lifetime",
        'The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and\n"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine\nfractional digits, terminated by \'s\'. Example: "3.5s".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deletionProtection",
        "Whether or not to allow Terraform to destroy the CertificateAuthority. Unless this field is set to false in Terraform\nstate, a 'terraform destroy' or 'terraform apply' that would delete the instance will fail.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateAuthorityId",
        "The user provided Resource ID for this Certificate Authority.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Location of the CertificateAuthority. A full list of valid locations can be found by\nrunning `gcloud privateca locations list`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipGracePeriod",
        "If this flag is set, the Certificate Authority will be deleted as soon as\npossible without a 30-day grace period where undeletion would have been\nallowed. If you proceed, there will be no way to recover this CA.\nUse with care. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ignoreActiveCertificatesOnDeletion",
        "This field allows the CA to be deleted even if the CA has active certs. Active certs include both unrevoked and unexpired certs.\nUse with care. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "pool",
        "The name of the CaPool this Certificate Authority belongs to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "pemCaCertificate",
        "The signed CA certificate issued from the subordinated CA's CSR. This is needed when activating the subordiante CA with a third party issuer.",
        [],
        false,
        false,
      ),
    ];
  }
}
