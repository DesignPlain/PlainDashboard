import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificatemanager_CertificateManaged,
  Certificatemanager_CertificateManaged_GetTypes,
} from "../types/Certificatemanager_CertificateManaged";
import {
  Certificatemanager_CertificateSelfManaged,
  Certificatemanager_CertificateSelfManaged_GetTypes,
} from "../types/Certificatemanager_CertificateSelfManaged";

export interface CertificateArgs {
  /*
Configuration and state of a Managed Certificate.
Certificate Manager provisions and renews Managed Certificates
automatically, for as long as it's authorized to do so.
Structure is documented below.
*/
  Managed?: Certificatemanager_CertificateManaged;

  /*
A user-defined name of the certificate. Certificate names must be unique
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]- which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The scope of the certificate.
DEFAULT: Certificates with default scope are served from core Google data centers.
If unsure, choose this option.
EDGE_CACHE: Certificates with scope EDGE_CACHE are special-purposed certificates, served from Edge Points of Presence.
See https://cloud.google.com/vpc/docs/edge-locations.
ALL_REGIONS: Certificates with ALL_REGIONS scope are served from all GCP regions (You can only use ALL_REGIONS with global certs).
See https://cloud.google.com/compute/docs/regions-zones
*/
  Scope?: string;

  /*
Certificate data for a SelfManaged Certificate.
SelfManaged Certificates are uploaded by the user. Updating such
certificates before they expire remains the user's responsibility.
Structure is documented below.
*/
  SelfManaged?: Certificatemanager_CertificateSelfManaged;

  // A human-readable description of the resource.
  Description?: string;

  /*
Set of label tags associated with the Certificate resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The Certificate Manager location. If not specified, "global" is used.
  Location?: string;
}
export class Certificate extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Set of label tags associated with the Certificate resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The Certificate Manager location. If not specified, "global" is used.
  public Location?: string;

  /*
A user-defined name of the certificate. Certificate names must be unique
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]- which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Certificate data for a SelfManaged Certificate.
SelfManaged Certificates are uploaded by the user. Updating such
certificates before they expire remains the user's responsibility.
Structure is documented below.
*/
  public SelfManaged?: Certificatemanager_CertificateSelfManaged;

  // A human-readable description of the resource.
  public Description?: string;

  /*
Configuration and state of a Managed Certificate.
Certificate Manager provisions and renews Managed Certificates
automatically, for as long as it's authorized to do so.
Structure is documented below.
*/
  public Managed?: Certificatemanager_CertificateManaged;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The scope of the certificate.
DEFAULT: Certificates with default scope are served from core Google data centers.
If unsure, choose this option.
EDGE_CACHE: Certificates with scope EDGE_CACHE are special-purposed certificates, served from Edge Points of Presence.
See https://cloud.google.com/vpc/docs/edge-locations.
ALL_REGIONS: Certificates with ALL_REGIONS scope are served from all GCP regions (You can only use ALL_REGIONS with global certs).
See https://cloud.google.com/compute/docs/regions-zones
*/
  public Scope?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "SelfManaged",
        "Certificate data for a SelfManaged Certificate.\nSelfManaged Certificates are uploaded by the user. Updating such\ncertificates before they expire remains the user's responsibility.\nStructure is documented below.",
        Certificatemanager_CertificateSelfManaged_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human-readable description of the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Set of label tags associated with the Certificate resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
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
        InputType.Object,
        "Managed",
        "Configuration and state of a Managed Certificate.\nCertificate Manager provisions and renews Managed Certificates\nautomatically, for as long as it's authorized to do so.\nStructure is documented below.",
        Certificatemanager_CertificateManaged_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A user-defined name of the certificate. Certificate names must be unique\nThe name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,\nand all following characters must be a dash, underscore, letter or digit.\n\n\n- - -",
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
        "Scope",
        "The scope of the certificate.\nDEFAULT: Certificates with default scope are served from core Google data centers.\nIf unsure, choose this option.\nEDGE_CACHE: Certificates with scope EDGE_CACHE are special-purposed certificates, served from Edge Points of Presence.\nSee https://cloud.google.com/vpc/docs/edge-locations.\nALL_REGIONS: Certificates with ALL_REGIONS scope are served from all GCP regions (You can only use ALL_REGIONS with global certs).\nSee https://cloud.google.com/compute/docs/regions-zones",
        [],
        false,
        true,
      ),
    ];
  }
}
