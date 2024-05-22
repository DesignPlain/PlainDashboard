import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileProperties {
  // The connector-specific properties required when using Salesforce. See Salesforce Connector Profile Properties for more details.
  salesforce?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce;

  // The connector-specific properties required when using SAPOData. See SAPOData Connector Profile Properties for more details.
  sapoData?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData;

  // The connector-specific credentials required when using Trend Micro. See Trend Micro Connector Profile Credentials for more details.
  trendmicro?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro;

  // Connector-specific properties required when using Veeva. See Generic Connector Profile Properties for more details.
  veeva?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva;

  // Connector-specific properties required when using Datadog. See Generic Connector Profile Properties for more details.
  datadog?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog;

  // The connector-specific credentials required when using Google Analytics. See Google Analytics Connector Profile Credentials for more details.
  googleAnalytics?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics;

  // Connector-specific properties required when using Marketo. See Generic Connector Profile Properties for more details.
  marketo?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo;

  // Connector-specific properties required when using Amazon Redshift. See Redshift Connector Profile Properties for more details.
  redshift?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift;

  // The connector-specific properties required when using Snowflake. See Snowflake Connector Profile Properties for more details.
  snowflake?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake;

  // The connector-specific credentials required when using Amplitude. See Amplitude Connector Profile Credentials for more details.
  amplitude?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude;

  // The connector-specific properties required when using Dynatrace. See Generic Connector Profile Properties for more details.
  dynatrace?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace;

  // The connector-specific properties required when using Infor Nexus. See Generic Connector Profile Properties for more details.
  inforNexus?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus;

  // Connector-specific properties required when using Slack. See Generic Connector Profile Properties for more details.
  slack?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack;

  // The connector-specific properties required when using ServiceNow. See Generic Connector Profile Properties for more details.
  serviceNow?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow;

  // Connector-specific credentials required when using Singular. See Singular Connector Profile Credentials for more details.
  singular?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular;

  // The connector-specific profile properties required when using the custom connector. See Custom Connector Profile Properties for more details.
  customConnector?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector;

  // The connector-specific credentials required when using Amazon Honeycode. See Honeycode Connector Profile Credentials for more details.
  honeycode?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode;

  // Connector-specific properties required when using Zendesk. See Generic Connector Profile Properties for more details.
  zendesk?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "inforNexus",
      "The connector-specific properties required when using Infor Nexus. See Generic Connector Profile Properties for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "serviceNow",
      "The connector-specific properties required when using ServiceNow. See Generic Connector Profile Properties for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "googleAnalytics",
      "The connector-specific credentials required when using Google Analytics. See Google Analytics Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "slack",
      "Connector-specific properties required when using Slack. See Generic Connector Profile Properties for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customConnector",
      "The connector-specific profile properties required when using the custom connector. See Custom Connector Profile Properties for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "zendesk",
      "Connector-specific properties required when using Zendesk. See Generic Connector Profile Properties for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "salesforce",
      "The connector-specific properties required when using Salesforce. See Salesforce Connector Profile Properties for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sapoData",
      "The connector-specific properties required when using SAPOData. See SAPOData Connector Profile Properties for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "datadog",
      "Connector-specific properties required when using Datadog. See Generic Connector Profile Properties for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "marketo",
      "Connector-specific properties required when using Marketo. See Generic Connector Profile Properties for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "redshift",
      "Connector-specific properties required when using Amazon Redshift. See Redshift Connector Profile Properties for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dynatrace",
      "The connector-specific properties required when using Dynatrace. See Generic Connector Profile Properties for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singular",
      "Connector-specific credentials required when using Singular. See Singular Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "trendmicro",
      "The connector-specific credentials required when using Trend Micro. See Trend Micro Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "veeva",
      "Connector-specific properties required when using Veeva. See Generic Connector Profile Properties for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "snowflake",
      "The connector-specific properties required when using Snowflake. See Snowflake Connector Profile Properties for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "amplitude",
      "The connector-specific credentials required when using Amplitude. See Amplitude Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "honeycode",
      "The connector-specific credentials required when using Amazon Honeycode. See Honeycode Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode_GetTypes(),
      false,
      false,
    ),
  ];
}
