import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  diagflow_CxSecuritySettingsAudioExportSettings,
  diagflow_CxSecuritySettingsAudioExportSettings_GetTypes,
} from '../types/diagflow_CxSecuritySettingsAudioExportSettings';
import {
  diagflow_CxSecuritySettingsInsightsExportSettings,
  diagflow_CxSecuritySettingsInsightsExportSettings_GetTypes,
} from '../types/diagflow_CxSecuritySettingsInsightsExportSettings';

export interface CxSecuritySettingsArgs {
  /*
List of types of data to remove when retention settings triggers purge.
Each value may be one of: `DIALOGFLOW_HISTORY`.
*/
  purgeDataTypes?: Array<string>;

  /*
Defines how we redact data. If not set, defaults to not redacting.
- REDACT_WITH_SERVICE: Call redaction service to clean up the data to be persisted.
Possible values are: `REDACT_WITH_SERVICE`.
*/
  redactionStrategy?: string;

  /*
Defines how long we retain persisted data that contains sensitive info. Only one of `retention_window_days` and `retention_strategy` may be set.
- REMOVE_AFTER_CONVERSATION: Removes data when the conversation ends. If there is no conversation explicitly established, a default conversation ends when the corresponding Dialogflow session ends.
Possible values are: `REMOVE_AFTER_CONVERSATION`.
*/
  retentionStrategy?: string;

  /*
Controls audio export settings for post-conversation analytics when ingesting audio to conversations.
If retention_strategy is set to REMOVE_AFTER_CONVERSATION or gcs_bucket is empty, audio export is disabled.
If audio export is enabled, audio is recorded and saved to gcs_bucket, subject to retention policy of gcs_bucket.
This setting won't effect audio input for implicit sessions via [Sessions.DetectIntent](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.sessions/detectIntent#google.cloud.dialogflow.cx.v3.Sessions.DetectIntent).
Structure is documented below.
*/
  audioExportSettings?: diagflow_CxSecuritySettingsAudioExportSettings;

  /*
Controls conversation exporting settings to Insights after conversation is completed.
If retentionStrategy is set to REMOVE_AFTER_CONVERSATION, Insights export is disabled no matter what you configure here.
Structure is documented below.
*/
  insightsExportSettings?: diagflow_CxSecuritySettingsInsightsExportSettings;

  /*
[DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config.
Note: inspectTemplate must be located in the same region as the SecuritySettings.
Format: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>
*/
  inspectTemplate?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Retains the data for the specified number of days. User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL.
Only one of `retention_window_days` and `retention_strategy` may be set.
*/
  retentionWindowDays?: number;

  /*
[DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text.
Note: deidentifyTemplate must be located in the same region as the SecuritySettings.
Format: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>
*/
  deidentifyTemplate?: string;

  /*
The human-readable name of the security settings, unique within the location.


- - -
*/
  displayName?: string;

  /*
The location these settings are located in. Settings can only be applied to an agent in the same location.
See [Available Regions](https://cloud.google.com/dialogflow/cx/docs/concept/region#avail) for a list of supported locations.
*/
  location?: string;

  /*
Defines what types of data to redact. If not set, defaults to not redacting any kind of data.
- REDACT_DISK_STORAGE: On data to be written to disk or similar devices that are capable of holding data even if power is disconnected. This includes data that are temporarily saved on disk.
Possible values are: `REDACT_DISK_STORAGE`.
*/
  redactionScope?: string;
}
export class CxSecuritySettings extends DS_Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
List of types of data to remove when retention settings triggers purge.
Each value may be one of: `DIALOGFLOW_HISTORY`.
*/
  public purgeDataTypes?: Array<string>;

  /*
Defines how we redact data. If not set, defaults to not redacting.
- REDACT_WITH_SERVICE: Call redaction service to clean up the data to be persisted.
Possible values are: `REDACT_WITH_SERVICE`.
*/
  public redactionStrategy?: string;

  /*
[DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text.
Note: deidentifyTemplate must be located in the same region as the SecuritySettings.
Format: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>
*/
  public deidentifyTemplate?: string;

  /*
Controls conversation exporting settings to Insights after conversation is completed.
If retentionStrategy is set to REMOVE_AFTER_CONVERSATION, Insights export is disabled no matter what you configure here.
Structure is documented below.
*/
  public insightsExportSettings?: diagflow_CxSecuritySettingsInsightsExportSettings;

  /*
[DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config.
Note: inspectTemplate must be located in the same region as the SecuritySettings.
Format: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>
*/
  public inspectTemplate?: string;

  /*
The location these settings are located in. Settings can only be applied to an agent in the same location.
See [Available Regions](https://cloud.google.com/dialogflow/cx/docs/concept/region#avail) for a list of supported locations.
*/
  public location?: string;

  /*
The unique identifier of the settings.
Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
*/
  public name?: string;

  /*
Defines how long we retain persisted data that contains sensitive info. Only one of `retention_window_days` and `retention_strategy` may be set.
- REMOVE_AFTER_CONVERSATION: Removes data when the conversation ends. If there is no conversation explicitly established, a default conversation ends when the corresponding Dialogflow session ends.
Possible values are: `REMOVE_AFTER_CONVERSATION`.
*/
  public retentionStrategy?: string;

  /*
Controls audio export settings for post-conversation analytics when ingesting audio to conversations.
If retention_strategy is set to REMOVE_AFTER_CONVERSATION or gcs_bucket is empty, audio export is disabled.
If audio export is enabled, audio is recorded and saved to gcs_bucket, subject to retention policy of gcs_bucket.
This setting won't effect audio input for implicit sessions via [Sessions.DetectIntent](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.sessions/detectIntent#google.cloud.dialogflow.cx.v3.Sessions.DetectIntent).
Structure is documented below.
*/
  public audioExportSettings?: diagflow_CxSecuritySettingsAudioExportSettings;

  /*
The human-readable name of the security settings, unique within the location.


- - -
*/
  public displayName?: string;

  /*
Defines what types of data to redact. If not set, defaults to not redacting any kind of data.
- REDACT_DISK_STORAGE: On data to be written to disk or similar devices that are capable of holding data even if power is disconnected. This includes data that are temporarily saved on disk.
Possible values are: `REDACT_DISK_STORAGE`.
*/
  public redactionScope?: string;

  /*
Retains the data for the specified number of days. User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL.
Only one of `retention_window_days` and `retention_strategy` may be set.
*/
  public retentionWindowDays?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'audioExportSettings',
        "Controls audio export settings for post-conversation analytics when ingesting audio to conversations.\nIf retention_strategy is set to REMOVE_AFTER_CONVERSATION or gcs_bucket is empty, audio export is disabled.\nIf audio export is enabled, audio is recorded and saved to gcs_bucket, subject to retention policy of gcs_bucket.\nThis setting won't effect audio input for implicit sessions via [Sessions.DetectIntent](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.sessions/detectIntent#google.cloud.dialogflow.cx.v3.Sessions.DetectIntent).\nStructure is documented below.",
        () => diagflow_CxSecuritySettingsAudioExportSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location these settings are located in. Settings can only be applied to an agent in the same location.\nSee [Available Regions](https://cloud.google.com/dialogflow/cx/docs/concept/region#avail) for a list of supported locations.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'redactionScope',
        'Defines what types of data to redact. If not set, defaults to not redacting any kind of data.\n* REDACT_DISK_STORAGE: On data to be written to disk or similar devices that are capable of holding data even if power is disconnected. This includes data that are temporarily saved on disk.\nPossible values are: `REDACT_DISK_STORAGE`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'retentionStrategy',
        'Defines how long we retain persisted data that contains sensitive info. Only one of `retention_window_days` and `retention_strategy` may be set.\n* REMOVE_AFTER_CONVERSATION: Removes data when the conversation ends. If there is no conversation explicitly established, a default conversation ends when the corresponding Dialogflow session ends.\nPossible values are: `REMOVE_AFTER_CONVERSATION`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'redactionStrategy',
        'Defines how we redact data. If not set, defaults to not redacting.\n* REDACT_WITH_SERVICE: Call redaction service to clean up the data to be persisted.\nPossible values are: `REDACT_WITH_SERVICE`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'insightsExportSettings',
        'Controls conversation exporting settings to Insights after conversation is completed.\nIf retentionStrategy is set to REMOVE_AFTER_CONVERSATION, Insights export is disabled no matter what you configure here.\nStructure is documented below.',
        () => diagflow_CxSecuritySettingsInsightsExportSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'inspectTemplate',
        '[DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config.\nNote: inspectTemplate must be located in the same region as the SecuritySettings.\nFormat: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'retentionWindowDays',
        "Retains the data for the specified number of days. User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL.\nOnly one of `retention_window_days` and `retention_strategy` may be set.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'deidentifyTemplate',
        '[DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text.\nNote: deidentifyTemplate must be located in the same region as the SecuritySettings.\nFormat: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'The human-readable name of the security settings, unique within the location.\n\n\n- - -',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'purgeDataTypes',
        'List of types of data to remove when retention settings triggers purge.\nEach value may be one of: `DIALOGFLOW_HISTORY`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
