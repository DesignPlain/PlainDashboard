import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  codepipeline_WebhookFilter,
  codepipeline_WebhookFilter_GetTypes,
} from "../types/codepipeline_WebhookFilter";
import {
  codepipeline_WebhookAuthenticationConfiguration,
  codepipeline_WebhookAuthenticationConfiguration_GetTypes,
} from "../types/codepipeline_WebhookAuthenticationConfiguration";

export interface WebhookArgs {
  // The name of the pipeline.
  targetPipeline?: string;

  // The type of authentication  to use. One of `IP`, `GITHUB_HMAC`, or `UNAUTHENTICATED`.
  authentication?: string;

  // An `auth` block. Required for `IP` and `GITHUB_HMAC`. Auth blocks are documented below.
  authenticationConfiguration?: codepipeline_WebhookAuthenticationConfiguration;

  // One or more `filter` blocks. Filter blocks are documented below.
  filters?: Array<codepipeline_WebhookFilter>;

  // The name of the webhook.
  name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The name of the action in a pipeline you want to connect to the webhook. The action must be from the source (first) stage of the pipeline.
  targetAction?: string;
}
export class Webhook extends Resource {
  // One or more `filter` blocks. Filter blocks are documented below.
  public filters?: Array<codepipeline_WebhookFilter>;

  // The name of the webhook.
  public name?: string;

  // The name of the action in a pipeline you want to connect to the webhook. The action must be from the source (first) stage of the pipeline.
  public targetAction?: string;

  // The CodePipeline webhook's URL. POST events to this endpoint to trigger the target.
  public url?: string;

  // The CodePipeline webhook's ARN.
  public arn?: string;

  // The type of authentication  to use. One of `IP`, `GITHUB_HMAC`, or `UNAUTHENTICATED`.
  public authentication?: string;

  // An `auth` block. Required for `IP` and `GITHUB_HMAC`. Auth blocks are documented below.
  public authenticationConfiguration?: codepipeline_WebhookAuthenticationConfiguration;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The name of the pipeline.
  public targetPipeline?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetAction",
        "The name of the action in a pipeline you want to connect to the webhook. The action must be from the source (first) stage of the pipeline.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetPipeline",
        "The name of the pipeline.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "authentication",
        "The type of authentication  to use. One of `IP`, `GITHUB_HMAC`, or `UNAUTHENTICATED`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "authenticationConfiguration",
        "An `auth` block. Required for `IP` and `GITHUB_HMAC`. Auth blocks are documented below.",
        codepipeline_WebhookAuthenticationConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "filters",
        "One or more `filter` blocks. Filter blocks are documented below.",
        codepipeline_WebhookFilter_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the webhook.",
        [],
        false,
        true,
      ),
    ];
  }
}
