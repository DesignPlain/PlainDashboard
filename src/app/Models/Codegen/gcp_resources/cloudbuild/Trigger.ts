import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudbuild_TriggerApprovalConfig,
  cloudbuild_TriggerApprovalConfig_GetTypes,
} from "../types/cloudbuild_TriggerApprovalConfig";
import {
  cloudbuild_TriggerWebhookConfig,
  cloudbuild_TriggerWebhookConfig_GetTypes,
} from "../types/cloudbuild_TriggerWebhookConfig";
import {
  cloudbuild_TriggerBuild,
  cloudbuild_TriggerBuild_GetTypes,
} from "../types/cloudbuild_TriggerBuild";
import {
  cloudbuild_TriggerPubsubConfig,
  cloudbuild_TriggerPubsubConfig_GetTypes,
} from "../types/cloudbuild_TriggerPubsubConfig";
import {
  cloudbuild_TriggerGithub,
  cloudbuild_TriggerGithub_GetTypes,
} from "../types/cloudbuild_TriggerGithub";
import {
  cloudbuild_TriggerGitFileSource,
  cloudbuild_TriggerGitFileSource_GetTypes,
} from "../types/cloudbuild_TriggerGitFileSource";
import {
  cloudbuild_TriggerRepositoryEventConfig,
  cloudbuild_TriggerRepositoryEventConfig_GetTypes,
} from "../types/cloudbuild_TriggerRepositoryEventConfig";
import {
  cloudbuild_TriggerBitbucketServerTriggerConfig,
  cloudbuild_TriggerBitbucketServerTriggerConfig_GetTypes,
} from "../types/cloudbuild_TriggerBitbucketServerTriggerConfig";
import {
  cloudbuild_TriggerSourceToBuild,
  cloudbuild_TriggerSourceToBuild_GetTypes,
} from "../types/cloudbuild_TriggerSourceToBuild";
import {
  cloudbuild_TriggerTriggerTemplate,
  cloudbuild_TriggerTriggerTemplate_GetTypes,
} from "../types/cloudbuild_TriggerTriggerTemplate";

export interface TriggerArgs {
  /*
PubsubConfig describes the configuration of a trigger that creates
a build whenever a Pub/Sub message is published.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  pubsubConfig?: cloudbuild_TriggerPubsubConfig;

  /*
The repo and ref of the repository from which to build.
This field is used only for those triggers that do not respond to SCM events.
Triggers that respond to such events build source at whatever commit caused the event.
This field is currently only used by Webhook, Pub/Sub, Manual, and Cron triggers.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  sourceToBuild?: cloudbuild_TriggerSourceToBuild;

  /*
Template describing the types of source changes to trigger a build.
Branch and tag names in trigger templates are interpreted as regular
expressions. Any branch or tag change that matches that regular
expression will trigger a build.
One of `trigger_template`, `github`, `pubsub_config`, `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  triggerTemplate?: cloudbuild_TriggerTriggerTemplate;

  // Whether the trigger is disabled or not. If true, the trigger will never result in a build.
  disabled?: boolean;

  // A Common Expression Language string. Used only with Pub/Sub and Webhook.
  filter?: string;

  /*
The file source describing the local or remote Build template.
Structure is documented below.
*/
  gitFileSource?: cloudbuild_TriggerGitFileSource;

  /*
Describes the configuration of a trigger that creates a build whenever a GitHub event is received.
One of `trigger_template`, `github`, `pubsub_config` or `webhook_config` must be provided.
Structure is documented below.
*/
  github?: cloudbuild_TriggerGithub;

  /*
Configuration for manual approval to start a build invocation of this BuildTrigger.
Builds created by this trigger will require approval before they execute.
Any user with a Cloud Build Approver role for the project can approve a build.
Structure is documented below.
*/
  approvalConfig?: cloudbuild_TriggerApprovalConfig;

  /*
Build logs will be sent back to GitHub as part of the checkrun
result.  Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or
INCLUDE_BUILD_LOGS_WITH_STATUS
Possible values are: `INCLUDE_BUILD_LOGS_UNSPECIFIED`, `INCLUDE_BUILD_LOGS_WITH_STATUS`.
*/
  includeBuildLogs?: string;

  /*
The configuration of a trigger that creates a build whenever an event from Repo API is received.
Structure is documented below.
*/
  repositoryEventConfig?: cloudbuild_TriggerRepositoryEventConfig;

  // Tags for annotation of a BuildTrigger
  tags?: Array<string>;

  /*
ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match
extended with support for `--`.
If ignoredFiles and changed files are both empty, then they are not
used to determine whether or not to trigger a build.
If ignoredFiles is not empty, then we ignore any files that match any
of the ignored_file globs. If the change has no files that are outside
of the ignoredFiles globs, then we do not trigger a build.
*/
  ignoredFiles?: Array<string>;

  /*
ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match
extended with support for `--`.
If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is empty, then as far as this filter is concerned, we
should trigger the build.
If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is not empty, then we make sure that at least one of
those files matches a includedFiles glob. If not, then we do not trigger
a build.
*/
  includedFiles?: Array<string>;

  /*
The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger.
If not specified, "global" is used.
*/
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Name of the trigger. Must be unique within the project.
  name?: string;

  /*
The service account used for all user-controlled operations including
triggers.patch, triggers.run, builds.create, and builds.cancel.
If no service account is set, then the standard Cloud Build service account
([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.
Format: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}
*/
  serviceAccount?: string;

  // Substitutions data for Build resource.
  substitutions?: Map<string, string>;

  /*
WebhookConfig describes the configuration of a trigger that creates
a build whenever a webhook is sent to a trigger's webhook URL.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  webhookConfig?: cloudbuild_TriggerWebhookConfig;

  /*
BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
Structure is documented below.
*/
  bitbucketServerTriggerConfig?: cloudbuild_TriggerBitbucketServerTriggerConfig;

  /*
Contents of the build template. Either a filename or build template must be provided.
Structure is documented below.
*/
  build?: cloudbuild_TriggerBuild;

  // Human-readable description of the trigger.
  description?: string;

  /*
Path, from the source root, to a file whose contents is used for the template.
Either a filename or build template must be provided. Set this only when using trigger_template or github.
When using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.
*/
  filename?: string;
}
export class Trigger extends Resource {
  // A Common Expression Language string. Used only with Pub/Sub and Webhook.
  public filter?: string;

  // Human-readable description of the trigger.
  public description?: string;

  // Name of the trigger. Must be unique within the project.
  public name?: string;

  /*
PubsubConfig describes the configuration of a trigger that creates
a build whenever a Pub/Sub message is published.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  public pubsubConfig?: cloudbuild_TriggerPubsubConfig;

  /*
The configuration of a trigger that creates a build whenever an event from Repo API is received.
Structure is documented below.
*/
  public repositoryEventConfig?: cloudbuild_TriggerRepositoryEventConfig;

  /*
The service account used for all user-controlled operations including
triggers.patch, triggers.run, builds.create, and builds.cancel.
If no service account is set, then the standard Cloud Build service account
([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.
Format: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}
*/
  public serviceAccount?: string;

  // Tags for annotation of a BuildTrigger
  public tags?: Array<string>;

  /*
Describes the configuration of a trigger that creates a build whenever a GitHub event is received.
One of `trigger_template`, `github`, `pubsub_config` or `webhook_config` must be provided.
Structure is documented below.
*/
  public github?: cloudbuild_TriggerGithub;

  /*
Contents of the build template. Either a filename or build template must be provided.
Structure is documented below.
*/
  public build?: cloudbuild_TriggerBuild;

  // Time when the trigger was created.
  public createTime?: string;

  /*
Path, from the source root, to a file whose contents is used for the template.
Either a filename or build template must be provided. Set this only when using trigger_template or github.
When using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.
*/
  public filename?: string;

  /*
The file source describing the local or remote Build template.
Structure is documented below.
*/
  public gitFileSource?: cloudbuild_TriggerGitFileSource;

  /*
Build logs will be sent back to GitHub as part of the checkrun
result.  Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or
INCLUDE_BUILD_LOGS_WITH_STATUS
Possible values are: `INCLUDE_BUILD_LOGS_UNSPECIFIED`, `INCLUDE_BUILD_LOGS_WITH_STATUS`.
*/
  public includeBuildLogs?: string;

  // Substitutions data for Build resource.
  public substitutions?: Map<string, string>;

  /*
BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
Structure is documented below.
*/
  public bitbucketServerTriggerConfig?: cloudbuild_TriggerBitbucketServerTriggerConfig;

  // Whether the trigger is disabled or not. If true, the trigger will never result in a build.
  public disabled?: boolean;

  /*
ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match
extended with support for `--`.
If ignoredFiles and changed files are both empty, then they are not
used to determine whether or not to trigger a build.
If ignoredFiles is not empty, then we ignore any files that match any
of the ignored_file globs. If the change has no files that are outside
of the ignoredFiles globs, then we do not trigger a build.
*/
  public ignoredFiles?: Array<string>;

  /*
ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match
extended with support for `--`.
If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is empty, then as far as this filter is concerned, we
should trigger the build.
If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is not empty, then we make sure that at least one of
those files matches a includedFiles glob. If not, then we do not trigger
a build.
*/
  public includedFiles?: Array<string>;

  /*
The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger.
If not specified, "global" is used.
*/
  public location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The repo and ref of the repository from which to build.
This field is used only for those triggers that do not respond to SCM events.
Triggers that respond to such events build source at whatever commit caused the event.
This field is currently only used by Webhook, Pub/Sub, Manual, and Cron triggers.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  public sourceToBuild?: cloudbuild_TriggerSourceToBuild;

  // The unique identifier for the trigger.
  public triggerId?: string;

  /*
Configuration for manual approval to start a build invocation of this BuildTrigger.
Builds created by this trigger will require approval before they execute.
Any user with a Cloud Build Approver role for the project can approve a build.
Structure is documented below.
*/
  public approvalConfig?: cloudbuild_TriggerApprovalConfig;

  /*
WebhookConfig describes the configuration of a trigger that creates
a build whenever a webhook is sent to a trigger's webhook URL.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  public webhookConfig?: cloudbuild_TriggerWebhookConfig;

  /*
Template describing the types of source changes to trigger a build.
Branch and tag names in trigger templates are interpreted as regular
expressions. Any branch or tag change that matches that regular
expression will trigger a build.
One of `trigger_template`, `github`, `pubsub_config`, `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  public triggerTemplate?: cloudbuild_TriggerTriggerTemplate;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "tags",
        "Tags for annotation of a BuildTrigger",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        'The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger.\nIf not specified, "global" is used.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "substitutions",
        "Substitutions data for Build resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "bitbucketServerTriggerConfig",
        "BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.\nStructure is documented below.",
        cloudbuild_TriggerBitbucketServerTriggerConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Human-readable description of the trigger.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccount",
        "The service account used for all user-controlled operations including\ntriggers.patch, triggers.run, builds.create, and builds.cancel.\nIf no service account is set, then the standard Cloud Build service account\n([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.\nFormat: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "triggerTemplate",
        "Template describing the types of source changes to trigger a build.\nBranch and tag names in trigger templates are interpreted as regular\nexpressions. Any branch or tag change that matches that regular\nexpression will trigger a build.\nOne of `trigger_template`, `github`, `pubsub_config`, `webhook_config` or `source_to_build` must be provided.\nStructure is documented below.",
        cloudbuild_TriggerTriggerTemplate_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disabled",
        "Whether the trigger is disabled or not. If true, the trigger will never result in a build.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "filter",
        "A Common Expression Language string. Used only with Pub/Sub and Webhook.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "approvalConfig",
        "Configuration for manual approval to start a build invocation of this BuildTrigger.\nBuilds created by this trigger will require approval before they execute.\nAny user with a Cloud Build Approver role for the project can approve a build.\nStructure is documented below.",
        cloudbuild_TriggerApprovalConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ignoredFiles",
        "ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match\nextended with support for `**`.\nIf ignoredFiles and changed files are both empty, then they are not\nused to determine whether or not to trigger a build.\nIf ignoredFiles is not empty, then we ignore any files that match any\nof the ignored_file globs. If the change has no files that are outside\nof the ignoredFiles globs, then we do not trigger a build.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the trigger. Must be unique within the project.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "build",
        "Contents of the build template. Either a filename or build template must be provided.\nStructure is documented below.",
        cloudbuild_TriggerBuild_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "pubsubConfig",
        "PubsubConfig describes the configuration of a trigger that creates\na build whenever a Pub/Sub message is published.\nOne of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.\nStructure is documented below.",
        cloudbuild_TriggerPubsubConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sourceToBuild",
        "The repo and ref of the repository from which to build.\nThis field is used only for those triggers that do not respond to SCM events.\nTriggers that respond to such events build source at whatever commit caused the event.\nThis field is currently only used by Webhook, Pub/Sub, Manual, and Cron triggers.\nOne of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.\nStructure is documented below.",
        cloudbuild_TriggerSourceToBuild_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "gitFileSource",
        "The file source describing the local or remote Build template.\nStructure is documented below.",
        cloudbuild_TriggerGitFileSource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "repositoryEventConfig",
        "The configuration of a trigger that creates a build whenever an event from Repo API is received.\nStructure is documented below.",
        cloudbuild_TriggerRepositoryEventConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "includedFiles",
        "ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match\nextended with support for `**`.\nIf any of the files altered in the commit pass the ignoredFiles filter\nand includedFiles is empty, then as far as this filter is concerned, we\nshould trigger the build.\nIf any of the files altered in the commit pass the ignoredFiles filter\nand includedFiles is not empty, then we make sure that at least one of\nthose files matches a includedFiles glob. If not, then we do not trigger\na build.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "github",
        "Describes the configuration of a trigger that creates a build whenever a GitHub event is received.\nOne of `trigger_template`, `github`, `pubsub_config` or `webhook_config` must be provided.\nStructure is documented below.",
        cloudbuild_TriggerGithub_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "includeBuildLogs",
        "Build logs will be sent back to GitHub as part of the checkrun\nresult.  Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or\nINCLUDE_BUILD_LOGS_WITH_STATUS\nPossible values are: `INCLUDE_BUILD_LOGS_UNSPECIFIED`, `INCLUDE_BUILD_LOGS_WITH_STATUS`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "webhookConfig",
        "WebhookConfig describes the configuration of a trigger that creates\na build whenever a webhook is sent to a trigger's webhook URL.\nOne of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.\nStructure is documented below.",
        cloudbuild_TriggerWebhookConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "filename",
        "Path, from the source root, to a file whose contents is used for the template.\nEither a filename or build template must be provided. Set this only when using trigger_template or github.\nWhen using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.",
        [],
        false,
        false,
      ),
    ];
  }
}
