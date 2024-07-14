import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface servicecatalog_ProvisionedProductOutput {
  // The description of the output.
  description?: string;

  // Parameter key.
  key?: string;

  // Parameter value.
  value?: string;
}

export function servicecatalog_ProvisionedProductOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "The description of the output.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Parameter key.",
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
