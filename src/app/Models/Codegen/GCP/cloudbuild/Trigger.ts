import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_TriggerRepositoryEventConfig,
  Cloudbuild_TriggerRepositoryEventConfig_GetTypes,
} from "../types/Cloudbuild_TriggerRepositoryEventConfig";
import {
  Cloudbuild_TriggerWebhookConfig,
  Cloudbuild_TriggerWebhookConfig_GetTypes,
} from "../types/Cloudbuild_TriggerWebhookConfig";
import {
  Cloudbuild_TriggerBuild,
  Cloudbuild_TriggerBuild_GetTypes,
} from "../types/Cloudbuild_TriggerBuild";
import {
  Cloudbuild_TriggerApprovalConfig,
  Cloudbuild_TriggerApprovalConfig_GetTypes,
} from "../types/Cloudbuild_TriggerApprovalConfig";
import {
  Cloudbuild_TriggerTriggerTemplate,
  Cloudbuild_TriggerTriggerTemplate_GetTypes,
} from "../types/Cloudbuild_TriggerTriggerTemplate";
import {
  Cloudbuild_TriggerBitbucketServerTriggerConfig,
  Cloudbuild_TriggerBitbucketServerTriggerConfig_GetTypes,
} from "../types/Cloudbuild_TriggerBitbucketServerTriggerConfig";
import {
  Cloudbuild_TriggerGitFileSource,
  Cloudbuild_TriggerGitFileSource_GetTypes,
} from "../types/Cloudbuild_TriggerGitFileSource";
import {
  Cloudbuild_TriggerGithub,
  Cloudbuild_TriggerGithub_GetTypes,
} from "../types/Cloudbuild_TriggerGithub";
import {
  Cloudbuild_TriggerSourceToBuild,
  Cloudbuild_TriggerSourceToBuild_GetTypes,
} from "../types/Cloudbuild_TriggerSourceToBuild";
import {
  Cloudbuild_TriggerPubsubConfig,
  Cloudbuild_TriggerPubsubConfig_GetTypes,
} from "../types/Cloudbuild_TriggerPubsubConfig";

export interface TriggerArgs {
  /*
WebhookConfig describes the configuration of a trigger that creates
a build whenever a webhook is sent to a trigger's webhook URL.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  WebhookConfig?: Cloudbuild_TriggerWebhookConfig;

  // A Common Expression Language string. Used only with Pub/Sub and Webhook.
  Filter?: string;

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

  // Name of the trigger. Must be unique within the project.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Substitutions data for Build resource.
  Substitutions?: Map<string, string>;

  /*
The repo and ref of the repository from which to build.
This field is used only for those triggers that do not respond to SCM events.
Triggers that respond to such events build source at whatever commit caused the event.
This field is currently only used by Webhook, Pub/Sub, Manual, and Cron triggers.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  SourceToBuild?: Cloudbuild_TriggerSourceToBuild;

  /*
Contents of the build template. Either a filename or build template must be provided.
Structure is documented below.
*/
  Build?: Cloudbuild_TriggerBuild;

  /*
Path, from the source root, to a file whose contents is used for the template.
Either a filename or build template must be provided. Set this only when using trigger_template or github.
When using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.
*/
  Filename?: string;

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
PubsubConfig describes the configuration of a trigger that creates
a build whenever a Pub/Sub message is published.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  PubsubConfig?: Cloudbuild_TriggerPubsubConfig;

  /*
Configuration for manual approval to start a build invocation of this BuildTrigger.
Builds created by this trigger will require approval before they execute.
Any user with a Cloud Build Approver role for the project can approve a build.
Structure is documented below.
*/
  ApprovalConfig?: Cloudbuild_TriggerApprovalConfig;

  // Human-readable description of the trigger.
  Description?: string;

  // Whether the trigger is disabled or not. If true, the trigger will never result in a build.
  Disabled?: boolean;

  /*
The service account used for all user-controlled operations including
triggers.patch, triggers.run, builds.create, and builds.cancel.
If no service account is set, then the standard Cloud Build service account
([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.
Format: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}
*/
  ServiceAccount?: string;

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
  TriggerTemplate?: Cloudbuild_TriggerTriggerTemplate;

  /*
BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
Structure is documented below.
*/
  BitbucketServerTriggerConfig?: Cloudbuild_TriggerBitbucketServerTriggerConfig;

  /*
The file source describing the local or remote Build template.
Structure is documented below.
*/
  GitFileSource?: Cloudbuild_TriggerGitFileSource;

  /*
Describes the configuration of a trigger that creates a build whenever a GitHub event is received.
One of `trigger_template`, `github`, `pubsub_config` or `webhook_config` must be provided.
Structure is documented below.
*/
  Github?: Cloudbuild_TriggerGithub;

  /*
The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger.
If not specified, "global" is used.
*/
  Location?: string;

  /*
The configuration of a trigger that creates a build whenever an event from Repo API is received.
Structure is documented below.
*/
  RepositoryEventConfig?: Cloudbuild_TriggerRepositoryEventConfig;
}
export class Trigger extends Resource {
  // Name of the trigger. Must be unique within the project.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The service account used for all user-controlled operations including
triggers.patch, triggers.run, builds.create, and builds.cancel.
If no service account is set, then the standard Cloud Build service account
([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.
Format: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}
*/
  public ServiceAccount?: string;

  // Time when the trigger was created.
  public CreateTime?: string;

  /*
Build logs will be sent back to GitHub as part of the checkrun
result.  Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or
INCLUDE_BUILD_LOGS_WITH_STATUS
Possible values are: `INCLUDE_BUILD_LOGS_UNSPECIFIED`, `INCLUDE_BUILD_LOGS_WITH_STATUS`.
*/
  public IncludeBuildLogs?: string;

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

  // Substitutions data for Build resource.
  public Substitutions?: Map<string, string>;

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
  public TriggerTemplate?: Cloudbuild_TriggerTriggerTemplate;

  // Human-readable description of the trigger.
  public Description?: string;

  /*
The file source describing the local or remote Build template.
Structure is documented below.
*/
  public GitFileSource?: Cloudbuild_TriggerGitFileSource;

  // Whether the trigger is disabled or not. If true, the trigger will never result in a build.
  public Disabled?: boolean;

  /*
Path, from the source root, to a file whose contents is used for the template.
Either a filename or build template must be provided. Set this only when using trigger_template or github.
When using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.
*/
  public Filename?: string;

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

  /*
The repo and ref of the repository from which to build.
This field is used only for those triggers that do not respond to SCM events.
Triggers that respond to such events build source at whatever commit caused the event.
This field is currently only used by Webhook, Pub/Sub, Manual, and Cron triggers.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  public SourceToBuild?: Cloudbuild_TriggerSourceToBuild;

  // Tags for annotation of a BuildTrigger
  public Tags?: Array<string>;

  /*
Configuration for manual approval to start a build invocation of this BuildTrigger.
Builds created by this trigger will require approval before they execute.
Any user with a Cloud Build Approver role for the project can approve a build.
Structure is documented below.
*/
  public ApprovalConfig?: Cloudbuild_TriggerApprovalConfig;

  /*
BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
Structure is documented below.
*/
  public BitbucketServerTriggerConfig?: Cloudbuild_TriggerBitbucketServerTriggerConfig;

  /*
Describes the configuration of a trigger that creates a build whenever a GitHub event is received.
One of `trigger_template`, `github`, `pubsub_config` or `webhook_config` must be provided.
Structure is documented below.
*/
  public Github?: Cloudbuild_TriggerGithub;

  /*
The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger.
If not specified, "global" is used.
*/
  public Location?: string;

  /*
PubsubConfig describes the configuration of a trigger that creates
a build whenever a Pub/Sub message is published.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  public PubsubConfig?: Cloudbuild_TriggerPubsubConfig;

  /*
The configuration of a trigger that creates a build whenever an event from Repo API is received.
Structure is documented below.
*/
  public RepositoryEventConfig?: Cloudbuild_TriggerRepositoryEventConfig;

  /*
WebhookConfig describes the configuration of a trigger that creates
a build whenever a webhook is sent to a trigger's webhook URL.
One of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.
Structure is documented below.
*/
  public WebhookConfig?: Cloudbuild_TriggerWebhookConfig;

  /*
Contents of the build template. Either a filename or build template must be provided.
Structure is documented below.
*/
  public Build?: Cloudbuild_TriggerBuild;

  // A Common Expression Language string. Used only with Pub/Sub and Webhook.
  public Filter?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "IncludedFiles",
        "ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match\nextended with support for `**`.\nIf any of the files altered in the commit pass the ignoredFiles filter\nand includedFiles is empty, then as far as this filter is concerned, we\nshould trigger the build.\nIf any of the files altered in the commit pass the ignoredFiles filter\nand includedFiles is not empty, then we make sure that at least one of\nthose files matches a includedFiles glob. If not, then we do not trigger\na build.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Disabled",
        "Whether the trigger is disabled or not. If true, the trigger will never result in a build.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        'The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger.\nIf not specified, "global" is used.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "WebhookConfig",
        "WebhookConfig describes the configuration of a trigger that creates\na build whenever a webhook is sent to a trigger's webhook URL.\nOne of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.\nStructure is documented below.",
        Cloudbuild_TriggerWebhookConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the trigger. Must be unique within the project.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Substitutions",
        "Substitutions data for Build resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "IncludeBuildLogs",
        "Build logs will be sent back to GitHub as part of the checkrun\nresult.  Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or\nINCLUDE_BUILD_LOGS_WITH_STATUS\nPossible values are: `INCLUDE_BUILD_LOGS_UNSPECIFIED`, `INCLUDE_BUILD_LOGS_WITH_STATUS`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "IgnoredFiles",
        "ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match\nextended with support for `**`.\nIf ignoredFiles and changed files are both empty, then they are not\nused to determine whether or not to trigger a build.\nIf ignoredFiles is not empty, then we ignore any files that match any\nof the ignored_file globs. If the change has no files that are outside\nof the ignoredFiles globs, then we do not trigger a build.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Filename",
        "Path, from the source root, to a file whose contents is used for the template.\nEither a filename or build template must be provided. Set this only when using trigger_template or github.\nWhen using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ApprovalConfig",
        "Configuration for manual approval to start a build invocation of this BuildTrigger.\nBuilds created by this trigger will require approval before they execute.\nAny user with a Cloud Build Approver role for the project can approve a build.\nStructure is documented below.",
        Cloudbuild_TriggerApprovalConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GitFileSource",
        "The file source describing the local or remote Build template.\nStructure is documented below.",
        Cloudbuild_TriggerGitFileSource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BitbucketServerTriggerConfig",
        "BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.\nStructure is documented below.",
        Cloudbuild_TriggerBitbucketServerTriggerConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Github",
        "Describes the configuration of a trigger that creates a build whenever a GitHub event is received.\nOne of `trigger_template`, `github`, `pubsub_config` or `webhook_config` must be provided.\nStructure is documented below.",
        Cloudbuild_TriggerGithub_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Filter",
        "A Common Expression Language string. Used only with Pub/Sub and Webhook.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SourceToBuild",
        "The repo and ref of the repository from which to build.\nThis field is used only for those triggers that do not respond to SCM events.\nTriggers that respond to such events build source at whatever commit caused the event.\nThis field is currently only used by Webhook, Pub/Sub, Manual, and Cron triggers.\nOne of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.\nStructure is documented below.",
        Cloudbuild_TriggerSourceToBuild_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Human-readable description of the trigger.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Tags",
        "Tags for annotation of a BuildTrigger",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "TriggerTemplate",
        "Template describing the types of source changes to trigger a build.\nBranch and tag names in trigger templates are interpreted as regular\nexpressions. Any branch or tag change that matches that regular\nexpression will trigger a build.\nOne of `trigger_template`, `github`, `pubsub_config`, `webhook_config` or `source_to_build` must be provided.\nStructure is documented below.",
        Cloudbuild_TriggerTriggerTemplate_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Build",
        "Contents of the build template. Either a filename or build template must be provided.\nStructure is documented below.",
        Cloudbuild_TriggerBuild_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PubsubConfig",
        "PubsubConfig describes the configuration of a trigger that creates\na build whenever a Pub/Sub message is published.\nOne of `trigger_template`, `github`, `pubsub_config` `webhook_config` or `source_to_build` must be provided.\nStructure is documented below.",
        Cloudbuild_TriggerPubsubConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "The service account used for all user-controlled operations including\ntriggers.patch, triggers.run, builds.create, and builds.cancel.\nIf no service account is set, then the standard Cloud Build service account\n([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.\nFormat: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "RepositoryEventConfig",
        "The configuration of a trigger that creates a build whenever an event from Repo API is received.\nStructure is documented below.",
        Cloudbuild_TriggerRepositoryEventConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
