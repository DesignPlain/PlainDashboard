import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_ManagedSslCertificateManaged,
  Compute_ManagedSslCertificateManaged_GetTypes,
} from "../types/Compute_ManagedSslCertificateManaged";

export interface ManagedSslCertificateArgs {
  // The unique identifier for the resource.
  CertificateId?: number;

  // An optional description of this resource.
  Description?: string;

  /*
Properties relevant to a managed certificate.  These will be used if the
certificate is managed (as indicated by a value of `MANAGED` in `type`).
Structure is documented below.
*/
  Managed?: Compute_ManagedSslCertificateManaged;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

These are in the same namespace as the managed SSL certificates.
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Enum field whose value is always `MANAGED` - used to signal to the API
which type this is.
Default value is `MANAGED`.
Possible values are: `MANAGED`.
*/
  Type?: string;
}
export class ManagedSslCertificate extends Resource {
  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

These are in the same namespace as the managed SSL certificates.
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  // The unique identifier for the resource.
  public CertificateId?: number;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
Properties relevant to a managed certificate.  These will be used if the
certificate is managed (as indicated by a value of `MANAGED` in `type`).
Structure is documented below.
*/
  public Managed?: Compute_ManagedSslCertificateManaged;

  // Domains associated with the certificate via Subject Alternative Name.
  public SubjectAlternativeNames?: Array<string>;

  /*
Enum field whose value is always `MANAGED` - used to signal to the API
which type this is.
Default value is `MANAGED`.
Possible values are: `MANAGED`.
*/
  public Type?: string;

  // An optional description of this resource.
  public Description?: string;

  // Expire time of the certificate in RFC3339 text format.
  public ExpireTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Type",
        "Enum field whose value is always `MANAGED` - used to signal to the API\nwhich type this is.\nDefault value is `MANAGED`.\nPossible values are: `MANAGED`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "CertificateId",
        "The unique identifier for the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Managed",
        "Properties relevant to a managed certificate.  These will be used if the\ncertificate is managed (as indicated by a value of `MANAGED` in `type`).\nStructure is documented below.",
        Compute_ManagedSslCertificateManaged_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.\n\nThese are in the same namespace as the managed SSL certificates.",
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
    ];
  }
}
