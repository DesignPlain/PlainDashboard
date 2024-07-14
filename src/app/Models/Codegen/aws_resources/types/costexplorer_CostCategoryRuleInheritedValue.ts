import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface costexplorer_CostCategoryRuleInheritedValue {
  // Key to extract cost category values.
  dimensionKey?: string;

  // Name of the dimension that's used to group costs. If you specify `LINKED_ACCOUNT_NAME`, the cost category value is based on account name. If you specify `TAG`, the cost category value will be based on the value of the specified tag key. Valid values are `LINKED_ACCOUNT_NAME`, `TAG`
  dimensionName?: string;
}

export function costexplorer_CostCategoryRuleInheritedValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dimensionKey",
      "Key to extract cost category values.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dimensionName",
      "Name of the dimension that's used to group costs. If you specify `LINKED_ACCOUNT_NAME`, the cost category value is based on account name. If you specify `TAG`, the cost category value will be based on the value of the specified tag key. Valid values are `LINKED_ACCOUNT_NAME`, `TAG`",
      [],
      false,
      false,
    ),
  ];
}
