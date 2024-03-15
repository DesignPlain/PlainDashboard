import { PreventionJobTriggerInspectJobActionPublishToStackdriver } from "./PreventionJobTriggerInspectJobActionPublishToStackdriver";
import { PreventionJobTriggerInspectJobActionSaveFindings } from "./PreventionJobTriggerInspectJobActionSaveFindings";
import { PreventionJobTriggerInspectJobActionDeidentify } from "./PreventionJobTriggerInspectJobActionDeidentify";
import { PreventionJobTriggerInspectJobActionJobNotificationEmails } from "./PreventionJobTriggerInspectJobActionJobNotificationEmails";
import { PreventionJobTriggerInspectJobActionPubSub } from "./PreventionJobTriggerInspectJobActionPubSub";
import { PreventionJobTriggerInspectJobActionPublishFindingsToCloudDataCatalog } from "./PreventionJobTriggerInspectJobActionPublishFindingsToCloudDataCatalog";
import { PreventionJobTriggerInspectJobActionPublishSummaryToCscc } from "./PreventionJobTriggerInspectJobActionPublishSummaryToCscc";

export interface PreventionJobTriggerInspectJobAction {
  /*
Publish a message into a given Pub/Sub topic when the job completes.
Structure is documented below.
*/
  PubSub?: PreventionJobTriggerInspectJobActionPubSub;

  // Publish findings of a DlpJob to Data Catalog.
  PublishFindingsToCloudDataCatalog?: PreventionJobTriggerInspectJobActionPublishFindingsToCloudDataCatalog;

  // Publish the result summary of a DlpJob to the Cloud Security Command Center.
  PublishSummaryToCscc?: PreventionJobTriggerInspectJobActionPublishSummaryToCscc;

  // Enable Stackdriver metric dlp.googleapis.com/findingCount.
  PublishToStackdriver?: PreventionJobTriggerInspectJobActionPublishToStackdriver;

  /*
If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk
Structure is documented below.
*/
  SaveFindings?: PreventionJobTriggerInspectJobActionSaveFindings;

  /*
Create a de-identified copy of the requested table or files.
Structure is documented below.
*/
  Deidentify?: PreventionJobTriggerInspectJobActionDeidentify;

  // Sends an email when the job completes. The email goes to IAM project owners and technical Essential Contacts.
  JobNotificationEmails?: PreventionJobTriggerInspectJobActionJobNotificationEmails;
}
