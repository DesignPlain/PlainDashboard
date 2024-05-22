import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorProperties,
  appflow_FlowDestinationFlowConfigDestinationConnectorProperties_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorProperties";

export interface appflow_FlowDestinationFlowConfig {
  // API version that the destination connector uses.
  apiVersion?: string;

  // Name of the connector profile. This name must be unique for each connector profile in the AWS account.
  connectorProfileName?: string;

  // Type of connector, such as Salesforce, Amplitude, and so on. Valid values are `Salesforce`, `Singular`, `Slack`, `Redshift`, `S3`, `Marketo`, `Googleanalytics`, `Zendesk`, `Servicenow`, `Datadog`, `Trendmicro`, `Snowflake`, `Dynatrace`, `Infornexus`, `Amplitude`, `Veeva`, `EventBridge`, `LookoutMetrics`, `Upsolver`, `Honeycode`, `CustomerProfiles`, `SAPOData`, and `CustomConnector`.
  connectorType?: string;

  // This stores the information that is required to query a particular connector. See Destination Connector Properties for more information.
  destinationConnectorProperties?: appflow_FlowDestinationFlowConfigDestinationConnectorProperties;
}

export function appflow_FlowDestinationFlowConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "apiVersion",
      "API version that the destination connector uses.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectorProfileName",
      "Name of the connector profile. This name must be unique for each connector profile in the AWS account.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectorType",
      "Type of connector, such as Salesforce, Amplitude, and so on. Valid values are `Salesforce`, `Singular`, `Slack`, `Redshift`, `S3`, `Marketo`, `Googleanalytics`, `Zendesk`, `Servicenow`, `Datadog`, `Trendmicro`, `Snowflake`, `Dynatrace`, `Infornexus`, `Amplitude`, `Veeva`, `EventBridge`, `LookoutMetrics`, `Upsolver`, `Honeycode`, `CustomerProfiles`, `SAPOData`, and `CustomConnector`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "destinationConnectorProperties",
      "This stores the information that is required to query a particular connector. See Destination Connector Properties for more information.",
      appflow_FlowDestinationFlowConfigDestinationConnectorProperties_GetTypes(),
      true,
      false,
    ),
  ];
}
