import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dns_ResponsePolicyGkeCluster,
  dns_ResponsePolicyGkeCluster_GetTypes,
} from '../types/dns_ResponsePolicyGkeCluster';
import {
  dns_ResponsePolicyNetwork,
  dns_ResponsePolicyNetwork_GetTypes,
} from '../types/dns_ResponsePolicyNetwork';

export interface ResponsePolicyArgs {
  /*
The user assigned name for this Response Policy, such as `myresponsepolicy`.


- - -
*/
  responsePolicyName?: string;

  // The description of the response policy, such as `My new response policy`.
  description?: string;

  /*
The list of Google Kubernetes Engine clusters that can see this zone.
Structure is documented below.
*/
  gkeClusters?: Array<dns_ResponsePolicyGkeCluster>;

  /*
The list of network names specifying networks to which this policy is applied.
Structure is documented below.
*/
  networks?: Array<dns_ResponsePolicyNetwork>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class ResponsePolicy extends DS_Resource {
  /*
The list of Google Kubernetes Engine clusters that can see this zone.
Structure is documented below.
*/
  public gkeClusters?: Array<dns_ResponsePolicyGkeCluster>;

  /*
The list of network names specifying networks to which this policy is applied.
Structure is documented below.
*/
  public networks?: Array<dns_ResponsePolicyNetwork>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The user assigned name for this Response Policy, such as `myresponsepolicy`.


- - -
*/
  public responsePolicyName?: string;

  // The description of the response policy, such as `My new response policy`.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'responsePolicyName',
        'The user assigned name for this Response Policy, such as `myresponsepolicy`.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'The description of the response policy, such as `My new response policy`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'gkeClusters',
        'The list of Google Kubernetes Engine clusters that can see this zone.\nStructure is documented below.',
        () => dns_ResponsePolicyGkeCluster_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'networks',
        'The list of network names specifying networks to which this policy is applied.\nStructure is documented below.',
        () => dns_ResponsePolicyNetwork_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
