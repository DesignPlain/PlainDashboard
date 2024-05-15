import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobActionPublishToStackdriver,
  Dataloss_PreventionJobTriggerInspectJobActionPublishToStackdriver_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobActionPublishToStackdriver";
import {
  Dataloss_PreventionJobTriggerInspectJobActionSaveFindings,
  Dataloss_PreventionJobTriggerInspectJobActionSaveFindings_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobActionSaveFindings";
import {
  Dataloss_PreventionJobTriggerInspectJobActionDeidentify,
  Dataloss_PreventionJobTriggerInspectJobActionDeidentify_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobActionDeidentify";
import {
  Dataloss_PreventionJobTriggerInspectJobActionJobNotificationEmails,
  Dataloss_PreventionJobTriggerInspectJobActionJobNotificationEmails_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobActionJobNotificationEmails";
import {
  Dataloss_PreventionJobTriggerInspectJobActionPubSub,
  Dataloss_PreventionJobTriggerInspectJobActionPubSub_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobActionPubSub";
import {
  Dataloss_PreventionJobTriggerInspectJobActionPublishFindingsToCloudDataCatalog,
  Dataloss_PreventionJobTriggerInspectJobActionPublishFindingsToCloudDataCatalog_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobActionPublishFindingsToCloudDataCatalog";
import {
  Dataloss_PreventionJobTriggerInspectJobActionPublishSummaryToCscc,
  Dataloss_PreventionJobTriggerInspectJobActionPublishSummaryToCscc_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobActionPublishSummaryToCscc";

export interface Dataloss_PreventionJobTriggerInspectJobAction {
  // Enable Stackdriver metric dlp.googleapis.com/findingCount.
  PublishToStackdriver?: Dataloss_PreventionJobTriggerInspectJobActionPublishToStackdriver;

  /*
If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk
Structure is documented below.
*/
  SaveFindings?: Dataloss_PreventionJobTriggerInspectJobActionSaveFindings;

  /*
Create a de-identified copy of the requested table or files.
Structure is documented below.
*/
  Deidentify?: Dataloss_PreventionJobTriggerInspectJobActionDeidentify;

  // Sends an email when the job completes. The email goes to IAM project owners and technical Essential Contacts.
  JobNotificationEmails?: Dataloss_PreventionJobTriggerInspectJobActionJobNotificationEmails;

  /*
Publish a message into a given Pub/Sub topic when the job completes.
Structure is documented below.
*/
  PubSub?: Dataloss_PreventionJobTriggerInspectJobActionPubSub;

  // Publish findings of a DlpJob to Data Catalog.
  PublishFindingsToCloudDataCatalog?: Dataloss_PreventionJobTriggerInspectJobActionPublishFindingsToCloudDataCatalog;

  // Publish the result summary of a DlpJob to the Cloud Security Command Center.
  PublishSummaryToCscc?: Dataloss_PreventionJobTriggerInspectJobActionPublishSummaryToCscc;
}

export function Dataloss_PreventionJobTriggerInspectJobAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SaveFindings",
      "If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobActionSaveFindings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Deidentify",
      "Create a de-identified copy of the requested table or files.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobActionDeidentify_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "JobNotificationEmails",
      "Sends an email when the job completes. The email goes to IAM project owners and technical Essential Contacts.",
      Dataloss_PreventionJobTriggerInspectJobActionJobNotificationEmails_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PubSub",
      "Publish a message into a given Pub/Sub topic when the job completes.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobActionPubSub_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PublishFindingsToCloudDataCatalog",
      "Publish findings of a DlpJob to Data Catalog.",
      Dataloss_PreventionJobTriggerInspectJobActionPublishFindingsToCloudDataCatalog_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PublishSummaryToCscc",
      "Publish the result summary of a DlpJob to the Cloud Security Command Center.",
      Dataloss_PreventionJobTriggerInspectJobActionPublishSummaryToCscc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PublishToStackdriver",
      "Enable Stackdriver metric dlp.googleapis.com/findingCount.",
      Dataloss_PreventionJobTriggerInspectJobActionPublishToStackdriver_GetTypes(),
      false,
      false,
    ),
  ];
}
