import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  inspector_AssessmentTemplateEventSubscription,
  inspector_AssessmentTemplateEventSubscription_GetTypes,
} from "../types/inspector_AssessmentTemplateEventSubscription";

export interface AssessmentTemplateArgs {
  // The assessment target ARN to attach the template to.
  targetArn?: string;

  // The duration of the inspector run.
  duration?: number;

  // A block that enables sending notifications about a specified assessment template event to a designated SNS topic. See Event Subscriptions for details.
  eventSubscriptions?: Array<inspector_AssessmentTemplateEventSubscription>;

  // The name of the assessment template.
  name?: string;

  // The rules to be used during the run.
  rulesPackageArns?: Array<string>;

  // Key-value map of tags for the Inspector assessment template. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class AssessmentTemplate extends DS_Resource {
  // The rules to be used during the run.
  public rulesPackageArns?: Array<string>;

  // Key-value map of tags for the Inspector assessment template. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The assessment target ARN to attach the template to.
  public targetArn?: string;

  // The template assessment ARN.
  public arn?: string;

  // The duration of the inspector run.
  public duration?: number;

  // A block that enables sending notifications about a specified assessment template event to a designated SNS topic. See Event Subscriptions for details.
  public eventSubscriptions?: Array<inspector_AssessmentTemplateEventSubscription>;

  // The name of the assessment template.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of tags for the Inspector assessment template. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetArn",
        "The assessment target ARN to attach the template to.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "duration",
        "The duration of the inspector run.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "eventSubscriptions",
        "A block that enables sending notifications about a specified assessment template event to a designated SNS topic. See Event Subscriptions for details.",
        () => inspector_AssessmentTemplateEventSubscription_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the assessment template.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rulesPackageArns",
        "The rules to be used during the run.",
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
