import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SSLCertificateArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The certificate in PEM format.
The certificate chain must be no greater than 5 certs long.
The chain must include at least one intermediate cert.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  certificate?: string;

  // An optional description of this resource.
  description?: string;

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
  name?: string;

  /*
Creates a unique name beginning with the
specified prefix. Conflicts with `name`.
*/
  namePrefix?: string;

  /*
The write-only private key in PEM format.
--Note--: This property is sensitive and will not be displayed in the plan.


- - -
*/
  privateKey?: string;
}
export class SSLCertificate extends Resource {
  // Expire time of the certificate in RFC3339 text format.
  public expireTime?: string;

  /*
Creates a unique name beginning with the
specified prefix. Conflicts with `name`.
*/
  public namePrefix?: string;

  /*
The write-only private key in PEM format.
--Note--: This property is sensitive and will not be displayed in the plan.


- - -
*/
  public privateKey?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // The unique identifier for the resource.
  public certificateId?: number;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

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
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The certificate in PEM format.
The certificate chain must be no greater than 5 certs long.
The chain must include at least one intermediate cert.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public certificate?: string;

  // An optional description of this resource.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "certificate",
        "The certificate in PEM format.\nThe certificate chain must be no greater than 5 certs long.\nThe chain must include at least one intermediate cert.\n**Note**: This property is sensitive and will not be displayed in the plan.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.\n\nThese are in the same namespace as the managed SSL certificates.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the\nspecified prefix. Conflicts with `name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "privateKey",
        "The write-only private key in PEM format.\n**Note**: This property is sensitive and will not be displayed in the plan.\n\n\n- - -",
        [],
        true,
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
    ];
  }
}
