import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro";
import {
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow,
  appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow_GetTypes,
} from "./appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentials {
  // The connector-specific credentials required when using Infor Nexus. See Infor Nexus Connector Profile Credentials for more details.
  inforNexus?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus;

  // The connector-specific credentials required when using Snowflake. See Snowflake Connector Profile Credentials for more details.
  snowflake?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake;

  // The connector-specific credentials required when using Trend Micro. See Trend Micro Connector Profile Credentials for more details.
  trendmicro?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro;

  // The connector-specific credentials required when using Amplitude. See Amplitude Connector Profile Credentials for more details.
  amplitude?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude;

  // The connector-specific profile credentials required when using the custom connector. See Custom Connector Profile Credentials for more details.
  customConnector?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector;

  // The connector-specific credentials required when using Dynatrace. See Dynatrace Connector Profile Credentials for more details.
  dynatrace?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace;

  // Connector-specific credentials required when using Amazon Redshift. See Redshift Connector Profile Credentials for more details.
  redshift?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift;

  // Connector-specific credentials required when using Singular. See Singular Connector Profile Credentials for more details.
  singular?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular;

  // Connector-specific credentials required when using Datadog. See Datadog Connector Profile Credentials for more details.
  datadog?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog;

  // Connector-specific credentials required when using Marketo. See Marketo Connector Profile Credentials for more details.
  marketo?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo;

  // Connector-specific credentials required when using Slack. See Slack Connector Profile Credentials for more details.
  slack?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack;

  // Connector-specific credentials required when using Veeva. See Veeva Connector Profile Credentials for more details.
  veeva?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva;

  // The connector-specific credentials required when using Google Analytics. See Google Analytics Connector Profile Credentials for more details.
  googleAnalytics?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics;

  // The connector-specific credentials required when using Amazon Honeycode. See Honeycode Connector Profile Credentials for more details.
  honeycode?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode;

  // The connector-specific credentials required when using Salesforce. See Salesforce Connector Profile Credentials for more details.
  salesforce?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce;

  // The connector-specific credentials required when using SAPOData. See SAPOData Connector Profile Credentials for more details.
  sapoData?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData;

  // The connector-specific credentials required when using ServiceNow. See ServiceNow Connector Profile Credentials for more details.
  serviceNow?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow;

  // Connector-specific credentials required when using Zendesk. See Zendesk Connector Profile Credentials for more details.
  zendesk?: appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentials_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "inforNexus",
      "The connector-specific credentials required when using Infor Nexus. See Infor Nexus Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "snowflake",
      "The connector-specific credentials required when using Snowflake. See Snowflake Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "marketo",
      "Connector-specific credentials required when using Marketo. See Marketo Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "datadog",
      "Connector-specific credentials required when using Datadog. See Datadog Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "honeycode",
      "The connector-specific credentials required when using Amazon Honeycode. See Honeycode Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "salesforce",
      "The connector-specific credentials required when using Salesforce. See Salesforce Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "serviceNow",
      "The connector-specific credentials required when using ServiceNow. See ServiceNow Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "zendesk",
      "Connector-specific credentials required when using Zendesk. See Zendesk Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "trendmicro",
      "The connector-specific credentials required when using Trend Micro. See Trend Micro Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "amplitude",
      "The connector-specific credentials required when using Amplitude. See Amplitude Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customConnector",
      "The connector-specific profile credentials required when using the custom connector. See Custom Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "veeva",
      "Connector-specific credentials required when using Veeva. See Veeva Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "googleAnalytics",
      "The connector-specific credentials required when using Google Analytics. See Google Analytics Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dynatrace",
      "The connector-specific credentials required when using Dynatrace. See Dynatrace Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "redshift",
      "Connector-specific credentials required when using Amazon Redshift. See Redshift Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singular",
      "Connector-specific credentials required when using Singular. See Singular Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "slack",
      "Connector-specific credentials required when using Slack. See Slack Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sapoData",
      "The connector-specific credentials required when using SAPOData. See SAPOData Connector Profile Credentials for more details.",
      appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData_GetTypes(),
      false,
      false,
    ),
  ];
}
