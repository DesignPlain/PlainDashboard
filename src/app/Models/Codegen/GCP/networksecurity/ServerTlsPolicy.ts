import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networksecurity_ServerTlsPolicyServerCertificate,
  Networksecurity_ServerTlsPolicyServerCertificate_GetTypes,
} from "../types/Networksecurity_ServerTlsPolicyServerCertificate";
import {
  Networksecurity_ServerTlsPolicyMtlsPolicy,
  Networksecurity_ServerTlsPolicyMtlsPolicy_GetTypes,
} from "../types/Networksecurity_ServerTlsPolicyMtlsPolicy";

export interface ServerTlsPolicyArgs {
  /*
Name of the ServerTlsPolicy resource.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.
Structure is documented below.
*/
  ServerCertificate?: Networksecurity_ServerTlsPolicyServerCertificate;

  /*
This field applies only for Traffic Director policies. It is must be set to false for external HTTPS load balancer policies.
Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility.
Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.
*/
  AllowOpen?: boolean;

  // A free-text description of the resource. Max length 1024 characters.
  Description?: string;

  /*
Set of label tags associated with the ServerTlsPolicy resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The location of the server tls policy.
The default value is `global`.
*/
  Location?: string;

  /*
This field is required if the policy is used with external HTTPS load balancers. This field can be empty for Traffic Director.
Defines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections.
Structure is documented below.
*/
  MtlsPolicy?: Networksecurity_ServerTlsPolicyMtlsPolicy;
}
export class ServerTlsPolicy extends Resource {
  /*
This field applies only for Traffic Director policies. It is must be set to false for external HTTPS load balancer policies.
Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility.
Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.
*/
  public AllowOpen?: boolean;

  // Time the ServerTlsPolicy was created in UTC.
  public CreateTime?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Set of label tags associated with the ServerTlsPolicy resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Time the ServerTlsPolicy was updated in UTC.
  public UpdateTime?: string;

  /*
The location of the server tls policy.
The default value is `global`.
*/
  public Location?: string;

  /*
This field is required if the policy is used with external HTTPS load balancers. This field can be empty for Traffic Director.
Defines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections.
Structure is documented below.
*/
  public MtlsPolicy?: Networksecurity_ServerTlsPolicyMtlsPolicy;

  /*
Name of the ServerTlsPolicy resource.


- - -
*/
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.
Structure is documented below.
*/
  public ServerCertificate?: Networksecurity_ServerTlsPolicyServerCertificate;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the ServerTlsPolicy resource.\n\n\n- - -",
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
        InputType.Object,
        "ServerCertificate",
        "Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.\nStructure is documented below.",
        Networksecurity_ServerTlsPolicyServerCertificate_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "AllowOpen",
        "This field applies only for Traffic Director policies. It is must be set to false for external HTTPS load balancer policies.\nDetermines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility.\nConsider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.",
        [],
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
        "Set of label tags associated with the ServerTlsPolicy resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the server tls policy.\nThe default value is `global`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MtlsPolicy",
        "This field is required if the policy is used with external HTTPS load balancers. This field can be empty for Traffic Director.\nDefines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections.\nStructure is documented below.",
        Networksecurity_ServerTlsPolicyMtlsPolicy_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
