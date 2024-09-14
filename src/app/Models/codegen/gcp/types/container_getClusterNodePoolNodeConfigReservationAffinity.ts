import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_getClusterNodePoolNodeConfigReservationAffinity {
  // The label values of the reservation resource.
  values?: Array<string>;

  // Corresponds to the type of reservation consumption.
  consumeReservationType?: string;

  // The label key of a reservation resource.
  key?: string;
}

export function container_getClusterNodePoolNodeConfigReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "The label values of the reservation resource.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "consumeReservationType",
      "Corresponds to the type of reservation consumption.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The label key of a reservation resource.",
      () => [],
      true,
      false,
    ),
  ];
}
