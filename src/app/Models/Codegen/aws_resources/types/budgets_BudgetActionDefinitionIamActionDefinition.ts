import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface budgets_BudgetActionDefinitionIamActionDefinition {
  // A list of groups to be attached. There must be at least one group.
  groups?: Array<string>;

  // The Amazon Resource Name (ARN) of the policy to be attached.
  policyArn?: string;

  // A list of roles to be attached. There must be at least one role.
  roles?: Array<string>;

  // A list of users to be attached. There must be at least one user.
  users?: Array<string>;
}

export function budgets_BudgetActionDefinitionIamActionDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "groups",
      "A list of groups to be attached. There must be at least one group.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "policyArn",
      "The Amazon Resource Name (ARN) of the policy to be attached.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "roles",
      "A list of roles to be attached. There must be at least one role.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "users",
      "A list of users to be attached. There must be at least one user.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
