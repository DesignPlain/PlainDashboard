import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigqueryanalyticshub_ListingPublisher {
  // Name of the listing publisher.
  Name?: string;

  // Email or URL of the listing publisher.
  PrimaryContact?: string;
}

export function Bigqueryanalyticshub_ListingPublisher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the listing publisher.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrimaryContact",
      "Email or URL of the listing publisher.",
      [],
      false,
      false,
    ),
  ];
}
