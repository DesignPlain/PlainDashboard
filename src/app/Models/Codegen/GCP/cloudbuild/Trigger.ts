import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TriggerTriggerTemplate } from "../types/TriggerTriggerTemplate";
import { TriggerWebhookConfig } from "../types/TriggerWebhookConfig";
import { TriggerBuild } from "../types/TriggerBuild";
import { TriggerRepositoryEventConfig } from "../types/TriggerRepositoryEventConfig";
import { TriggerGithub } from "../types/TriggerGithub";
import { TriggerGitFileSource } from "../types/TriggerGitFileSource";
import { TriggerPubsubConfig } from "../types/TriggerPubsubConfig";
import { TriggerBitbucketServerTriggerConfig } from "../types/TriggerBitbucketServerTriggerConfig";
import { TriggerSourceToBuild } from "../types/TriggerSourceToBuild";
import { TriggerApprovalConfig } from "../types/TriggerApprovalConfig";

export interface TriggerArgs {
  // Tags for annotation of a BuildTrigger
  Tags?: Array<string>;

  /*
Template describing the types of source changes to trigger a build.
Branch and tag names in trigger templates are interpreted as regular
expressions. Any branch or tag change that matches that regular
expression will trigger a build.
One of `trigger_template`, `github`, `pubsub_config`, `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  TriggerTemplate?: TriggerTriggerTemplate;

  /*
WebhookConfig describes the configuration of a trigger that creates
a build whenever a webhook is sent to a trigger's webhook URL.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  WebhookConfig?: TriggerWebhookConfig;

  /*
BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
Structure is documented below.
*/
  BitbucketServerTriggerConfig?: TriggerBitbucketServerTriggerConfig;

  /*
Contents of the build template. Either a filename or build template must be provided.
Structure is documented below.
*/
  Build?: TriggerBuild;

  // Name of the trigger. Must be unique within the project.
  Name?: string;

  /*
Build logs will be sent back to GitHub as part of the checkrun
result.  Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or
INCLUDE_BUILD_LOGS_WITH_STATUS
Possible values are: `INCLUDE_BUILD_LOGS_UNSPECIFIED`, `INCLUDE_BUILD_LOGS_WITH_STATUS`.
*/
  IncludeBuildLogs?: string;

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
  IncludedFiles?: Array<string>;

  /*
The configuration of a trigger that creates a build whenever an event from Repo API is received.
Structure is documented below.
*/
  RepositoryEventConfig?: TriggerRepositoryEventConfig;

  /*
The repo and ref of the repository from which to build.
This field is used only for those triggers that do not respond to SCM events.
Triggers that respond to such events build source at whatever commit caused the event.
This field is currently only used by Webhook, Pub/Sub, Manual, and Cron triggers.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  SourceToBuild?: TriggerSourceToBuild;

  // Substitutions data for Build resource.
  Substitutions?: Map<string, string>;

  // Human-readable description of the trigger.
  Description?: string;

  /*
Describes the configuration of a trigger that creates a build whenever a GitHub event is received.
One of `trigger_template`, `github`, `pubsub_config` or `webhook_config` must be provided.
Structure is documented below.
*/
  Github?: TriggerGithub;

  /*
ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match
extended with support for `--`.
If ignoredFiles and changed files are both empty, then they are not
used to determine whether or not to trigger a build.
If ignoredFiles is not empty, then we ignore any files that match any
of the ignored_file globs. If the change has no files that are outside
of the ignoredFiles globs, then we do not trigger a build.
*/
  IgnoredFiles?: Array<string>;

  // A Common Expression Language string. Used only with Pub/Sub and Webhook.
  Filter?: string;

  /*
The file source describing the local or remote Build template.
Structure is documented below.
*/
  GitFileSource?: TriggerGitFileSource;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The service account used for all user-controlled operations including
triggers.patch, triggers.run, builds.create, and builds.cancel.
If no service account is set, then the standard Cloud Build service account
([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.
Format: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}
*/
  ServiceAccount?: string;

  /*
Configuration for manual approval to start a build invocation of this BuildTrigger.
Builds created by this trigger will require approval before they execute.
Any user with a Cloud Build Approver role for the project can approve a build.
Structure is documented below.
*/
  ApprovalConfig?: TriggerApprovalConfig;

  // Whether the trigger is disabled or not. If true, the trigger will never result in a build.
  Disabled?: boolean;

  /*
Path, from the source root, to a file whose contents is used for the template.
Either a filename or build template must be provided. Set this only when using trigger_template or github.
When using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.
*/
  Filename?: string;

  /*
The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger.
If not specified, "global" is used.
*/
  Location?: string;

  /*
PubsubConfig describes the configuration of a trigger that creates
a build whenever a Pub/Sub message is published.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  PubsubConfig?: TriggerPubsubConfig;
}
export class Trigger extends Resource {
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
  public IncludedFiles?: Array<string>;

  /*
The repo and ref of the repository from which to build.
This field is used only for those triggers that do not respond to SCM events.
Triggers that respond to such events build source at whatever commit caused the event.
This field is currently only used by Webhook, Pub/Sub, Manual, and Cron triggers.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  public SourceToBuild?: TriggerSourceToBuild;

  // Tags for annotation of a BuildTrigger
  public Tags?: Array<string>;

  /*
WebhookConfig describes the configuration of a trigger that creates
a build whenever a webhook is sent to a trigger's webhook URL.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  public WebhookConfig?: TriggerWebhookConfig;

  /*
Configuration for manual approval to start a build invocation of this BuildTrigger.
Builds created by this trigger will require approval before they execute.
Any user with a Cloud Build Approver role for the project can approve a build.
Structure is documented below.
*/
  public ApprovalConfig?: TriggerApprovalConfig;

  /*
ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match
extended with support for `--`.
If ignoredFiles and changed files are both empty, then they are not
used to determine whether or not to trigger a build.
If ignoredFiles is not empty, then we ignore any files that match any
of the ignored_file globs. If the change has no files that are outside
of the ignoredFiles globs, then we do not trigger a build.
*/
  public IgnoredFiles?: Array<string>;

  // A Common Expression Language string. Used only with Pub/Sub and Webhook.
  public Filter?: string;

  /*
The file source describing the local or remote Build template.
Structure is documented below.
*/
  public GitFileSource?: TriggerGitFileSource;

  /*
The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger.
If not specified, "global" is used.
*/
  public Location?: string;

  // Name of the trigger. Must be unique within the project.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
PubsubConfig describes the configuration of a trigger that creates
a build whenever a Pub/Sub message is published.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  public PubsubConfig?: TriggerPubsubConfig;

  /*
Contents of the build template. Either a filename or build template must be provided.
Structure is documented below.
*/
  public Build?: TriggerBuild;

  // Time when the trigger was created.
  public CreateTime?: string;

  // The unique identifier for the trigger.
  public TriggerId?: string;

  /*
Template describing the types of source changes to trigger a build.
Branch and tag names in trigger templates are interpreted as regular
expressions. Any branch or tag change that matches that regular
expression will trigger a build.
One of `trigger_template`, `github`, `pubsub_config`, `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  public TriggerTemplate?: TriggerTriggerTemplate;

  /*
The configuration of a trigger that creates a build whenever an event from Repo API is received.
Structure is documented below.
*/
  public RepositoryEventConfig?: TriggerRepositoryEventConfig;

  // Substitutions data for Build resource.
  public Substitutions?: Map<string, string>;

  // Whether the trigger is disabled or not. If true, the trigger will never result in a build.
  public Disabled?: boolean;

  /*
Path, from the source root, to a file whose contents is used for the template.
Either a filename or build template must be provided. Set this only when using trigger_template or github.
When using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.
*/
  public Filename?: string;

  /*
Describes the configuration of a trigger that creates a build whenever a GitHub event is received.
One of `trigger_template`, `github`, `pubsub_config` or `webhook_config` must be provided.
Structure is documented below.
*/
  public Github?: TriggerGithub;

  /*
Build logs will be sent back to GitHub as part of the checkrun
result.  Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or
INCLUDE_BUILD_LOGS_WITH_STATUS
Possible values are: `INCLUDE_BUILD_LOGS_UNSPECIFIED`, `INCLUDE_BUILD_LOGS_WITH_STATUS`.
*/
  public IncludeBuildLogs?: string;

  /*
The service account used for all user-controlled operations including
triggers.patch, triggers.run, builds.create, and builds.cancel.
If no service account is set, then the standard Cloud Build service account
([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.
Format: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}
*/
  public ServiceAccount?: string;

  /*
BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
Structure is documented below.
*/
  public BitbucketServerTriggerConfig?: TriggerBitbucketServerTriggerConfig;

  // Human-readable description of the trigger.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "IncludeBuildLogs",
        "Build logs will be sent back to GitHub as part of the checkrun\nresult.  Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or\nINCLUDE_BUILD_LOGS_WITH_STATUS\nPossible values are: `INCLUDE_BUILD_LOGS_UNSPECIFIED`, `INCLUDE_BUILD_LOGS_WITH_STATUS`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Human-readable description of the trigger.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Filter",
        "A Common Expression Language string. Used only with Pub/Sub and Webhook.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "IgnoredFiles",
        "ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match\nextended with support for `**`.\nIf ignoredFiles and changed files are both empty, then they are not\nused to determine whether or not to trigger a build.\nIf ignoredFiles is not empty, then we ignore any files that match any\nof the ignored_file globs. If the change has no files that are outside\nof the ignoredFiles globs, then we do not trigger a build.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "The service account used for all user-controlled operations including\ntriggers.patch, triggers.run, builds.create, and builds.cancel.\nIf no service account is set, then the standard Cloud Build service account\n([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.\nFormat: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Disabled",
        "Whether the trigger is disabled or not. If true, the trigger will never result in a build.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TriggerTemplate",
        "Template describing the types of source changes to trigger a build.\nBranch and tag names in trigger templates are interpreted as regular\nexpressions. Any branch or tag change that matches that regular\nexpression will trigger a build.\nOne of `trigger_template`, `github`, `pubsub_config`, `webhook_config` or `source_to_build` must be provided.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BitbucketServerTriggerConfig",
        "BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Build",
        "Contents of the build template. Either a filename or build template must be provided.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Substitutions",
        "Substitutions data for Build resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Github",
        "Describes the configuration of a trigger that creates a build whenever a GitHub event is received.\nOne of `trigger_template`, `github`, `pubsub_config` or `webhook_config` must be provided.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        'The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger.\nIf not specified, "global" is used.',
      ),
      new DynamicUIProps(
        InputType.String,
        "WebhookConfig",
        "WebhookConfig describes the configuration of a trigger that creates\na build whenever a webhook is sent to a trigger's webhook URL.\nOne of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "IncludedFiles",
        "ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match\nextended with support for `**`.\nIf any of the files altered in the commit pass the ignoredFiles filter\nand includedFiles is empty, then as far as this filter is concerned, we\nshould trigger the build.\nIf any of the files altered in the commit pass the ignoredFiles filter\nand includedFiles is not empty, then we make sure that at least one of\nthose files matches a includedFiles glob. If not, then we do not trigger\na build.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RepositoryEventConfig",
        "The configuration of a trigger that creates a build whenever an event from Repo API is received.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PubsubConfig",
        "PubsubConfig describes the configuration of a trigger that creates\na build whenever a Pub/Sub message is published.\nOne of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Filename",
        "Path, from the source root, to a file whose contents is used for the template.\nEither a filename or build template must be provided. Set this only when using trigger_template or github.\nWhen using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Tags",
        "Tags for annotation of a BuildTrigger",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the trigger. Must be unique within the project.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceToBuild",
        "The repo and ref of the repository from which to build.\nThis field is used only for those triggers that do not respond to SCM events.\nTriggers that respond to such events build source at whatever commit caused the event.\nThis field is currently only used by Webhook, Pub/Sub, Manual, and Cron triggers.\nOne of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GitFileSource",
        "The file source describing the local or remote Build template.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ApprovalConfig",
        "Configuration for manual approval to start a build invocation of this BuildTrigger.\nBuilds created by this trigger will require approval before they execute.\nAny user with a Cloud Build Approver role for the project can approve a build.\nStructure is documented below.",
      ),
    ];
  }
}
