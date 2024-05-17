import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getReservationSpecificReservationInstanceProperty,
  Compute_getReservationSpecificReservationInstanceProperty_GetTypes,
} from "./Compute_getReservationSpecificReservationInstanceProperty";

export interface Compute_getReservationSpecificReservation {
  // The number of resources that are allocated.
  Count?: number;

  // How many instances are in use.
  InUseCount?: number;

  // The instance properties for the reservation.
  InstanceProperties?: Array<Compute_getReservationSpecificReservationInstanceProperty>;
}

export function Compute_getReservationSpecificReservation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "InUseCount",
      "How many instances are in use.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InstanceProperties",
      "The instance properties for the reservation.",
      Compute_getReservationSpecificReservationInstanceProperty_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Count",
      "The number of resources that are allocated.",
      [],
      true,
      false,
    ),
  ];
}
