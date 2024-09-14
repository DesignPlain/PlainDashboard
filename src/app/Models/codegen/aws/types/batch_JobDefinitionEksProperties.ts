import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  batch_JobDefinitionEksPropertiesPodProperties,
  batch_JobDefinitionEksPropertiesPodProperties_GetTypes,
} from "./batch_JobDefinitionEksPropertiesPodProperties";

export interface batch_JobDefinitionEksProperties {
  // Properties for the Kubernetes pod resources of a job. See `pod_properties` below.
  podProperties?: batch_JobDefinitionEksPropertiesPodProperties;
}

export function batch_JobDefinitionEksProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "podProperties",
      "Properties for the Kubernetes pod resources of a job. See `pod_properties` below.",
      () => batch_JobDefinitionEksPropertiesPodProperties_GetTypes(),
      true,
      false,
    ),
  ];
}
