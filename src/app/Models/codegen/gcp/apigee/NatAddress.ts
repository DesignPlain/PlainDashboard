import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface NatAddressArgs {
  /*
The Apigee instance associated with the Apigee environment,
in the format `organizations/{{org_name}}/instances/{{instance_name}}`.


- - -
*/
  instanceId?: string;

  // Resource ID of the NAT address.
  name?: string;
}
export class NatAddress extends DS_Resource {
  /*
The Apigee instance associated with the Apigee environment,
in the format `organizations/{{org_name}}/instances/{{instance_name}}`.


- - -
*/
  public instanceId?: string;

  // The allocated NAT IP address.
  public ipAddress?: string;

  // Resource ID of the NAT address.
  public name?: string;

  // State of the NAT IP address.
  public state?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'instanceId',
        'The Apigee instance associated with the Apigee environment,\nin the format `organizations/{{org_name}}/instances/{{instance_name}}`.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Resource ID of the NAT address.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
