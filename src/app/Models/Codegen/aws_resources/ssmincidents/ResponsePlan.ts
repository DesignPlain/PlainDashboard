import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssmincidents_ResponsePlanIncidentTemplate,
  ssmincidents_ResponsePlanIncidentTemplate_GetTypes,
} from "../types/ssmincidents_ResponsePlanIncidentTemplate";
import {
  ssmincidents_ResponsePlanIntegration,
  ssmincidents_ResponsePlanIntegration_GetTypes,
} from "../types/ssmincidents_ResponsePlanIntegration";
import {
  ssmincidents_ResponsePlanAction,
  ssmincidents_ResponsePlanAction_GetTypes,
} from "../types/ssmincidents_ResponsePlanAction";

export interface ResponsePlanArgs {
  // The long format of the response plan name. This field can contain spaces.
  displayName?: string;

  // The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
  engagements?: Array<string>;

  //
  incidentTemplate?: ssmincidents_ResponsePlanIncidentTemplate;

  // Information about third-party services integrated into the response plan. The following values are supported:
  integration?: ssmincidents_ResponsePlanIntegration;

  // The name of the response plan.
  name?: string;

  // The tags applied to the response plan.
  tags?: Map<string, string>;

  // The actions that the response plan starts at the beginning of an incident.
  action?: ssmincidents_ResponsePlanAction;

  // The Chatbot chat channel used for collaboration during an incident.
  chatChannels?: Array<string>;
}
export class ResponsePlan extends Resource {
  // The Chatbot chat channel used for collaboration during an incident.
  public chatChannels?: Array<string>;

  //
  public incidentTemplate?: ssmincidents_ResponsePlanIncidentTemplate;

  // Information about third-party services integrated into the response plan. The following values are supported:
  public integration?: ssmincidents_ResponsePlanIntegration;

  // The name of the response plan.
  public name?: string;

  // The tags applied to the response plan.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The actions that the response plan starts at the beginning of an incident.
  public action?: ssmincidents_ResponsePlanAction;

  // The ARN of the response plan.
  public arn?: string;

  // The long format of the response plan name. This field can contain spaces.
  public displayName?: string;

  // The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
  public engagements?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "chatChannels",
        "The Chatbot chat channel used for collaboration during an incident.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The long format of the response plan name. This field can contain spaces.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "engagements",
        "The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "incidentTemplate",
        "",
        ssmincidents_ResponsePlanIncidentTemplate_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "integration",
        "Information about third-party services integrated into the response plan. The following values are supported:",
        ssmincidents_ResponsePlanIntegration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the response plan.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "The tags applied to the response plan.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "action",
        "The actions that the response plan starts at the beginning of an incident.",
        ssmincidents_ResponsePlanAction_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
