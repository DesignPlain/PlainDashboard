import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ApplicationAssignmentConfigurationArgs {
  // ARN of the application.
  applicationArn?: string;

  // Indicates whether users must have an explicit assignment to access the application. If `false`, all users have access to the application.
  assignmentRequired?: boolean;
}
export class ApplicationAssignmentConfiguration extends Resource {
  // ARN of the application.
  public applicationArn?: string;

  // Indicates whether users must have an explicit assignment to access the application. If `false`, all users have access to the application.
  public assignmentRequired?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "applicationArn",
        "ARN of the application.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "assignmentRequired",
        "Indicates whether users must have an explicit assignment to access the application. If `false`, all users have access to the application.",
        [],
        true,
        false,
      ),
    ];
  }
}
