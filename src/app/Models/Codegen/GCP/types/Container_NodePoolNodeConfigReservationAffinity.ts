import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_NodePoolNodeConfigReservationAffinity {
  // The label key of a reservation resource.
  Key?: string;

  // The label values of the reservation resource.
  Values?: Array<string>;

  // Corresponds to the type of reservation consumption.
  ConsumeReservationType?: string;
}

export function Container_NodePoolNodeConfigReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Key",
      "The label key of a reservation resource.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Values",
      "The label values of the reservation resource.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ConsumeReservationType",
      "Corresponds to the type of reservation consumption.",
      [],
      true,
      true,
    ),
  ];
}
