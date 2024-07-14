import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  alb_ListenerMutualAuthentication,
  alb_ListenerMutualAuthentication_GetTypes,
} from "../types/alb_ListenerMutualAuthentication";
import {
  alb_ListenerDefaultAction,
  alb_ListenerDefaultAction_GetTypes,
} from "../types/alb_ListenerDefaultAction";

export interface ListenerArgs {
  // ARN of the default SSL server certificate. Exactly one certificate is required if the protocol is HTTPS. For adding additional SSL certificates, see the `aws.lb.ListenerCertificate` resource.
  certificateArn?: string;

  // Configuration block for default actions. Detailed below.
  defaultActions?: Array<alb_ListenerDefaultAction>;

  // Port on which the load balancer is listening. Not valid for Gateway Load Balancers.
  port?: number;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

> --NOTE::-- Please note that listeners that are attached to Application Load Balancers must use either `HTTP` or `HTTPS` protocols while listeners that are attached to Network Load Balancers must use the `TCP` protocol.
*/
  tags?: Map<string, string>;

  // Name of the Application-Layer Protocol Negotiation (ALPN) policy. Can be set if `protocol` is `TLS`. Valid values are `HTTP1Only`, `HTTP2Only`, `HTTP2Optional`, `HTTP2Preferred`, and `None`.
  alpnPolicy?: string;

  /*
ARN of the load balancer.

The following arguments are optional:
*/
  loadBalancerArn?: string;

  // The mutual authentication configuration information. Detailed below.
  mutualAuthentication?: alb_ListenerMutualAuthentication;

  // Protocol for connections from clients to the load balancer. For Application Load Balancers, valid values are `HTTP` and `HTTPS`, with a default of `HTTP`. For Network Load Balancers, valid values are `TCP`, `TLS`, `UDP`, and `TCP_UDP`. Not valid to use `UDP` or `TCP_UDP` if dual-stack mode is enabled. Not valid for Gateway Load Balancers.
  protocol?: string;

  // Name of the SSL Policy for the listener. Required if `protocol` is `HTTPS` or `TLS`.
  sslPolicy?: string;
}
export class Listener extends Resource {
  /*
ARN of the target group.

The following arguments are optional:
*/
  public arn?: string;

  // ARN of the default SSL server certificate. Exactly one certificate is required if the protocol is HTTPS. For adding additional SSL certificates, see the `aws.lb.ListenerCertificate` resource.
  public certificateArn?: string;

  /*
ARN of the load balancer.

The following arguments are optional:
*/
  public loadBalancerArn?: string;

  // Port on which the load balancer is listening. Not valid for Gateway Load Balancers.
  public port?: number;

  // Protocol for connections from clients to the load balancer. For Application Load Balancers, valid values are `HTTP` and `HTTPS`, with a default of `HTTP`. For Network Load Balancers, valid values are `TCP`, `TLS`, `UDP`, and `TCP_UDP`. Not valid to use `UDP` or `TCP_UDP` if dual-stack mode is enabled. Not valid for Gateway Load Balancers.
  public protocol?: string;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

> --NOTE::-- Please note that listeners that are attached to Application Load Balancers must use either `HTTP` or `HTTPS` protocols while listeners that are attached to Network Load Balancers must use the `TCP` protocol.
*/
  public tags?: Map<string, string>;

  // Name of the Application-Layer Protocol Negotiation (ALPN) policy. Can be set if `protocol` is `TLS`. Valid values are `HTTP1Only`, `HTTP2Only`, `HTTP2Optional`, `HTTP2Preferred`, and `None`.
  public alpnPolicy?: string;

  // Configuration block for default actions. Detailed below.
  public defaultActions?: Array<alb_ListenerDefaultAction>;

  // The mutual authentication configuration information. Detailed below.
  public mutualAuthentication?: alb_ListenerMutualAuthentication;

  // Name of the SSL Policy for the listener. Required if `protocol` is `HTTPS` or `TLS`.
  public sslPolicy?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "certificateArn",
        "ARN of the default SSL server certificate. Exactly one certificate is required if the protocol is HTTPS. For adding additional SSL certificates, see the `aws.lb.ListenerCertificate` resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "defaultActions",
        "Configuration block for default actions. Detailed below.",
        alb_ListenerDefaultAction_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\n> **NOTE::** Please note that listeners that are attached to Application Load Balancers must use either `HTTP` or `HTTPS` protocols while listeners that are attached to Network Load Balancers must use the `TCP` protocol.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "alpnPolicy",
        "Name of the Application-Layer Protocol Negotiation (ALPN) policy. Can be set if `protocol` is `TLS`. Valid values are `HTTP1Only`, `HTTP2Only`, `HTTP2Optional`, `HTTP2Preferred`, and `None`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "mutualAuthentication",
        "The mutual authentication configuration information. Detailed below.",
        alb_ListenerMutualAuthentication_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "protocol",
        "Protocol for connections from clients to the load balancer. For Application Load Balancers, valid values are `HTTP` and `HTTPS`, with a default of `HTTP`. For Network Load Balancers, valid values are `TCP`, `TLS`, `UDP`, and `TCP_UDP`. Not valid to use `UDP` or `TCP_UDP` if dual-stack mode is enabled. Not valid for Gateway Load Balancers.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sslPolicy",
        "Name of the SSL Policy for the listener. Required if `protocol` is `HTTPS` or `TLS`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "Port on which the load balancer is listening. Not valid for Gateway Load Balancers.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "loadBalancerArn",
        "ARN of the load balancer.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
    ];
  }
}
