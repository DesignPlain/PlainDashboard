import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface costexplorer_getTagsSortBy {
  // key that's used to sort the data. Valid values are: `BlendedCost`,  `UnblendedCost`, `AmortizedCost`, `NetAmortizedCost`, `NetUnblendedCost`, `UsageQuantity`, `NormalizedUsageAmount`.
  key?: string;

  // order that's used to sort the data. Valid values are: `ASCENDING`,  `DESCENDING`.
  sortOrder?: string;
}

export function costexplorer_getTagsSortBy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "key that's used to sort the data. Valid values are: `BlendedCost`,  `UnblendedCost`, `AmortizedCost`, `NetAmortizedCost`, `NetUnblendedCost`, `UsageQuantity`, `NormalizedUsageAmount`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sortOrder",
      "order that's used to sort the data. Valid values are: `ASCENDING`,  `DESCENDING`.",
      [],
      false,
      false,
    ),
  ];
}
