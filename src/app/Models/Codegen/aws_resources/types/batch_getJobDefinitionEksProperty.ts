import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface batch_getJobDefinitionEksProperty {
  // The properties for the Kubernetes pod resources of a job.
  podProperties?: Array<string>;
}

export function batch_getJobDefinitionEksProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "podProperties",
      "The properties for the Kubernetes pod resources of a job.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
