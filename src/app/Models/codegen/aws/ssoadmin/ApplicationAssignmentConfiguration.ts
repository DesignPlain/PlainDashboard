import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ApplicationAssignmentConfigurationArgs {
  // ARN of the application.
  applicationArn?: string;

  // Indicates whether users must have an explicit assignment to access the application. If `false`, all users have access to the application.
  assignmentRequired?: boolean;
}
export class ApplicationAssignmentConfiguration extends DS_Resource {
  // ARN of the application.
  public applicationArn?: string;

  // Indicates whether users must have an explicit assignment to access the application. If `false`, all users have access to the application.
  public assignmentRequired?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'applicationArn',
        'ARN of the application.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'assignmentRequired',
        'Indicates whether users must have an explicit assignment to access the application. If `false`, all users have access to the application.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
