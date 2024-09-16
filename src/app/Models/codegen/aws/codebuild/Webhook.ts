import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  codebuild_WebhookScopeConfiguration,
  codebuild_WebhookScopeConfiguration_GetTypes,
} from '../types/codebuild_WebhookScopeConfiguration';
import {
  codebuild_WebhookFilterGroup,
  codebuild_WebhookFilterGroup_GetTypes,
} from '../types/codebuild_WebhookFilterGroup';

export interface WebhookArgs {
  // The name of the build project.
  projectName?: string;

  // Scope configuration for global or organization webhooks. Scope configuration blocks are documented below.
  scopeConfiguration?: codebuild_WebhookScopeConfiguration;

  // A regular expression used to determine which branches get built. Default is all branches are built. We recommend using `filter_group` over `branch_filter`.
  branchFilter?: string;

  // The type of build this webhook will trigger. Valid values for this parameter are: `BUILD`, `BUILD_BATCH`.
  buildType?: string;

  // Information about the webhook's trigger. Filter group blocks are documented below.
  filterGroups?: Array<codebuild_WebhookFilterGroup>;
}
export class Webhook extends DS_Resource {
  // The secret token of the associated repository. Not returned by the CodeBuild API for all source types.
  public secret?: string;

  // The URL to the webhook.
  public url?: string;

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

  // Scope configuration for global or organization webhooks. Scope configuration blocks are documented below.
  public scopeConfiguration?: codebuild_WebhookScopeConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'filterGroups',
        "Information about the webhook's trigger. Filter group blocks are documented below.",
        () => codebuild_WebhookFilterGroup_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'projectName',
        'The name of the build project.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'scopeConfiguration',
        'Scope configuration for global or organization webhooks. Scope configuration blocks are documented below.',
        () => codebuild_WebhookScopeConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'branchFilter',
        'A regular expression used to determine which branches get built. Default is all branches are built. We recommend using `filter_group` over `branch_filter`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'buildType',
        'The type of build this webhook will trigger. Valid values for this parameter are: `BUILD`, `BUILD_BATCH`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
