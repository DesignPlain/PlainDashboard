import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getReservationShareSettingProjectMap {
  //
  Id?: string;

  // The project id/number, should be same as the key of this project config in the project map.
  ProjectId?: string;
}

export function Compute_getReservationShareSettingProjectMap_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Id", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "The project id/number, should be same as the key of this project config in the project map.",
      [],
      true,
      false,
    ),
  ];
}
