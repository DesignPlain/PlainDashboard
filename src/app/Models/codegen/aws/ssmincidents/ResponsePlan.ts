import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssmincidents_ResponsePlanAction,
  ssmincidents_ResponsePlanAction_GetTypes,
} from "../types/ssmincidents_ResponsePlanAction";
import {
  ssmincidents_ResponsePlanIncidentTemplate,
  ssmincidents_ResponsePlanIncidentTemplate_GetTypes,
} from "../types/ssmincidents_ResponsePlanIncidentTemplate";
import {
  ssmincidents_ResponsePlanIntegration,
  ssmincidents_ResponsePlanIntegration_GetTypes,
} from "../types/ssmincidents_ResponsePlanIntegration";

export interface ResponsePlanArgs {
  // The name of the response plan.
  name?: string;

  //
  tags?: Map<string, string>;

  //
  action?: ssmincidents_ResponsePlanAction;

  //
  chatChannels?: Array<string>;

  //
  displayName?: string;

  //
  engagements?: Array<string>;

  //
  incidentTemplate?: ssmincidents_ResponsePlanIncidentTemplate;

  //
  integration?: ssmincidents_ResponsePlanIntegration;
}
export class ResponsePlan extends DS_Resource {
  //
  public displayName?: string;

  //
  public incidentTemplate?: ssmincidents_ResponsePlanIncidentTemplate;

  //
  public integration?: ssmincidents_ResponsePlanIntegration;

  // The name of the response plan.
  public name?: string;

  //
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the response plan.
  public arn?: string;

  //
  public chatChannels?: Array<string>;

  //
  public engagements?: Array<string>;

  //
  public action?: ssmincidents_ResponsePlanAction;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "incidentTemplate",
        "",
        () => ssmincidents_ResponsePlanIncidentTemplate_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "integration",
        "",
        () => ssmincidents_ResponsePlanIntegration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the response plan.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "action",
        "",
        () => ssmincidents_ResponsePlanAction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "chatChannels",
        "",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "engagements",
        "",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
