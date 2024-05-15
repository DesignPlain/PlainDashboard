import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ProjectInfoArgs {
  /*
The ID of the billing account associated with the project, if
any. Set to empty string to disable billing for the project.
For example, `"012345-567890-ABCDEF"` or `""`.


- - -
*/
  BillingAccount?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class ProjectInfo extends Resource {
  /*
The ID of the billing account associated with the project, if
any. Set to empty string to disable billing for the project.
For example, `"012345-567890-ABCDEF"` or `""`.


- - -
*/
  public BillingAccount?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BillingAccount",
        'The ID of the billing account associated with the project, if\nany. Set to empty string to disable billing for the project.\nFor example, `"012345-567890-ABCDEF"` or `""`.\n\n\n- - -',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
