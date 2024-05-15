import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity {
  // Type of reservation to consume Possible values: TYPE_UNSPECIFIED, NO_RESERVATION, ANY_RESERVATION, SPECIFIC_RESERVATION
  ConsumeReservationType?: string;

  // Corresponds to the label key of reservation resource.
  Key?: string;

  // Corresponds to the label values of reservation resource.
  Values?: Array<string>;
}

export function Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ConsumeReservationType",
      "Type of reservation to consume Possible values: TYPE_UNSPECIFIED, NO_RESERVATION, ANY_RESERVATION, SPECIFIC_RESERVATION",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Key",
      "Corresponds to the label key of reservation resource.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Values",
      "Corresponds to the label values of reservation resource.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
