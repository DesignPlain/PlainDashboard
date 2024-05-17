import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_AuthorityKeySpec,
  Certificateauthority_AuthorityKeySpec_GetTypes,
} from "../types/Certificateauthority_AuthorityKeySpec";
import {
  Certificateauthority_AuthorityAccessUrl,
  Certificateauthority_AuthorityAccessUrl_GetTypes,
} from "../types/Certificateauthority_AuthorityAccessUrl";
import {
  Certificateauthority_AuthorityConfig,
  Certificateauthority_AuthorityConfig_GetTypes,
} from "../types/Certificateauthority_AuthorityConfig";
import {
  Certificateauthority_AuthoritySubordinateConfig,
  Certificateauthority_AuthoritySubordinateConfig_GetTypes,
} from "../types/Certificateauthority_AuthoritySubordinateConfig";

export interface AuthorityArgs {
  /*
The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".
*/
  Lifetime?: string;

  /*
The config used to create a self-signed X.509 certificate or CSR.
Structure is documented below.
*/
  Config?: Certificateauthority_AuthorityConfig;

  /*
The name of a Cloud Storage bucket where this CertificateAuthority will publish content,
such as the CA certificate and CRLs. This must be a bucket name, without any prefixes
(such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named
my-bucket, you would simply specify `my-bucket`. If not specified, a managed bucket will be
created.
*/
  GcsBucket?: string;

  /*
Labels with user-defined metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
If this is a subordinate CertificateAuthority, this field will be set
with the subordinate configuration, which describes its issuers.
Structure is documented below.
*/
  SubordinateConfig?: Certificateauthority_AuthoritySubordinateConfig;

  /*
The Type of this CertificateAuthority.
> --Note:-- For `SUBORDINATE` Certificate Authorities, they need to
be activated before they can issue certificates.
Default value is `SELF_SIGNED`.
Possible values are: `SELF_SIGNED`, `SUBORDINATE`.
*/
  Type?: string;

  // Desired state of the CertificateAuthority. Set this field to `STAGED` to create a `STAGED` root CA.
  DesiredState?: string;

  /*
This field allows the CA to be deleted even if the CA has active certs. Active certs include both unrevoked and unexpired certs.
Use with care. Defaults to `false`.
*/
  IgnoreActiveCertificatesOnDeletion?: boolean;

  // The name of the CaPool this Certificate Authority belongs to.
  Pool?: string;

  /*
Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority
is a self-signed CertificateAuthority, this key is also used to sign the self-signed CA
certificate. Otherwise, it is used to sign a CSR.
Structure is documented below.
*/
  KeySpec?: Certificateauthority_AuthorityKeySpec;

  // The signed CA certificate issued from the subordinated CA's CSR. This is needed when activating the subordiante CA with a third party issuer.
  PemCaCertificate?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
If this flag is set, the Certificate Authority will be deleted as soon as
possible without a 30-day grace period where undeletion would have been
allowed. If you proceed, there will be no way to recover this CA.
Use with care. Defaults to `false`.
*/
  SkipGracePeriod?: boolean;

  // The user provided Resource ID for this Certificate Authority.
  CertificateAuthorityId?: string;

  /*
Whether or not to allow Terraform to destroy the CertificateAuthority. Unless this field is set to false in Terraform
state, a 'terraform destroy' or 'terraform apply' that would delete the instance will fail.
*/
  DeletionProtection?: boolean;

  /*
Location of the CertificateAuthority. A full list of valid locations can be found by
running `gcloud privateca locations list`.
*/
  Location?: string;
}
export class Authority extends Resource {
  /*
The config used to create a self-signed X.509 certificate or CSR.
Structure is documented below.
*/
  public Config?: Certificateauthority_AuthorityConfig;

  /*
The resource name for this CertificateAuthority in the format
projects/-/locations/-/certificateAuthorities/-.
*/
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The State for this CertificateAuthority.
  public State?: string;

  /*
The Type of this CertificateAuthority.
> --Note:-- For `SUBORDINATE` Certificate Authorities, they need to
be activated before they can issue certificates.
Default value is `SELF_SIGNED`.
Possible values are: `SELF_SIGNED`, `SUBORDINATE`.
*/
  public Type?: string;

  /*
The time at which this CertificateAuthority was updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
URLs for accessing content published by this CA, such as the CA certificate and CRLs.
Structure is documented below.
*/
  public AccessUrls?: Array<Certificateauthority_AuthorityAccessUrl>;

  // The user provided Resource ID for this Certificate Authority.
  public CertificateAuthorityId?: string;

  /*
The time at which this CertificateAuthority was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // Desired state of the CertificateAuthority. Set this field to `STAGED` to create a `STAGED` root CA.
  public DesiredState?: string;

  /*
Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority
is a self-signed CertificateAuthority, this key is also used to sign the self-signed CA
certificate. Otherwise, it is used to sign a CSR.
Structure is documented below.
*/
  public KeySpec?: Certificateauthority_AuthorityKeySpec;

  /*
Labels with user-defined metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The signed CA certificate issued from the subordinated CA's CSR. This is needed when activating the subordiante CA with a third party issuer.
  public PemCaCertificate?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The name of a Cloud Storage bucket where this CertificateAuthority will publish content,
such as the CA certificate and CRLs. This must be a bucket name, without any prefixes
(such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named
my-bucket, you would simply specify `my-bucket`. If not specified, a managed bucket will be
created.
*/
  public GcsBucket?: string;

  // The name of the CaPool this Certificate Authority belongs to.
  public Pool?: string;

  /*
If this flag is set, the Certificate Authority will be deleted as soon as
possible without a 30-day grace period where undeletion would have been
allowed. If you proceed, there will be no way to recover this CA.
Use with care. Defaults to `false`.
*/
  public SkipGracePeriod?: boolean;

  /*
Whether or not to allow Terraform to destroy the CertificateAuthority. Unless this field is set to false in Terraform
state, a 'terraform destroy' or 'terraform apply' that would delete the instance will fail.
*/
  public DeletionProtection?: boolean;

  /*
This field allows the CA to be deleted even if the CA has active certs. Active certs include both unrevoked and unexpired certs.
Use with care. Defaults to `false`.
*/
  public IgnoreActiveCertificatesOnDeletion?: boolean;

  /*
The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".
*/
  public Lifetime?: string;

  /*
Location of the CertificateAuthority. A full list of valid locations can be found by
running `gcloud privateca locations list`.
*/
  public Location?: string;

  /*
This CertificateAuthority's certificate chain, including the current
CertificateAuthority's certificate. Ordered such that the root issuer is the final
element (consistent with RFC 5246). For a self-signed CA, this will only list the current
CertificateAuthority's certificate.
*/
  public PemCaCertificates?: Array<string>;

  /*
If this is a subordinate CertificateAuthority, this field will be set
with the subordinate configuration, which describes its issuers.
Structure is documented below.
*/
  public SubordinateConfig?: Certificateauthority_AuthoritySubordinateConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Pool",
        "The name of the CaPool this Certificate Authority belongs to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PemCaCertificate",
        "The signed CA certificate issued from the subordinated CA's CSR. This is needed when activating the subordiante CA with a third party issuer.",
        [],
        false,
        false,
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
        InputType.Bool,
        "SkipGracePeriod",
        "If this flag is set, the Certificate Authority will be deleted as soon as\npossible without a 30-day grace period where undeletion would have been\nallowed. If you proceed, there will be no way to recover this CA.\nUse with care. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "CertificateAuthorityId",
        "The user provided Resource ID for this Certificate Authority.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "DeletionProtection",
        "Whether or not to allow Terraform to destroy the CertificateAuthority. Unless this field is set to false in Terraform\nstate, a 'terraform destroy' or 'terraform apply' that would delete the instance will fail.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SubordinateConfig",
        "If this is a subordinate CertificateAuthority, this field will be set\nwith the subordinate configuration, which describes its issuers.\nStructure is documented below.",
        Certificateauthority_AuthoritySubordinateConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "KeySpec",
        "Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority\nis a self-signed CertificateAuthority, this key is also used to sign the self-signed CA\ncertificate. Otherwise, it is used to sign a CSR.\nStructure is documented below.",
        Certificateauthority_AuthorityKeySpec_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location of the CertificateAuthority. A full list of valid locations can be found by\nrunning `gcloud privateca locations list`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Config",
        "The config used to create a self-signed X.509 certificate or CSR.\nStructure is documented below.",
        Certificateauthority_AuthorityConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        'Labels with user-defined metadata.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":\n"1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The Type of this CertificateAuthority.\n> **Note:** For `SUBORDINATE` Certificate Authorities, they need to\nbe activated before they can issue certificates.\nDefault value is `SELF_SIGNED`.\nPossible values are: `SELF_SIGNED`, `SUBORDINATE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "IgnoreActiveCertificatesOnDeletion",
        "This field allows the CA to be deleted even if the CA has active certs. Active certs include both unrevoked and unexpired certs.\nUse with care. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Lifetime",
        'The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and\n"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine\nfractional digits, terminated by \'s\'. Example: "3.5s".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DesiredState",
        "Desired state of the CertificateAuthority. Set this field to `STAGED` to create a `STAGED` root CA.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "GcsBucket",
        "The name of a Cloud Storage bucket where this CertificateAuthority will publish content,\nsuch as the CA certificate and CRLs. This must be a bucket name, without any prefixes\n(such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named\nmy-bucket, you would simply specify `my-bucket`. If not specified, a managed bucket will be\ncreated.",
        [],
        false,
        true,
      ),
    ];
  }
}
