import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoData,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoData_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoData";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketo,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketo_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketo";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendesk,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendesk_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendesk";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshift,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshift_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshift";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorProperties {
  // Properties that are required to query the custom Connector. See Custom Connector Destination Properties for more details.
  customConnector?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector;

  //
  lookoutMetrics?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics;

  // Properties that are required to query Snowflake. See Snowflake Destination Properties for more details.
  snowflake?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake;

  // Properties that are required to query Marketo. See Generic Destination Properties for more details.
  marketo?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketo;

  // Properties that are required to query Amazon Redshift. See Redshift Destination Properties for more details.
  redshift?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshift;

  // Properties that are required to query Amazon S3. See S3 Destination Properties for more details.
  s3?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3;

  // Properties that are required to query Salesforce. See Salesforce Destination Properties for more details.
  salesforce?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce;

  // Properties that are required to query SAPOData. See SAPOData Destination Properties for more details.
  sapoData?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoData;

  // Properties that are required to query Amazon Connect Customer Profiles. See Customer Profiles Destination Properties for more details.
  customerProfiles?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles;

  // Properties that are required to query Amazon EventBridge. See Generic Destination Properties for more details.
  eventBridge?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge;

  // Properties that are required to query Amazon Honeycode. See Generic Destination Properties for more details.
  honeycode?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode;

  // Properties that are required to query Upsolver. See Upsolver Destination Properties for more details.
  upsolver?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver;

  // Properties that are required to query Zendesk. See Zendesk Destination Properties for more details.
  zendesk?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendesk;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sapoData",
      "Properties that are required to query SAPOData. See SAPOData Destination Properties for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoData_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customerProfiles",
      "Properties that are required to query Amazon Connect Customer Profiles. See Customer Profiles Destination Properties for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "honeycode",
      "Properties that are required to query Amazon Honeycode. See Generic Destination Properties for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "upsolver",
      "Properties that are required to query Upsolver. See Upsolver Destination Properties for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "snowflake",
      "Properties that are required to query Snowflake. See Snowflake Destination Properties for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3",
      "Properties that are required to query Amazon S3. See S3 Destination Properties for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "salesforce",
      "Properties that are required to query Salesforce. See Salesforce Destination Properties for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "redshift",
      "Properties that are required to query Amazon Redshift. See Redshift Destination Properties for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshift_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "eventBridge",
      "Properties that are required to query Amazon EventBridge. See Generic Destination Properties for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "zendesk",
      "Properties that are required to query Zendesk. See Zendesk Destination Properties for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesZendesk_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customConnector",
      "Properties that are required to query the custom Connector. See Custom Connector Destination Properties for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lookoutMetrics",
      "",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "marketo",
      "Properties that are required to query Marketo. See Generic Destination Properties for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesMarketo_GetTypes(),
      false,
      false,
    ),
  ];
}
