import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface iot_ThingTypeProperties {
  // A list of searchable thing attribute names.
  searchableAttributes?: Array<string>;

  // The description of the thing type.
  description?: string;
}

export function iot_ThingTypeProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "The description of the thing type.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "searchableAttributes",
      "A list of searchable thing attribute names.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
