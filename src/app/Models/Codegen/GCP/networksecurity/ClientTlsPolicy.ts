import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networksecurity_ClientTlsPolicyServerValidationCa,
  Networksecurity_ClientTlsPolicyServerValidationCa_GetTypes,
} from "../types/Networksecurity_ClientTlsPolicyServerValidationCa";
import {
  Networksecurity_ClientTlsPolicyClientCertificate,
  Networksecurity_ClientTlsPolicyClientCertificate_GetTypes,
} from "../types/Networksecurity_ClientTlsPolicyClientCertificate";

export interface ClientTlsPolicyArgs {
  // A free-text description of the resource. Max length 1024 characters.
  Description?: string;

  /*
Set of label tags associated with the ClientTlsPolicy resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The location of the client tls policy.
The default value is `global`.
*/
  Location?: string;

  /*
Name of the ClientTlsPolicy resource.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate.
Structure is documented below.
*/
  ServerValidationCas?: Array<Networksecurity_ClientTlsPolicyServerValidationCa>;

  // Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".
  Sni?: string;

  /*
Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.
Structure is documented below.
*/
  ClientCertificate?: Networksecurity_ClientTlsPolicyClientCertificate;
}
export class ClientTlsPolicy extends Resource {
  // Time the ClientTlsPolicy was updated in UTC.
  public UpdateTime?: string;

  // Time the ClientTlsPolicy was created in UTC.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Set of label tags associated with the ClientTlsPolicy resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Name of the ClientTlsPolicy resource.


- - -
*/
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate.
Structure is documented below.
*/
  public ServerValidationCas?: Array<Networksecurity_ClientTlsPolicyServerValidationCa>;

  /*
Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.
Structure is documented below.
*/
  public ClientCertificate?: Networksecurity_ClientTlsPolicyClientCertificate;

  // A free-text description of the resource. Max length 1024 characters.
  public Description?: string;

  /*
The location of the client tls policy.
The default value is `global`.
*/
  public Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".
  public Sni?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ServerValidationCas",
        "Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate.\nStructure is documented below.",
        Networksecurity_ClientTlsPolicyServerValidationCa_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Sni",
        'Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ClientCertificate",
        "Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.\nStructure is documented below.",
        Networksecurity_ClientTlsPolicyClientCertificate_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A free-text description of the resource. Max length 1024 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Set of label tags associated with the ClientTlsPolicy resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the client tls policy.\nThe default value is `global`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the ClientTlsPolicy resource.\n\n\n- - -",
        [],
        false,
        true,
      ),
    ];
  }
}
