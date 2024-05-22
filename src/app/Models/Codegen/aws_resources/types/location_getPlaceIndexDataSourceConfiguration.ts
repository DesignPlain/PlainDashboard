import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface location_getPlaceIndexDataSourceConfiguration {
  //
  intendedUse?: string;
}

export function location_getPlaceIndexDataSourceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "intendedUse", "", [], true, false),
  ];
}
