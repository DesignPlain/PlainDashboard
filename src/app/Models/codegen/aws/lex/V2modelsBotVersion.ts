import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsBotVersionLocaleSpecification,
  lex_V2modelsBotVersionLocaleSpecification_GetTypes,
} from "../types/lex_V2modelsBotVersionLocaleSpecification";
import {
  lex_V2modelsBotVersionTimeouts,
  lex_V2modelsBotVersionTimeouts_GetTypes,
} from "../types/lex_V2modelsBotVersionTimeouts";

export interface V2modelsBotVersionArgs {
  // A description of the version. Use the description to help identify the version in lists.
  description?: string;

  /*
Specifies the locales that Amazon Lex adds to this version. You can choose the draft version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.

The attribute value is a map with one or more entries, each of which has a locale name as the key and an object with the following attribute as the value:
- `sourceBotVersion` - (Required) The version of a bot used for a bot locale. Valid values: `DRAFT`, a numeric version.
*/
  localeSpecification?: Map<string, lex_V2modelsBotVersionLocaleSpecification>;

  //
  timeouts?: lex_V2modelsBotVersionTimeouts;

  // Idientifier of the bot to create the version for.
  botId?: string;

  // Version number assigned to the version.
  botVersion?: string;
}
export class V2modelsBotVersion extends DS_Resource {
  //
  public timeouts?: lex_V2modelsBotVersionTimeouts;

  // Idientifier of the bot to create the version for.
  public botId?: string;

  // Version number assigned to the version.
  public botVersion?: string;

  // A description of the version. Use the description to help identify the version in lists.
  public description?: string;

  /*
Specifies the locales that Amazon Lex adds to this version. You can choose the draft version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.

The attribute value is a map with one or more entries, each of which has a locale name as the key and an object with the following attribute as the value:
- `sourceBotVersion` - (Required) The version of a bot used for a bot locale. Valid values: `DRAFT`, a numeric version.
*/
  public localeSpecification?: Map<
    string,
    lex_V2modelsBotVersionLocaleSpecification
  >;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "botId",
        "Idientifier of the bot to create the version for.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "botVersion",
        "Version number assigned to the version.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the version. Use the description to help identify the version in lists.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "localeSpecification",
        "Specifies the locales that Amazon Lex adds to this version. You can choose the draft version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.\n\nThe attribute value is a map with one or more entries, each of which has a locale name as the key and an object with the following attribute as the value:\n* `sourceBotVersion` - (Required) The version of a bot used for a bot locale. Valid values: `DRAFT`, a numeric version.",
        () => InputType_Map_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => lex_V2modelsBotVersionTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
