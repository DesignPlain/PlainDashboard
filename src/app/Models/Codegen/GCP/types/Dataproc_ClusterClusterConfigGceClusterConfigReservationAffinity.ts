import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_ClusterClusterConfigGceClusterConfigReservationAffinity {
  // Corresponds to the label values of reservation resource.
  Values?: Array<string>;

  // Corresponds to the type of reservation consumption.
  ConsumeReservationType?: string;

  // Corresponds to the label key of reservation resource.
  Key?: string;
}

export function Dataproc_ClusterClusterConfigGceClusterConfigReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Values",
      "Corresponds to the label values of reservation resource.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ConsumeReservationType",
      "Corresponds to the type of reservation consumption.",
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
  ];
}
