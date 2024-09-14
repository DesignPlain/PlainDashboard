import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface SslCertArgs {
  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  /*
The common name to be used in the certificate to identify the
client. Constrained to [a-zA-Z.-_ ]+. Changing this forces a new resource to be created.
*/
  commonName?: string;

  /*
The name of the Cloud SQL instance. Changing this
forces a new resource to be created.
*/
  instance?: string;
}
export class SslCert extends DS_Resource {
  // The SHA1 Fingerprint of the certificate.
  public sha1Fingerprint?: string;

  // The serial number extracted from the certificate data.
  public certSerialNumber?: string;

  /*
The common name to be used in the certificate to identify the
client. Constrained to [a-zA-Z.-_ ]+. Changing this forces a new resource to be created.
*/
  public commonName?: string;

  /*
The time when the certificate was created in RFC 3339 format,
for example 2012-11-15T16:19:00.094Z.
*/
  public createTime?: string;

  // The CA cert of the server this client cert was generated from.
  public serverCaCert?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  // The actual certificate data for this client certificate.
  public cert?: string;

  /*
The time when the certificate expires in RFC 3339 format,
for example 2012-11-15T16:19:00.094Z.
*/
  public expirationTime?: string;

  /*
The name of the Cloud SQL instance. Changing this
forces a new resource to be created.
*/
  public instance?: string;

  // The private key associated with the client certificate.
  public privateKey?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "commonName",
        "The common name to be used in the certificate to identify the\nclient. Constrained to [a-zA-Z.-_ ]+. Changing this forces a new resource to be created.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instance",
        "The name of the Cloud SQL instance. Changing this\nforces a new resource to be created.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
