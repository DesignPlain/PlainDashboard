import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networksecurity_ClientTlsPolicyClientCertificate,
  networksecurity_ClientTlsPolicyClientCertificate_GetTypes,
} from "../types/networksecurity_ClientTlsPolicyClientCertificate";
import {
  networksecurity_ClientTlsPolicyServerValidationCa,
  networksecurity_ClientTlsPolicyServerValidationCa_GetTypes,
} from "../types/networksecurity_ClientTlsPolicyServerValidationCa";

export interface ClientTlsPolicyArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate.
Structure is documented below.
*/
  serverValidationCas?: Array<networksecurity_ClientTlsPolicyServerValidationCa>;

  // Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".
  sni?: string;

  /*
Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.
Structure is documented below.
*/
  clientCertificate?: networksecurity_ClientTlsPolicyClientCertificate;

  // A free-text description of the resource. Max length 1024 characters.
  description?: string;

  /*
Set of label tags associated with the ClientTlsPolicy resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The location of the client tls policy.
The default value is `global`.
*/
  location?: string;

  /*
Name of the ClientTlsPolicy resource.


- - -
*/
  name?: string;
}
export class ClientTlsPolicy extends DS_Resource {
  // Time the ClientTlsPolicy was updated in UTC.
  public updateTime?: string;

  // Time the ClientTlsPolicy was created in UTC.
  public createTime?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public description?: string;

  /*
The location of the client tls policy.
The default value is `global`.
*/
  public location?: string;

  /*
Name of the ClientTlsPolicy resource.


- - -
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".
  public sni?: string;

  /*
Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.
Structure is documented below.
*/
  public clientCertificate?: networksecurity_ClientTlsPolicyClientCertificate;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Set of label tags associated with the ClientTlsPolicy resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate.
Structure is documented below.
*/
  public serverValidationCas?: Array<networksecurity_ClientTlsPolicyServerValidationCa>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the ClientTlsPolicy resource.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "serverValidationCas",
        "Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate.\nStructure is documented below.",
        () => networksecurity_ClientTlsPolicyServerValidationCa_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sni",
        'Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "clientCertificate",
        "Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.\nStructure is documented below.",
        () => networksecurity_ClientTlsPolicyClientCertificate_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A free-text description of the resource. Max length 1024 characters.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Set of label tags associated with the ClientTlsPolicy resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the client tls policy.\nThe default value is `global`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
