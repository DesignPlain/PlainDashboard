import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigqueryanalyticshub_ListingDataProvider {
  // Email or URL of the data provider.
  PrimaryContact?: string;

  // Name of the data provider.
  Name?: string;
}

export function Bigqueryanalyticshub_ListingDataProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PrimaryContact",
      "Email or URL of the data provider.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the data provider.",
      [],
      true,
      false,
    ),
  ];
}
