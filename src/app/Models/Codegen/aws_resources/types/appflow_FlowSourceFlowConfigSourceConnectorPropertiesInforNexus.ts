import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appflow_FlowSourceFlowConfigSourceConnectorPropertiesInforNexus {
  // Object specified in the flow destination.
  object?: string;
}

export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesInforNexus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "object",
      "Object specified in the flow destination.",
      [],
      true,
      false,
    ),
  ];
}
