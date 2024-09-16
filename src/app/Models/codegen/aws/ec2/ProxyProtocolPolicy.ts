import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ProxyProtocolPolicyArgs {
  /*
List of instance ports to which the policy
should be applied. This can be specified if the protocol is SSL or TCP.
*/
  instancePorts?: Array<string>;

  /*
The load balancer to which the policy
should be attached.
*/
  loadBalancer?: string;
}
export class ProxyProtocolPolicy extends DS_Resource {
  /*
List of instance ports to which the policy
should be applied. This can be specified if the protocol is SSL or TCP.
*/
  public instancePorts?: Array<string>;

  /*
The load balancer to which the policy
should be attached.
*/
  public loadBalancer?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'loadBalancer',
        'The load balancer to which the policy\nshould be attached.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'instancePorts',
        'List of instance ports to which the policy\nshould be applied. This can be specified if the protocol is SSL or TCP.',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
