import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface StudioLifecycleConfigArgs {
  // The App type that the Lifecycle Configuration is attached to. Valid values are `JupyterServer`, `JupyterLab`, `CodeEditor` and `KernelGateway`.
  studioLifecycleConfigAppType?: string;

  // The content of your Studio Lifecycle Configuration script. This content must be base64 encoded.
  studioLifecycleConfigContent?: string;

  // The name of the Studio Lifecycle Configuration to create.
  studioLifecycleConfigName?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class StudioLifecycleConfig extends Resource {
  // The Amazon Resource Name (ARN) assigned by AWS to this Studio Lifecycle Config.
  public arn?: string;

  // The App type that the Lifecycle Configuration is attached to. Valid values are `JupyterServer`, `JupyterLab`, `CodeEditor` and `KernelGateway`.
  public studioLifecycleConfigAppType?: string;

  // The content of your Studio Lifecycle Configuration script. This content must be base64 encoded.
  public studioLifecycleConfigContent?: string;

  // The name of the Studio Lifecycle Configuration to create.
  public studioLifecycleConfigName?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "studioLifecycleConfigAppType",
        "The App type that the Lifecycle Configuration is attached to. Valid values are `JupyterServer`, `JupyterLab`, `CodeEditor` and `KernelGateway`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "studioLifecycleConfigContent",
        "The content of your Studio Lifecycle Configuration script. This content must be base64 encoded.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "studioLifecycleConfigName",
        "The name of the Studio Lifecycle Configuration to create.",
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
    ];
  }
}
