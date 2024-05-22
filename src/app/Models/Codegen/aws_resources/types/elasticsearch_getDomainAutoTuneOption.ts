import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  elasticsearch_getDomainAutoTuneOptionMaintenanceSchedule,
  elasticsearch_getDomainAutoTuneOptionMaintenanceSchedule_GetTypes,
} from "./elasticsearch_getDomainAutoTuneOptionMaintenanceSchedule";

export interface elasticsearch_getDomainAutoTuneOption {
  // The Auto-Tune desired state for the domain.
  desiredState?: string;

  // A list of the nested configurations for the Auto-Tune maintenance windows of the domain.
  maintenanceSchedules?: Array<elasticsearch_getDomainAutoTuneOptionMaintenanceSchedule>;

  // Whether the domain is set to roll back to default Auto-Tune settings when disabling Auto-Tune.
  rollbackOnDisable?: string;
}

export function elasticsearch_getDomainAutoTuneOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "desiredState",
      "The Auto-Tune desired state for the domain.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "maintenanceSchedules",
      "A list of the nested configurations for the Auto-Tune maintenance windows of the domain.",
      elasticsearch_getDomainAutoTuneOptionMaintenanceSchedule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rollbackOnDisable",
      "Whether the domain is set to roll back to default Auto-Tune settings when disabling Auto-Tune.",
      [],
      true,
      false,
    ),
  ];
}
