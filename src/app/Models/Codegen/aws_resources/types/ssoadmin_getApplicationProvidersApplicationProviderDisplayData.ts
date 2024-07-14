import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssoadmin_getApplicationProvidersApplicationProviderDisplayData {
  // Name of the application provider.
  displayName?: string;

  // URL that points to an icon that represents the application provider.
  iconUrl?: string;

  // Description of the application provider.
  description?: string;
}

export function ssoadmin_getApplicationProvidersApplicationProviderDisplayData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "Name of the application provider.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "iconUrl",
      "URL that points to an icon that represents the application provider.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the application provider.",
      [],
      true,
      false,
    ),
  ];
}
