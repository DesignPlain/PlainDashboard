import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateRevocationDetail,
  Certificateauthority_CertificateRevocationDetail_GetTypes,
} from "../types/Certificateauthority_CertificateRevocationDetail";
import {
  Certificateauthority_CertificateCertificateDescription,
  Certificateauthority_CertificateCertificateDescription_GetTypes,
} from "../types/Certificateauthority_CertificateCertificateDescription";
import {
  Certificateauthority_CertificateConfig,
  Certificateauthority_CertificateConfig_GetTypes,
} from "../types/Certificateauthority_CertificateConfig";

export interface CertificateArgs {
  // The name of the CaPool this Certificate belongs to.
  Pool?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Location of the Certificate. A full list of valid locations can be found by
running `gcloud privateca locations list`.


- - -
*/
  Location?: string;

  // The name for this Certificate.
  Name?: string;

  // Immutable. A pem-encoded X.509 certificate signing request (CSR).
  PemCsr?: string;

  /*
Labels with user-defined metadata to apply to this resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".
*/
  Lifetime?: string;

  /*
The Certificate Authority ID that should issue the certificate. For example, to issue a Certificate from
a Certificate Authority with resource name `projects/my-project/locations/us-central1/caPools/my-pool/certificateAuthorities/my-ca`,
argument `pool` should be set to `projects/my-project/locations/us-central1/caPools/my-pool`, argument `certificate_authority`
should be set to `my-ca`.
*/
  CertificateAuthority?: string;

  /*
The resource name for a CertificateTemplate used to issue this certificate,
in the format `projects/-/locations/-/certificateTemplates/-`. If this is specified,
the caller must have the necessary permission to use this template. If this is
omitted, no template will be used. This template must be in the same location
as the Certificate.
*/
  CertificateTemplate?: string;

  /*
The config used to create a self-signed X.509 certificate or CSR.
Structure is documented below.
*/
  Config?: Certificateauthority_CertificateConfig;
}
export class Certificate extends Resource {
  /*
Labels with user-defined metadata to apply to this resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The name for this Certificate.
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The Certificate Authority ID that should issue the certificate. For example, to issue a Certificate from
a Certificate Authority with resource name `projects/my-project/locations/us-central1/caPools/my-pool/certificateAuthorities/my-ca`,
argument `pool` should be set to `projects/my-project/locations/us-central1/caPools/my-pool`, argument `certificate_authority`
should be set to `my-ca`.
*/
  public CertificateAuthority?: string;

  /*
The time that this resource was created on the server.
This is in RFC3339 text format.
*/
  public CreateTime?: string;

  /*
The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".
*/
  public Lifetime?: string;

  /*
Location of the Certificate. A full list of valid locations can be found by
running `gcloud privateca locations list`.


- - -
*/
  public Location?: string;

  // Output only. The pem-encoded, signed X.509 certificate.
  public PemCertificate?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The resource name of the issuing CertificateAuthority in the format `projects/-/locations/-/caPools/-/certificateAuthorities/-`.
  public IssuerCertificateAuthority?: string;

  // The name of the CaPool this Certificate belongs to.
  public Pool?: string;

  /*
Output only. Details regarding the revocation of this Certificate. This Certificate is
considered revoked if and only if this field is present.
Structure is documented below.
*/
  public RevocationDetails?: Array<Certificateauthority_CertificateRevocationDetail>;

  /*
Output only. Details regarding the revocation of this Certificate. This Certificate is considered revoked if and only if this field is present.
Structure is documented below.
*/
  public CertificateDescriptions?: Array<Certificateauthority_CertificateCertificateDescription>;

  /*
The resource name for a CertificateTemplate used to issue this certificate,
in the format `projects/-/locations/-/certificateTemplates/-`. If this is specified,
the caller must have the necessary permission to use this template. If this is
omitted, no template will be used. This template must be in the same location
as the Certificate.
*/
  public CertificateTemplate?: string;

  /*
The config used to create a self-signed X.509 certificate or CSR.
Structure is documented below.
*/
  public Config?: Certificateauthority_CertificateConfig;

  // The chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246.
  public PemCertificateChains?: Array<string>;

  // Immutable. A pem-encoded X.509 certificate signing request (CSR).
  public PemCsr?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Output only. The time at which this CertificateAuthority was updated.
This is in RFC3339 text format.
*/
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "PemCsr",
        "Immutable. A pem-encoded X.509 certificate signing request (CSR).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Labels with user-defined metadata to apply to this resource.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "CertificateTemplate",
        "The resource name for a CertificateTemplate used to issue this certificate,\nin the format `projects/*/locations/*/certificateTemplates/*`. If this is specified,\nthe caller must have the necessary permission to use this template. If this is\nomitted, no template will be used. This template must be in the same location\nas the Certificate.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Config",
        "The config used to create a self-signed X.509 certificate or CSR.\nStructure is documented below.",
        Certificateauthority_CertificateConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Pool",
        "The name of the CaPool this Certificate belongs to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location of the Certificate. A full list of valid locations can be found by\nrunning `gcloud privateca locations list`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name for this Certificate.",
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
        "Lifetime",
        'The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and\n"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine\nfractional digits, terminated by \'s\'. Example: "3.5s".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "CertificateAuthority",
        "The Certificate Authority ID that should issue the certificate. For example, to issue a Certificate from\na Certificate Authority with resource name `projects/my-project/locations/us-central1/caPools/my-pool/certificateAuthorities/my-ca`,\nargument `pool` should be set to `projects/my-project/locations/us-central1/caPools/my-pool`, argument `certificate_authority`\nshould be set to `my-ca`.",
        [],
        false,
        true,
      ),
    ];
  }
}
