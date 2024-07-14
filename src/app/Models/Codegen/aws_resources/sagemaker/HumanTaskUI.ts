import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_HumanTaskUIUiTemplate,
  sagemaker_HumanTaskUIUiTemplate_GetTypes,
} from "../types/sagemaker_HumanTaskUIUiTemplate";

export interface HumanTaskUIArgs {
  // The name of the Human Task UI.
  humanTaskUiName?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Liquid template for the worker user interface. See UI Template below.
  uiTemplate?: sagemaker_HumanTaskUIUiTemplate;
}
export class HumanTaskUI extends Resource {
  // The Amazon Resource Name (ARN) assigned by AWS to this Human Task UI.
  public arn?: string;

  // The name of the Human Task UI.
  public humanTaskUiName?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Liquid template for the worker user interface. See UI Template below.
  public uiTemplate?: sagemaker_HumanTaskUIUiTemplate;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "humanTaskUiName",
        "The name of the Human Task UI.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "uiTemplate",
        "The Liquid template for the worker user interface. See UI Template below.",
        sagemaker_HumanTaskUIUiTemplate_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
