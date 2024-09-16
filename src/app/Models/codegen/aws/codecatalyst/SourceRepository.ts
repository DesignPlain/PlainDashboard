import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SourceRepositoryArgs {
  // The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose.
  description?: string;

  // The name of the source repository. For more information about name requirements, see [Quotas for source repositories](https://docs.aws.amazon.com/codecatalyst/latest/userguide/source-quotas.html).
  name?: string;

  /*
The name of the project in the CodeCatalyst space.

The following arguments are optional:
*/
  projectName?: string;

  // The name of the CodeCatalyst space.
  spaceName?: string;
}
export class SourceRepository extends DS_Resource {
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
        'description',
        'The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the source repository. For more information about name requirements, see [Quotas for source repositories](https://docs.aws.amazon.com/codecatalyst/latest/userguide/source-quotas.html).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'projectName',
        'The name of the project in the CodeCatalyst space.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'spaceName',
        'The name of the CodeCatalyst space.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
