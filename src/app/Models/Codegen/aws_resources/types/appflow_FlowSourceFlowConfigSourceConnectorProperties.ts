import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesTrendmicro,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesTrendmicro_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesTrendmicro";
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesSalesforce,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesSalesforce_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesSalesforce";
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesSingular,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesSingular_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesSingular";
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesAmplitude,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesAmplitude_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesAmplitude";
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesVeeva,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesVeeva_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesVeeva";
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesCustomConnector,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesCustomConnector_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesCustomConnector";
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesSlack,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesSlack_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesSlack";
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesZendesk,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesZendesk_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesZendesk";
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesInforNexus,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesInforNexus_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesInforNexus";
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesDatadog,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesDatadog_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesDatadog";
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics";
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesDynatrace,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesDynatrace_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesDynatrace";
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesServiceNow,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesServiceNow_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesServiceNow";
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesSapoData,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesSapoData_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesSapoData";
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesMarketo,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesMarketo_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesMarketo";
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3";

export interface appflow_FlowSourceFlowConfigSourceConnectorProperties {
  // Information that is required for querying ServiceNow. See Generic Source Properties for more details.
  serviceNow?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesServiceNow;

  // Operation to be performed on the provided Trend Micro source fields. Valid values are `PROJECTION`, `EQUAL_TO`, `ADDITION`, `MULTIPLICATION`, `DIVISION`, `SUBTRACTION`, `MASK_ALL`, `MASK_FIRST_N`, `MASK_LAST_N`, `VALIDATE_NON_NULL`, `VALIDATE_NON_ZERO`, `VALIDATE_NON_NEGATIVE`, `VALIDATE_NUMERIC`, and `NO_OP`.
  trendmicro?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesTrendmicro;

  // Properties that are applied when the custom connector is being used as a source. See Custom Connector Source Properties.
  customConnector?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesCustomConnector;

  // Information that is required for querying Datadog. See Generic Source Properties for more details.
  datadog?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesDatadog;

  // Information that is required for querying Salesforce. See Salesforce Source Properties for more details.
  salesforce?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesSalesforce;

  // Information that is required for querying SAPOData as a flow source. See SAPO Source Properties for more details.
  sapoData?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesSapoData;

  // Information that is required for querying Singular. See Generic Source Properties for more details.
  singular?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesSingular;

  // Information that is required for querying Slack. See Generic Source Properties for more details.
  slack?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesSlack;

  // Information that is required for querying Zendesk. See Generic Source Properties for more details.
  zendesk?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesZendesk;

  // Information that is required for querying Amplitude. See Generic Source Properties for more details.
  amplitude?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesAmplitude;

  // Operation to be performed on the provided Google Analytics source fields. Valid values are `PROJECTION` and `BETWEEN`.
  googleAnalytics?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics;

  // Information that is required for querying Infor Nexus. See Generic Source Properties for more details.
  inforNexus?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesInforNexus;

  // Information that is required for querying Marketo. See Generic Source Properties for more details.
  marketo?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesMarketo;

  // Information that is required for querying Amazon S3. See S3 Source Properties for more details.
  s3?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3;

  // Information that is required for querying Veeva. See Veeva Source Properties for more details.
  veeva?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesVeeva;

  // Operation to be performed on the provided Dynatrace source fields. Valid values are `PROJECTION`, `BETWEEN`, `EQUAL_TO`, `ADDITION`, `MULTIPLICATION`, `DIVISION`, `SUBTRACTION`, `MASK_ALL`, `MASK_FIRST_N`, `MASK_LAST_N`, `VALIDATE_NON_NULL`, `VALIDATE_NON_ZERO`, `VALIDATE_NON_NEGATIVE`, `VALIDATE_NUMERIC`, and `NO_OP`.
  dynatrace?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesDynatrace;
}

export function appflow_FlowSourceFlowConfigSourceConnectorProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customConnector",
      "Properties that are applied when the custom connector is being used as a source. See Custom Connector Source Properties.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesCustomConnector_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3",
      "Information that is required for querying Amazon S3. See S3 Source Properties for more details.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "veeva",
      "Information that is required for querying Veeva. See Veeva Source Properties for more details.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesVeeva_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "serviceNow",
      "Information that is required for querying ServiceNow. See Generic Source Properties for more details.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesServiceNow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "zendesk",
      "Information that is required for querying Zendesk. See Generic Source Properties for more details.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesZendesk_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "marketo",
      "Information that is required for querying Marketo. See Generic Source Properties for more details.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesMarketo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "slack",
      "Information that is required for querying Slack. See Generic Source Properties for more details.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesSlack_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "amplitude",
      "Information that is required for querying Amplitude. See Generic Source Properties for more details.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesAmplitude_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "googleAnalytics",
      "Operation to be performed on the provided Google Analytics source fields. Valid values are `PROJECTION` and `BETWEEN`.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dynatrace",
      "Operation to be performed on the provided Dynatrace source fields. Valid values are `PROJECTION`, `BETWEEN`, `EQUAL_TO`, `ADDITION`, `MULTIPLICATION`, `DIVISION`, `SUBTRACTION`, `MASK_ALL`, `MASK_FIRST_N`, `MASK_LAST_N`, `VALIDATE_NON_NULL`, `VALIDATE_NON_ZERO`, `VALIDATE_NON_NEGATIVE`, `VALIDATE_NUMERIC`, and `NO_OP`.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesDynatrace_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "trendmicro",
      "Operation to be performed on the provided Trend Micro source fields. Valid values are `PROJECTION`, `EQUAL_TO`, `ADDITION`, `MULTIPLICATION`, `DIVISION`, `SUBTRACTION`, `MASK_ALL`, `MASK_FIRST_N`, `MASK_LAST_N`, `VALIDATE_NON_NULL`, `VALIDATE_NON_ZERO`, `VALIDATE_NON_NEGATIVE`, `VALIDATE_NUMERIC`, and `NO_OP`.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesTrendmicro_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "datadog",
      "Information that is required for querying Datadog. See Generic Source Properties for more details.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesDatadog_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sapoData",
      "Information that is required for querying SAPOData as a flow source. See SAPO Source Properties for more details.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesSapoData_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singular",
      "Information that is required for querying Singular. See Generic Source Properties for more details.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesSingular_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "salesforce",
      "Information that is required for querying Salesforce. See Salesforce Source Properties for more details.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesSalesforce_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "inforNexus",
      "Information that is required for querying Infor Nexus. See Generic Source Properties for more details.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesInforNexus_GetTypes(),
      false,
      false,
    ),
  ];
}
