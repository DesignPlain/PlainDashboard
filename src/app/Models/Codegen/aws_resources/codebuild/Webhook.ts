import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  codebuild_WebhookFilterGroup,
  codebuild_WebhookFilterGroup_GetTypes,
} from "../types/codebuild_WebhookFilterGroup";

export interface WebhookArgs {
  // A regular expression used to determine which branches get built. Default is all branches are built. We recommend using `filter_group` over `branch_filter`.
  branchFilter?: string;

  // The type of build this webhook will trigger. Valid values for this parameter are: `BUILD`, `BUILD_BATCH`.
  buildType?: string;

  // Information about the webhook's trigger. Filter group blocks are documented below.
  filterGroups?: Array<codebuild_WebhookFilterGroup>;

  // The name of the build project.
  projectName?: string;
}
export class Webhook extends Resource {
  // A regular expression used to determine which branches get built. Default is all branches are built. We recommend using `filter_group` over `branch_filter`.
  public branchFilter?: string;

  // The type of build this webhook will trigger. Valid values for this parameter are: `BUILD`, `BUILD_BATCH`.
  public buildType?: string;

  // Information about the webhook's trigger. Filter group blocks are documented below.
  public filterGroups?: Array<codebuild_WebhookFilterGroup>;

  // The CodeBuild endpoint where webhook events are sent.
  public payloadUrl?: string;

  // The name of the build project.
  public projectName?: string;

  // The secret token of the associated repository. Not returned by the CodeBuild API for all source types.
  public secret?: string;

  // The URL to the webhook.
  public url?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "branchFilter",
        "A regular expression used to determine which branches get built. Default is all branches are built. We recommend using `filter_group` over `branch_filter`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "buildType",
        "The type of build this webhook will trigger. Valid values for this parameter are: `BUILD`, `BUILD_BATCH`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "filterGroups",
        "Information about the webhook's trigger. Filter group blocks are documented below.",
        codebuild_WebhookFilterGroup_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "projectName",
        "The name of the build project.",
        [],
        true,
        true,
      ),
    ];
  }
}
