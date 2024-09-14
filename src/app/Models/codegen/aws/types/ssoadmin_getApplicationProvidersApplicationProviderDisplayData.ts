import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ssoadmin_getApplicationProvidersApplicationProviderDisplayData {
  // Description of the application provider.
  description?: string;

  // Name of the application provider.
  displayName?: string;

  // URL that points to an icon that represents the application provider.
  iconUrl?: string;
}

export function ssoadmin_getApplicationProvidersApplicationProviderDisplayData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the application provider.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "Name of the application provider.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "iconUrl",
      "URL that points to an icon that represents the application provider.",
      () => [],
      true,
      false,
    ),
  ];
}
