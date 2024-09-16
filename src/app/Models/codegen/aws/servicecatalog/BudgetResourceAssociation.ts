import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface BudgetResourceAssociationArgs {
  // Resource identifier.
  resourceId?: string;

  // Budget name.
  budgetName?: string;
}
export class BudgetResourceAssociation extends DS_Resource {
  // Budget name.
  public budgetName?: string;

  // Resource identifier.
  public resourceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'budgetName',
        'Budget name.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceId',
        'Resource identifier.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
