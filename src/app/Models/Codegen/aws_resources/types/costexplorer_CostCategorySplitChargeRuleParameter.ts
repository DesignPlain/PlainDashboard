import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface costexplorer_CostCategorySplitChargeRuleParameter {
  // Parameter type.
  type?: string;

  // Parameter values.
  values?: Array<string>;
}

export function costexplorer_CostCategorySplitChargeRuleParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Parameter type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Parameter values.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
