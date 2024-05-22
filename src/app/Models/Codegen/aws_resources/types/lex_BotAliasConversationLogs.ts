import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_BotAliasConversationLogsLogSetting,
  lex_BotAliasConversationLogsLogSetting_GetTypes,
} from "./lex_BotAliasConversationLogsLogSetting";

export interface lex_BotAliasConversationLogs {
  // The Amazon Resource Name (ARN) of the IAM role used to write your logs to CloudWatch Logs or an S3 bucket. Must be between 20 and 2048 characters in length.
  iamRoleArn?: string;

  // The settings for your conversation logs. You can log text, audio, or both. Attributes are documented under log_settings.
  logSettings?: Array<lex_BotAliasConversationLogsLogSetting>;
}

export function lex_BotAliasConversationLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "iamRoleArn",
      "The Amazon Resource Name (ARN) of the IAM role used to write your logs to CloudWatch Logs or an S3 bucket. Must be between 20 and 2048 characters in length.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "logSettings",
      "The settings for your conversation logs. You can log text, audio, or both. Attributes are documented under log_settings.",
      lex_BotAliasConversationLogsLogSetting_GetTypes(),
      false,
      false,
    ),
  ];
}
