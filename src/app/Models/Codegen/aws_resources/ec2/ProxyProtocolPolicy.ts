import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

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
export class ProxyProtocolPolicy extends Resource {
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
        "loadBalancer",
        "The load balancer to which the policy\nshould be attached.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "instancePorts",
        "List of instance ports to which the policy\nshould be applied. This can be specified if the protocol is SSL or TCP.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
