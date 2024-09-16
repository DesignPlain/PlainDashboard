import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ConfigArgs {
  /*
The description to associate with the runtime
config.
*/
  description?: string;

  /*
The name of the runtime config.

- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;
}
export class Config extends DS_Resource {
  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  /*
The description to associate with the runtime
config.
*/
  public description?: string;

  /*
The name of the runtime config.

- - -
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'The description to associate with the runtime\nconfig.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the runtime config.\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
