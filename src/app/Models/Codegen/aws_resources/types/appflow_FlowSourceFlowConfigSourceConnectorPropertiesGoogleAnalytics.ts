import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appflow_FlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics {
  // Object specified in the flow destination.
  object?: string;
}

export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics_GetTypes(): DynamicUIProps[] {
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
