import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  elb_SslNegotiationPolicyAttribute,
  elb_SslNegotiationPolicyAttribute_GetTypes,
} from "../types/elb_SslNegotiationPolicyAttribute";

export interface SslNegotiationPolicyArgs {
  /*
The load balancer port to which the policy
should be applied. This must be an active listener on the load
balancer.
*/
  lbPort?: number;

  /*
The load balancer to which the policy
should be attached.
*/
  loadBalancer?: string;

  // The name of the attribute
  name?: string;

  /*
Map of arbitrary keys and values that, when changed, will trigger a redeployment.

To set your attributes, please see the [AWS Elastic Load Balancing Developer Guide](http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-security-policy-table.html) for a listing of the supported SSL protocols, SSL options, and SSL ciphers.

> --NOTE:-- The AWS documentation references Server Order Preference, which the AWS Elastic Load Balancing API refers to as `Server-Defined-Cipher-Order`. If you wish to set Server Order Preference, use this value instead.
*/
  triggers?: Map<string, string>;

  // An SSL Negotiation policy attribute. Each has two properties:
  attributes?: Array<elb_SslNegotiationPolicyAttribute>;
}
export class SslNegotiationPolicy extends Resource {
  /*
The load balancer port to which the policy
should be applied. This must be an active listener on the load
balancer.
*/
  public lbPort?: number;

  /*
The load balancer to which the policy
should be attached.
*/
  public loadBalancer?: string;

  // The name of the attribute
  public name?: string;

  /*
Map of arbitrary keys and values that, when changed, will trigger a redeployment.

To set your attributes, please see the [AWS Elastic Load Balancing Developer Guide](http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-security-policy-table.html) for a listing of the supported SSL protocols, SSL options, and SSL ciphers.

> --NOTE:-- The AWS documentation references Server Order Preference, which the AWS Elastic Load Balancing API refers to as `Server-Defined-Cipher-Order`. If you wish to set Server Order Preference, use this value instead.
*/
  public triggers?: Map<string, string>;

  // An SSL Negotiation policy attribute. Each has two properties:
  public attributes?: Array<elb_SslNegotiationPolicyAttribute>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "lbPort",
        "The load balancer port to which the policy\nshould be applied. This must be an active listener on the load\nbalancer.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "loadBalancer",
        "The load balancer to which the policy\nshould be attached.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the attribute",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "triggers",
        "Map of arbitrary keys and values that, when changed, will trigger a redeployment.\n\nTo set your attributes, please see the [AWS Elastic Load Balancing Developer Guide](http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-security-policy-table.html) for a listing of the supported SSL protocols, SSL options, and SSL ciphers.\n\n> **NOTE:** The AWS documentation references Server Order Preference, which the AWS Elastic Load Balancing API refers to as `Server-Defined-Cipher-Order`. If you wish to set Server Order Preference, use this value instead.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "attributes",
        "An SSL Negotiation policy attribute. Each has two properties:",
        elb_SslNegotiationPolicyAttribute_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
