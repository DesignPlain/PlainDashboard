import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigqueryanalyticshub_ListingDataProvider {
  // Email or URL of the data provider.
  primaryContact?: string;

  // Name of the data provider.
  name?: string;
}

export function bigqueryanalyticshub_ListingDataProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "primaryContact",
      "Email or URL of the data provider.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the data provider.",
      [],
      true,
      false,
    ),
  ];
}
