import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appflow_FlowSourceFlowConfigSourceConnectorPropertiesSalesforce {
  // Flag that enables dynamic fetching of new (recently added) fields in the Salesforce objects while running a flow.
  enableDynamicFieldUpdate?: boolean;

  // Whether Amazon AppFlow includes deleted files in the flow run.
  includeDeletedRecords?: boolean;

  // Object specified in the flow destination.
  object?: string;
}

export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesSalesforce_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableDynamicFieldUpdate",
      "Flag that enables dynamic fetching of new (recently added) fields in the Salesforce objects while running a flow.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeDeletedRecords",
      "Whether Amazon AppFlow includes deleted files in the flow run.",
      [],
      false,
      false,
    ),
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
