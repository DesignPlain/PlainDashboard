import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface EgressPolicyArgs {
  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  egressPolicyName?: string;

  // A GCP resource that is inside of the service perimeter.
  resource?: string;
}
export class EgressPolicy extends DS_Resource {
  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  public egressPolicyName?: string;

  // A GCP resource that is inside of the service perimeter.
  public resource?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'resource',
        'A GCP resource that is inside of the service perimeter.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'egressPolicyName',
        'The name of the Service Perimeter to add this resource to.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
    ];
  }
}
