import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  batch_JobDefinitionEksPropertiesPodProperties,
  batch_JobDefinitionEksPropertiesPodProperties_GetTypes,
} from "./batch_JobDefinitionEksPropertiesPodProperties";

export interface batch_JobDefinitionEksProperties {
  // The properties for the Kubernetes pod resources of a job. See `pod_properties` below.
  podProperties?: batch_JobDefinitionEksPropertiesPodProperties;
}

export function batch_JobDefinitionEksProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "podProperties",
      "The properties for the Kubernetes pod resources of a job. See `pod_properties` below.",
      batch_JobDefinitionEksPropertiesPodProperties_GetTypes(),
      true,
      false,
    ),
  ];
}
