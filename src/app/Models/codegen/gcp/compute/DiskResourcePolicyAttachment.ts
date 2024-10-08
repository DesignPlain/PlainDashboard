import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface DiskResourcePolicyAttachmentArgs {
  /*
The name of the disk in which the resource policies are attached to.


- - -
*/
  disk?: string;

  /*
The resource policy to be attached to the disk for scheduling snapshot
creation. Do not specify the self link.
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // A reference to the zone where the disk resides.
  zone?: string;
}
export class DiskResourcePolicyAttachment extends DS_Resource {
  // A reference to the zone where the disk resides.
  public zone?: string;

  /*
The name of the disk in which the resource policies are attached to.


- - -
*/
  public disk?: string;

  /*
The resource policy to be attached to the disk for scheduling snapshot
creation. Do not specify the self link.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'disk',
        'The name of the disk in which the resource policies are attached to.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The resource policy to be attached to the disk for scheduling snapshot\ncreation. Do not specify the self link.',
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
        InputType.String,
        'zone',
        'A reference to the zone where the disk resides.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
