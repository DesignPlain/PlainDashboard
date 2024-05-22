import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface controltower_LandingZoneDriftStatus {
  // The drift status of the landing zone.
  status?: string;
}

export function controltower_LandingZoneDriftStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "The drift status of the landing zone.",
      [],
      false,
      false,
    ),
  ];
}
