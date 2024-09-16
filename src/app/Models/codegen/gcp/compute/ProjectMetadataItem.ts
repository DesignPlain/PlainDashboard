import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ProjectMetadataItemArgs {
  // The metadata key to set.
  key?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  /*
The value to set for the given metadata key.

- - -
*/
  value?: string;
}
export class ProjectMetadataItem extends DS_Resource {
  // The metadata key to set.
  public key?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  /*
The value to set for the given metadata key.

- - -
*/
  public value?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'key',
        'The metadata key to set.',
        () => [],
        true,
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
      new DynamicUIProps(
        InputType.String,
        'value',
        'The value to set for the given metadata key.\n\n- - -',
        () => [],
        true,
        false,
      ),
    ];
  }
}
