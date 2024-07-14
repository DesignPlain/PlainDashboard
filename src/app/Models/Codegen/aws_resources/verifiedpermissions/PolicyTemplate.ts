import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface PolicyTemplateArgs {
  // Provides a description for the policy template.
  description?: string;

  // The ID of the Policy Store.
  policyStoreId?: string;

  /*
Defines the content of the statement, written in Cedar policy language.

The following arguments are optional:
*/
  statement?: string;
}
export class PolicyTemplate extends Resource {
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
        "description",
        "Provides a description for the policy template.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyStoreId",
        "The ID of the Policy Store.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "statement",
        "Defines the content of the statement, written in Cedar policy language.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
    ];
  }
}
