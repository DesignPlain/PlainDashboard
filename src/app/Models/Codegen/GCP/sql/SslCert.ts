import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SslCertArgs {
  /*
The common name to be used in the certificate to identify the
client. Constrained to [a-zA-Z.-_ ]+. Changing this forces a new resource to be created.
*/
  CommonName?: string;

  /*
The name of the Cloud SQL instance. Changing this
forces a new resource to be created.
*/
  Instance?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;
}
export class SslCert extends Resource {
  /*
The common name to be used in the certificate to identify the
client. Constrained to [a-zA-Z.-_ ]+. Changing this forces a new resource to be created.
*/
  public CommonName?: string;

  /*
The time when the certificate was created in RFC 3339 format,
for example 2012-11-15T16:19:00.094Z.
*/
  public CreateTime?: string;

  /*
The name of the Cloud SQL instance. Changing this
forces a new resource to be created.
*/
  public Instance?: string;

  // The CA cert of the server this client cert was generated from.
  public ServerCaCert?: string;

  // The SHA1 Fingerprint of the certificate.
  public Sha1Fingerprint?: string;

  // The actual certificate data for this client certificate.
  public Cert?: string;

  // The serial number extracted from the certificate data.
  public CertSerialNumber?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The time when the certificate expires in RFC 3339 format,
for example 2012-11-15T16:19:00.094Z.
*/
  public ExpirationTime?: string;

  // The private key associated with the client certificate.
  public PrivateKey?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Instance",
        "The name of the Cloud SQL instance. Changing this\nforces a new resource to be created.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CommonName",
        "The common name to be used in the certificate to identify the\nclient. Constrained to [a-zA-Z.-_ ]+. Changing this forces a new resource to be created.",
      ),
    ];
  }
}
