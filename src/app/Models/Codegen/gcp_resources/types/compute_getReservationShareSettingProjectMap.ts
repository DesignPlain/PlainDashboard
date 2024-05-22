import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_getReservationShareSettingProjectMap {
  //
  id?: string;

  // The project id/number, should be same as the key of this project config in the project map.
  projectId?: string;
}

export function compute_getReservationShareSettingProjectMap_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "id", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "The project id/number, should be same as the key of this project config in the project map.",
      [],
      true,
      false,
    ),
  ];
}
