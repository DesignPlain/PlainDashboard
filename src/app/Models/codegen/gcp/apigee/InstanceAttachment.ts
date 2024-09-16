import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface InstanceAttachmentArgs {
  // The resource ID of the environment.
  environment?: string;

  /*
The Apigee instance associated with the Apigee environment,
in the format `organizations/{{org_name}}/instances/{{instance_name}}`.


- - -
*/
  instanceId?: string;
}
export class InstanceAttachment extends DS_Resource {
  // The resource ID of the environment.
  public environment?: string;

  /*
The Apigee instance associated with the Apigee environment,
in the format `organizations/{{org_name}}/instances/{{instance_name}}`.


- - -
*/
  public instanceId?: string;

  // The name of the newly created  attachment (output parameter).
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'environment',
        'The resource ID of the environment.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'instanceId',
        'The Apigee instance associated with the Apigee environment,\nin the format `organizations/{{org_name}}/instances/{{instance_name}}`.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
    ];
  }
}
