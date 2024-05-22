import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_InstanceFromTemplateReservationAffinitySpecificReservation,
  compute_InstanceFromTemplateReservationAffinitySpecificReservation_GetTypes,
} from "./compute_InstanceFromTemplateReservationAffinitySpecificReservation";

export interface compute_InstanceFromTemplateReservationAffinity {
  // Specifies the label selector for the reservation to use.
  specificReservation?: compute_InstanceFromTemplateReservationAffinitySpecificReservation;

  // The type of reservation from which this instance can consume resources.
  type?: string;
}

export function compute_InstanceFromTemplateReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of reservation from which this instance can consume resources.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "specificReservation",
      "Specifies the label selector for the reservation to use.",
      compute_InstanceFromTemplateReservationAffinitySpecificReservation_GetTypes(),
      false,
      true,
    ),
  ];
}
