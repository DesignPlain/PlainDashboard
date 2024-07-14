import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface servicecatalog_ProvisionedProductProvisioningParameter {
  // Parameter value.
  value?: string;

  // Parameter key.
  key?: string;

  // Whether to ignore `value` and keep the previous parameter value. Ignored when initially provisioning a product.
  usePreviousValue?: boolean;
}

export function servicecatalog_ProvisionedProductProvisioningParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "Parameter key.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "usePreviousValue",
      "Whether to ignore `value` and keep the previous parameter value. Ignored when initially provisioning a product.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Parameter value.",
      [],
      false,
      false,
    ),
  ];
}
