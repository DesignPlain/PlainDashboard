import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appflow_FlowSourceFlowConfigSourceConnectorPropertiesSapoData {
  // Object path specified in the SAPOData flow destination.
  objectPath?: string;
}

export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesSapoData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "objectPath",
      "Object path specified in the SAPOData flow destination.",
      [],
      true,
      false,
    ),
  ];
}
