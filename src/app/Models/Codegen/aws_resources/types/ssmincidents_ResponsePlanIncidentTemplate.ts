import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssmincidents_ResponsePlanIncidentTemplateNotificationTarget,
  ssmincidents_ResponsePlanIncidentTemplateNotificationTarget_GetTypes,
} from "./ssmincidents_ResponsePlanIncidentTemplateNotificationTarget";

export interface ssmincidents_ResponsePlanIncidentTemplate {
  // The Amazon Simple Notification Service (Amazon SNS) targets that this incident notifies when it is updated. The `notification_target` configuration block supports the following argument:
  notificationTargets?: Array<ssmincidents_ResponsePlanIncidentTemplateNotificationTarget>;

  // The summary of an incident.
  summary?: string;

  // The title of a generated incident.
  title?: string;

  // A string used to stop Incident Manager from creating multiple incident records for the same incident.
  dedupeString?: string;

  // The impact value of a generated incident. The following values are supported:
  impact?: number;

  // The tags assigned to an incident template. When an incident starts, Incident Manager assigns the tags specified in the template to the incident.
  incidentTags?: Map<string, string>;
}

export function ssmincidents_ResponsePlanIncidentTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "incidentTags",
      "The tags assigned to an incident template. When an incident starts, Incident Manager assigns the tags specified in the template to the incident.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "notificationTargets",
      "The Amazon Simple Notification Service (Amazon SNS) targets that this incident notifies when it is updated. The `notification_target` configuration block supports the following argument:",
      ssmincidents_ResponsePlanIncidentTemplateNotificationTarget_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "summary",
      "The summary of an incident.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "title",
      "The title of a generated incident.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dedupeString",
      "A string used to stop Incident Manager from creating multiple incident records for the same incident.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "impact",
      "The impact value of a generated incident. The following values are supported:",
      [],
      true,
      false,
    ),
  ];
}
