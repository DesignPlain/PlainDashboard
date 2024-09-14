import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ApplicationAccessScopeArgs {
  /*
Specifies the name of the access scope to be associated with the specified targets.

The following arguments are optional:
*/
  scope?: string;

  // Specifies the ARN of the application with the access scope with the targets to add or update.
  applicationArn?: string;

  // Specifies an array list of ARNs that represent the authorized targets for this access scope.
  authorizedTargets?: Array<string>;
}
export class ApplicationAccessScope extends DS_Resource {
  // Specifies the ARN of the application with the access scope with the targets to add or update.
  public applicationArn?: string;

  // Specifies an array list of ARNs that represent the authorized targets for this access scope.
  public authorizedTargets?: Array<string>;

  /*
Specifies the name of the access scope to be associated with the specified targets.

The following arguments are optional:
*/
  public scope?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "authorizedTargets",
        "Specifies an array list of ARNs that represent the authorized targets for this access scope.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "scope",
        "Specifies the name of the access scope to be associated with the specified targets.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "applicationArn",
        "Specifies the ARN of the application with the access scope with the targets to add or update.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
