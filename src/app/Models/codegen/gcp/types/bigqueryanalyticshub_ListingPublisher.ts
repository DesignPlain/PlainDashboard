import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bigqueryanalyticshub_ListingPublisher {
  // Name of the listing publisher.
  name?: string;

  // Email or URL of the listing publisher.
  primaryContact?: string;
}

export function bigqueryanalyticshub_ListingPublisher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the listing publisher.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "primaryContact",
      "Email or URL of the listing publisher.",
      () => [],
      false,
      false,
    ),
  ];
}
