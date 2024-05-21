import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bigqueryanalyticshub_ListingDataProvider {
  // Name of the data provider.
  name?: string;

  // Email or URL of the data provider.
  primaryContact?: string;
}

export function bigqueryanalyticshub_ListingDataProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the data provider.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "primaryContact",
      "Email or URL of the data provider.",
      [],
      false,
      false,
    ),
  ];
}
