import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterNodePoolNodeConfigReservationAffinity {
  // Corresponds to the type of reservation consumption.
  consumeReservationType?: string;

  // The label key of a reservation resource.
  key?: string;

  // The label values of the reservation resource.
  values?: Array<string>;
}

export function container_getClusterNodePoolNodeConfigReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "consumeReservationType",
      "Corresponds to the type of reservation consumption.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The label key of a reservation resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "The label values of the reservation resource.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
