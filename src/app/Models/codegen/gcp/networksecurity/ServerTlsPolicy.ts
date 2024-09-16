import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networksecurity_ServerTlsPolicyServerCertificate,
  networksecurity_ServerTlsPolicyServerCertificate_GetTypes,
} from '../types/networksecurity_ServerTlsPolicyServerCertificate';
import {
  networksecurity_ServerTlsPolicyMtlsPolicy,
  networksecurity_ServerTlsPolicyMtlsPolicy_GetTypes,
} from '../types/networksecurity_ServerTlsPolicyMtlsPolicy';

export interface ServerTlsPolicyArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.
Structure is documented below.
*/
  serverCertificate?: networksecurity_ServerTlsPolicyServerCertificate;

  /*
This field applies only for Traffic Director policies. It is must be set to false for external HTTPS load balancer policies.
Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility.
Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.
*/
  allowOpen?: boolean;

  // A free-text description of the resource. Max length 1024 characters.
  description?: string;

  /*
Set of label tags associated with the ServerTlsPolicy resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The location of the server tls policy.
The default value is `global`.
*/
  location?: string;

  /*
This field is required if the policy is used with external HTTPS load balancers. This field can be empty for Traffic Director.
Defines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections.
Structure is documented below.
*/
  mtlsPolicy?: networksecurity_ServerTlsPolicyMtlsPolicy;

  /*
Name of the ServerTlsPolicy resource.


- - -
*/
  name?: string;
}
export class ServerTlsPolicy extends DS_Resource {
  /*
Name of the ServerTlsPolicy resource.


- - -
*/
  public name?: string;

  /*
Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.
Structure is documented below.
*/
  public serverCertificate?: networksecurity_ServerTlsPolicyServerCertificate;

  // Time the ServerTlsPolicy was updated in UTC.
  public updateTime?: string;

  /*
This field applies only for Traffic Director policies. It is must be set to false for external HTTPS load balancer policies.
Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility.
Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.
*/
  public allowOpen?: boolean;

  // A free-text description of the resource. Max length 1024 characters.
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
This field is required if the policy is used with external HTTPS load balancers. This field can be empty for Traffic Director.
Defines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections.
Structure is documented below.
*/
  public mtlsPolicy?: networksecurity_ServerTlsPolicyMtlsPolicy;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Time the ServerTlsPolicy was created in UTC.
  public createTime?: string;

  /*
Set of label tags associated with the ServerTlsPolicy resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The location of the server tls policy.
The default value is `global`.
*/
  public location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location of the server tls policy.\nThe default value is `global`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'mtlsPolicy',
        'This field is required if the policy is used with external HTTPS load balancers. This field can be empty for Traffic Director.\nDefines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections.\nStructure is documented below.',
        () => networksecurity_ServerTlsPolicyMtlsPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the ServerTlsPolicy resource.\n\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'serverCertificate',
        'Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.\nStructure is documented below.',
        () => networksecurity_ServerTlsPolicyServerCertificate_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'allowOpen',
        'This field applies only for Traffic Director policies. It is must be set to false for external HTTPS load balancer policies.\nDetermines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility.\nConsider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A free-text description of the resource. Max length 1024 characters.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'Set of label tags associated with the ServerTlsPolicy resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
