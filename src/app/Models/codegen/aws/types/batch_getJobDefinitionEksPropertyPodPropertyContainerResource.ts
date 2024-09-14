import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface batch_getJobDefinitionEksPropertyPodPropertyContainerResource {
  // The type and quantity of the resources to reserve for the container.
  limits?: Map<string, string>;

  // The type and quantity of the resources to request for the container.
  requests?: Map<string, string>;
}

export function batch_getJobDefinitionEksPropertyPodPropertyContainerResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "limits",
      "The type and quantity of the resources to reserve for the container.",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "requests",
      "The type and quantity of the resources to request for the container.",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
