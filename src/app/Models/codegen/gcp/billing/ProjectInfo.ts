import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ProjectInfoArgs {
  /*
The ID of the billing account associated with the project, if
any. Set to empty string to disable billing for the project.
For example, `"012345-567890-ABCDEF"` or `""`.


- - -
*/
  billingAccount?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class ProjectInfo extends DS_Resource {
  /*
The ID of the billing account associated with the project, if
any. Set to empty string to disable billing for the project.
For example, `"012345-567890-ABCDEF"` or `""`.


- - -
*/
  public billingAccount?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'billingAccount',
        'The ID of the billing account associated with the project, if\nany. Set to empty string to disable billing for the project.\nFor example, `"012345-567890-ABCDEF"` or `""`.\n\n\n- - -',
        () => [],
        true,
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
