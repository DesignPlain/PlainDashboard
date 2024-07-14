import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface pricing_getProductFilter {
  // Product attribute name that you want to filter on.
  field?: string;

  // Product attribute value that you want to filter on.
  value?: string;
}

export function pricing_getProductFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "field",
      "Product attribute name that you want to filter on.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Product attribute value that you want to filter on.",
      [],
      true,
      false,
    ),
  ];
}
