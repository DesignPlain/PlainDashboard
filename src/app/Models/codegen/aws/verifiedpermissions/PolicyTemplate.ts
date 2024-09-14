import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface PolicyTemplateArgs {
  // The ID of the Policy Store.
  policyStoreId?: string;

  /*
Defines the content of the statement, written in Cedar policy language.

The following arguments are optional:
*/
  statement?: string;

  // Provides a description for the policy template.
  description?: string;
}
export class PolicyTemplate extends DS_Resource {
  // Provides a description for the policy template.
  public description?: string;

  // The ID of the Policy Store.
  public policyStoreId?: string;

  // The ID of the Policy Store.
  public policyTemplateId?: string;

  /*
Defines the content of the statement, written in Cedar policy language.

The following arguments are optional:
*/
  public statement?: string;

  // The date the Policy Store was created.
  public createdDate?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policyStoreId",
        "The ID of the Policy Store.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "statement",
        "Defines the content of the statement, written in Cedar policy language.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Provides a description for the policy template.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
