import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionJobTriggerInspectJobActionPubSub,
  dataloss_PreventionJobTriggerInspectJobActionPubSub_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobActionPubSub";
import {
  dataloss_PreventionJobTriggerInspectJobActionPublishFindingsToCloudDataCatalog,
  dataloss_PreventionJobTriggerInspectJobActionPublishFindingsToCloudDataCatalog_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobActionPublishFindingsToCloudDataCatalog";
import {
  dataloss_PreventionJobTriggerInspectJobActionPublishSummaryToCscc,
  dataloss_PreventionJobTriggerInspectJobActionPublishSummaryToCscc_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobActionPublishSummaryToCscc";
import {
  dataloss_PreventionJobTriggerInspectJobActionPublishToStackdriver,
  dataloss_PreventionJobTriggerInspectJobActionPublishToStackdriver_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobActionPublishToStackdriver";
import {
  dataloss_PreventionJobTriggerInspectJobActionSaveFindings,
  dataloss_PreventionJobTriggerInspectJobActionSaveFindings_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobActionSaveFindings";
import {
  dataloss_PreventionJobTriggerInspectJobActionDeidentify,
  dataloss_PreventionJobTriggerInspectJobActionDeidentify_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobActionDeidentify";
import {
  dataloss_PreventionJobTriggerInspectJobActionJobNotificationEmails,
  dataloss_PreventionJobTriggerInspectJobActionJobNotificationEmails_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobActionJobNotificationEmails";

export interface dataloss_PreventionJobTriggerInspectJobAction {
  /*
Create a de-identified copy of the requested table or files.
Structure is documented below.
*/
  deidentify?: dataloss_PreventionJobTriggerInspectJobActionDeidentify;

  // Sends an email when the job completes. The email goes to IAM project owners and technical Essential Contacts.
  jobNotificationEmails?: dataloss_PreventionJobTriggerInspectJobActionJobNotificationEmails;

  /*
Publish a message into a given Pub/Sub topic when the job completes.
Structure is documented below.
*/
  pubSub?: dataloss_PreventionJobTriggerInspectJobActionPubSub;

  // Publish findings of a DlpJob to Data Catalog.
  publishFindingsToCloudDataCatalog?: dataloss_PreventionJobTriggerInspectJobActionPublishFindingsToCloudDataCatalog;

  // Publish the result summary of a DlpJob to the Cloud Security Command Center.
  publishSummaryToCscc?: dataloss_PreventionJobTriggerInspectJobActionPublishSummaryToCscc;

  // Enable Stackdriver metric dlp.googleapis.com/findingCount.
  publishToStackdriver?: dataloss_PreventionJobTriggerInspectJobActionPublishToStackdriver;

  /*
If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk
Structure is documented below.
*/
  saveFindings?: dataloss_PreventionJobTriggerInspectJobActionSaveFindings;
}

export function dataloss_PreventionJobTriggerInspectJobAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "deidentify",
      "Create a de-identified copy of the requested table or files.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobActionDeidentify_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jobNotificationEmails",
      "Sends an email when the job completes. The email goes to IAM project owners and technical Essential Contacts.",
      dataloss_PreventionJobTriggerInspectJobActionJobNotificationEmails_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "pubSub",
      "Publish a message into a given Pub/Sub topic when the job completes.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobActionPubSub_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "publishFindingsToCloudDataCatalog",
      "Publish findings of a DlpJob to Data Catalog.",
      dataloss_PreventionJobTriggerInspectJobActionPublishFindingsToCloudDataCatalog_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "publishSummaryToCscc",
      "Publish the result summary of a DlpJob to the Cloud Security Command Center.",
      dataloss_PreventionJobTriggerInspectJobActionPublishSummaryToCscc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "publishToStackdriver",
      "Enable Stackdriver metric dlp.googleapis.com/findingCount.",
      dataloss_PreventionJobTriggerInspectJobActionPublishToStackdriver_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "saveFindings",
      "If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobActionSaveFindings_GetTypes(),
      false,
      false,
    ),
  ];
}
