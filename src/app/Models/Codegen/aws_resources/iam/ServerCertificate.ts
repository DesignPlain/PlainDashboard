import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ServerCertificateArgs {
  /*
The contents of the certificate chain.
This is typically a concatenation of the PEM-encoded public key certificates
of the chain.
*/
  certificateChain?: string;

  /*
The name of the Server Certificate. Do not include the
path in this value. If omitted, the provider will assign a random, unique name.
*/
  name?: string;

  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  namePrefix?: string;

  /*
The IAM path for the server certificate.  If it is not
included, it defaults to a slash (/). If this certificate is for use with
AWS CloudFront, the path must be in format `/cloudfront/your_path_here`.
See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more details on IAM Paths.
*/
  path?: string;

  // The contents of the private key in PEM-encoded format.
  privateKey?: string;

  /*
Map of resource tags for the server certificate. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

> --NOTE:-- AWS performs behind-the-scenes modifications to some certificate files if they do not adhere to a specific format. These modifications will result in this provider forever believing that it needs to update the resources since the local and AWS file contents will not match after theses modifications occur. In order to prevent this from happening you must ensure that all your PEM-encoded files use UNIX line-breaks and that `certificate_body` contains only one certificate. All other certificates should go in `certificate_chain`. It is common for some Certificate Authorities to issue certificate files that have DOS line-breaks and that are actually multiple certificates concatenated together in order to form a full certificate chain.
*/
  tags?: Map<string, string>;

  /*
The contents of the public key certificate in
PEM-encoded format.
*/
  certificateBody?: string;
}
export class ServerCertificate extends Resource {
  /*
The contents of the certificate chain.
This is typically a concatenation of the PEM-encoded public key certificates
of the chain.
*/
  public certificateChain?: string;

  /*
The name of the Server Certificate. Do not include the
path in this value. If omitted, the provider will assign a random, unique name.
*/
  public name?: string;

  /*
Creates a unique name beginning with the specified
prefix. Conflicts with `name`.
*/
  public namePrefix?: string;

  // Date and time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) when the server certificate was uploaded.
  public uploadDate?: string;

  // The Amazon Resource Name (ARN) specifying the server certificate.
  public arn?: string;

  /*
The contents of the public key certificate in
PEM-encoded format.
*/
  public certificateBody?: string;

  // Date and time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) on which the certificate is set to expire.
  public expiration?: string;

  /*
The IAM path for the server certificate.  If it is not
included, it defaults to a slash (/). If this certificate is for use with
AWS CloudFront, the path must be in format `/cloudfront/your_path_here`.
See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more details on IAM Paths.
*/
  public path?: string;

  // The contents of the private key in PEM-encoded format.
  public privateKey?: string;

  /*
Map of resource tags for the server certificate. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

> --NOTE:-- AWS performs behind-the-scenes modifications to some certificate files if they do not adhere to a specific format. These modifications will result in this provider forever believing that it needs to update the resources since the local and AWS file contents will not match after theses modifications occur. In order to prevent this from happening you must ensure that all your PEM-encoded files use UNIX line-breaks and that `certificate_body` contains only one certificate. All other certificates should go in `certificate_chain`. It is common for some Certificate Authorities to issue certificate files that have DOS line-breaks and that are actually multiple certificates concatenated together in order to form a full certificate chain.
*/
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "privateKey",
        "The contents of the private key in PEM-encoded format.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of resource tags for the server certificate. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\n> **NOTE:** AWS performs behind-the-scenes modifications to some certificate files if they do not adhere to a specific format. These modifications will result in this provider forever believing that it needs to update the resources since the local and AWS file contents will not match after theses modifications occur. In order to prevent this from happening you must ensure that all your PEM-encoded files use UNIX line-breaks and that `certificate_body` contains only one certificate. All other certificates should go in `certificate_chain`. It is common for some Certificate Authorities to issue certificate files that have DOS line-breaks and that are actually multiple certificates concatenated together in order to form a full certificate chain.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateBody",
        "The contents of the public key certificate in\nPEM-encoded format.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateChain",
        "The contents of the certificate chain.\nThis is typically a concatenation of the PEM-encoded public key certificates\nof the chain.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Server Certificate. Do not include the\npath in this value. If omitted, the provider will assign a random, unique name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified\nprefix. Conflicts with `name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "path",
        "The IAM path for the server certificate.  If it is not\nincluded, it defaults to a slash (/). If this certificate is for use with\nAWS CloudFront, the path must be in format `/cloudfront/your_path_here`.\nSee [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more details on IAM Paths.",
        [],
        false,
        true,
      ),
    ];
  }
}
