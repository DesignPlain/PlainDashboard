import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface location_getMapConfiguration {
  // The map style selected from an available data provider.
  style?: string;
}

export function location_getMapConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "style",
      "The map style selected from an available data provider.",
      [],
      true,
      false,
    ),
  ];
}
