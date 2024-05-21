import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_CertificateConfig,
  certificateauthority_CertificateConfig_GetTypes,
} from "../types/certificateauthority_CertificateConfig";
import {
  certificateauthority_CertificateRevocationDetail,
  certificateauthority_CertificateRevocationDetail_GetTypes,
} from "../types/certificateauthority_CertificateRevocationDetail";
import {
  certificateauthority_CertificateCertificateDescription,
  certificateauthority_CertificateCertificateDescription_GetTypes,
} from "../types/certificateauthority_CertificateCertificateDescription";

export interface CertificateArgs {
  /*
The Certificate Authority ID that should issue the certificate. For example, to issue a Certificate from
a Certificate Authority with resource name `projects/my-project/locations/us-central1/caPools/my-pool/certificateAuthorities/my-ca`,
argument `pool` should be set to `projects/my-project/locations/us-central1/caPools/my-pool`, argument `certificate_authority`
should be set to `my-ca`.
*/
  certificateAuthority?: string;

  /*
The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".
*/
  lifetime?: string;

  // Immutable. A pem-encoded X.509 certificate signing request (CSR).
  pemCsr?: string;

  // The name of the CaPool this Certificate belongs to.
  pool?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The resource name for a CertificateTemplate used to issue this certificate,
in the format `projects/-/locations/-/certificateTemplates/-`. If this is specified,
the caller must have the necessary permission to use this template. If this is
omitted, no template will be used. This template must be in the same location
as the Certificate.
*/
  certificateTemplate?: string;

  /*
The config used to create a self-signed X.509 certificate or CSR.
Structure is documented below.
*/
  config?: certificateauthority_CertificateConfig;

  /*
Labels with user-defined metadata to apply to this resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Location of the Certificate. A full list of valid locations can be found by
running `gcloud privateca locations list`.


- - -
*/
  location?: string;

  // The name for this Certificate.
  name?: string;
}
export class Certificate extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The resource name of the issuing CertificateAuthority in the format `projects/-/locations/-/caPools/-/certificateAuthorities/-`.
  public issuerCertificateAuthority?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Output only. Details regarding the revocation of this Certificate. This Certificate is
considered revoked if and only if this field is present.
Structure is documented below.
*/
  public revocationDetails?: Array<certificateauthority_CertificateRevocationDetail>;

  /*
The Certificate Authority ID that should issue the certificate. For example, to issue a Certificate from
a Certificate Authority with resource name `projects/my-project/locations/us-central1/caPools/my-pool/certificateAuthorities/my-ca`,
argument `pool` should be set to `projects/my-project/locations/us-central1/caPools/my-pool`, argument `certificate_authority`
should be set to `my-ca`.
*/
  public certificateAuthority?: string;

  /*
Output only. Details regarding the revocation of this Certificate. This Certificate is considered revoked if and only if this field is present.
Structure is documented below.
*/
  public certificateDescriptions?: Array<certificateauthority_CertificateCertificateDescription>;

  /*
The resource name for a CertificateTemplate used to issue this certificate,
in the format `projects/-/locations/-/certificateTemplates/-`. If this is specified,
the caller must have the necessary permission to use this template. If this is
omitted, no template will be used. This template must be in the same location
as the Certificate.
*/
  public certificateTemplate?: string;

  /*
The time that this resource was created on the server.
This is in RFC3339 text format.
*/
  public createTime?: string;

  /*
The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".
*/
  public lifetime?: string;

  // Immutable. A pem-encoded X.509 certificate signing request (CSR).
  public pemCsr?: string;

  /*
Output only. The time at which this CertificateAuthority was updated.
This is in RFC3339 text format.
*/
  public updateTime?: string;

  /*
Location of the Certificate. A full list of valid locations can be found by
running `gcloud privateca locations list`.


- - -
*/
  public location?: string;

  // The chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246.
  public pemCertificateChains?: Array<string>;

  // The name of the CaPool this Certificate belongs to.
  public pool?: string;

  /*
The config used to create a self-signed X.509 certificate or CSR.
Structure is documented below.
*/
  public config?: certificateauthority_CertificateConfig;

  /*
Labels with user-defined metadata to apply to this resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The name for this Certificate.
  public name?: string;

  // Output only. The pem-encoded, signed X.509 certificate.
  public pemCertificate?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels with user-defined metadata to apply to this resource.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for this Certificate.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Location of the Certificate. A full list of valid locations can be found by\nrunning `gcloud privateca locations list`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateAuthority",
        "The Certificate Authority ID that should issue the certificate. For example, to issue a Certificate from\na Certificate Authority with resource name `projects/my-project/locations/us-central1/caPools/my-pool/certificateAuthorities/my-ca`,\nargument `pool` should be set to `projects/my-project/locations/us-central1/caPools/my-pool`, argument `certificate_authority`\nshould be set to `my-ca`.",
        [],
        false,
        true,
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
        InputType.String,
        "pemCsr",
        "Immutable. A pem-encoded X.509 certificate signing request (CSR).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "pool",
        "The name of the CaPool this Certificate belongs to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateTemplate",
        "The resource name for a CertificateTemplate used to issue this certificate,\nin the format `projects/*/locations/*/certificateTemplates/*`. If this is specified,\nthe caller must have the necessary permission to use this template. If this is\nomitted, no template will be used. This template must be in the same location\nas the Certificate.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "config",
        "The config used to create a self-signed X.509 certificate or CSR.\nStructure is documented below.",
        certificateauthority_CertificateConfig_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
