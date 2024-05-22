import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SourceRepositoryArgs {
  /*
The name of the project in the CodeCatalyst space.

The following arguments are optional:
*/
  projectName?: string;

  // The name of the CodeCatalyst space.
  spaceName?: string;

  // The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose.
  description?: string;

  // The name of the source repository. For more information about name requirements, see [Quotas for source repositories](https://docs.aws.amazon.com/codecatalyst/latest/userguide/source-quotas.html).
  name?: string;
}
export class SourceRepository extends Resource {
  // The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose.
  public description?: string;

  // The name of the source repository. For more information about name requirements, see [Quotas for source repositories](https://docs.aws.amazon.com/codecatalyst/latest/userguide/source-quotas.html).
  public name?: string;

  /*
The name of the project in the CodeCatalyst space.

The following arguments are optional:
*/
  public projectName?: string;

  // The name of the CodeCatalyst space.
  public spaceName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "projectName",
        "The name of the project in the CodeCatalyst space.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "spaceName",
        "The name of the CodeCatalyst space.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the source repository. For more information about name requirements, see [Quotas for source repositories](https://docs.aws.amazon.com/codecatalyst/latest/userguide/source-quotas.html).",
        [],
        false,
        false,
      ),
    ];
  }
}
