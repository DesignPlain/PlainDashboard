import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface BudgetResourceAssociationArgs {
  // Budget name.
  budgetName?: string;

  // Resource identifier.
  resourceId?: string;
}
export class BudgetResourceAssociation extends Resource {
  // Budget name.
  public budgetName?: string;

  // Resource identifier.
  public resourceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "budgetName",
        "Budget name.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceId",
        "Resource identifier.",
        [],
        true,
        true,
      ),
    ];
  }
}
