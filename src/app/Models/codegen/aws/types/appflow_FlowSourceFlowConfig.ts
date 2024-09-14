import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appflow_FlowSourceFlowConfigIncrementalPullConfig,
  appflow_FlowSourceFlowConfigIncrementalPullConfig_GetTypes,
} from "./appflow_FlowSourceFlowConfigIncrementalPullConfig";
import {
  appflow_FlowSourceFlowConfigSourceConnectorProperties,
  appflow_FlowSourceFlowConfigSourceConnectorProperties_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorProperties";

export interface appflow_FlowSourceFlowConfig {
  // API version that the destination connector uses.
  apiVersion?: string;

  // Name of the connector profile. This name must be unique for each connector profile in the AWS account.
  connectorProfileName?: string;

  // Type of connector, such as Salesforce, Amplitude, and so on. Valid values are `Salesforce`, `Singular`, `Slack`, `Redshift`, `S3`, `Marketo`, `Googleanalytics`, `Zendesk`, `Servicenow`, `Datadog`, `Trendmicro`, `Snowflake`, `Dynatrace`, `Infornexus`, `Amplitude`, `Veeva`, `EventBridge`, `LookoutMetrics`, `Upsolver`, `Honeycode`, `CustomerProfiles`, `SAPOData`, and `CustomConnector`.
  connectorType?: string;

  // Defines the configuration for a scheduled incremental data pull. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull. See Incremental Pull Config for more details.
  incrementalPullConfig?: appflow_FlowSourceFlowConfigIncrementalPullConfig;

  // Information that is required to query a particular source connector. See Source Connector Properties for details.
  sourceConnectorProperties?: appflow_FlowSourceFlowConfigSourceConnectorProperties;
}

export function appflow_FlowSourceFlowConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "connectorProfileName",
      "Name of the connector profile. This name must be unique for each connector profile in the AWS account.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectorType",
      "Type of connector, such as Salesforce, Amplitude, and so on. Valid values are `Salesforce`, `Singular`, `Slack`, `Redshift`, `S3`, `Marketo`, `Googleanalytics`, `Zendesk`, `Servicenow`, `Datadog`, `Trendmicro`, `Snowflake`, `Dynatrace`, `Infornexus`, `Amplitude`, `Veeva`, `EventBridge`, `LookoutMetrics`, `Upsolver`, `Honeycode`, `CustomerProfiles`, `SAPOData`, and `CustomConnector`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "incrementalPullConfig",
      "Defines the configuration for a scheduled incremental data pull. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull. See Incremental Pull Config for more details.",
      () => appflow_FlowSourceFlowConfigIncrementalPullConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sourceConnectorProperties",
      "Information that is required to query a particular source connector. See Source Connector Properties for details.",
      () => appflow_FlowSourceFlowConfigSourceConnectorProperties_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "apiVersion",
      "API version that the destination connector uses.",
      () => [],
      false,
      false,
    ),
  ];
}
