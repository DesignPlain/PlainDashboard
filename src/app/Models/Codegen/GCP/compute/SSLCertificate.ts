import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SSLCertificateArgs {
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
Creates a unique name beginning with the
specified prefix. Conflicts with `name`.
*/
  NamePrefix?: string;

  /*
The write-only private key in PEM format.
--Note--: This property is sensitive and will not be displayed in the plan.


- - -
*/
  PrivateKey?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The certificate in PEM format.
The certificate chain must be no greater than 5 certs long.
The chain must include at least one intermediate cert.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Certificate?: string;

  // An optional description of this resource.
  Description?: string;
}
export class SSLCertificate extends Resource {
  // An optional description of this resource.
  public Description?: string;

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
The write-only private key in PEM format.
--Note--: This property is sensitive and will not be displayed in the plan.


- - -
*/
  public PrivateKey?: string;

  // The unique identifier for the resource.
  public CertificateId?: number;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
Creates a unique name beginning with the
specified prefix. Conflicts with `name`.
*/
  public NamePrefix?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
The certificate in PEM format.
The certificate chain must be no greater than 5 certs long.
The chain must include at least one intermediate cert.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public Certificate?: string;

  // Expire time of the certificate in RFC3339 text format.
  public ExpireTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "PrivateKey",
        "The write-only private key in PEM format.\n**Note**: This property is sensitive and will not be displayed in the plan.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Certificate",
        "The certificate in PEM format.\nThe certificate chain must be no greater than 5 certs long.\nThe chain must include at least one intermediate cert.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.\n\nThese are in the same namespace as the managed SSL certificates.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NamePrefix",
        "Creates a unique name beginning with the\nspecified prefix. Conflicts with `name`.",
      ),
    ];
  }
}
