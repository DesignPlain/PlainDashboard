import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { CxEntityTypeExcludedPhrase } from "../types/CxEntityTypeExcludedPhrase";
import { CxEntityTypeEntity } from "../types/CxEntityTypeEntity";

export interface CxEntityTypeArgs {
  /*
Represents kinds of entities.
- AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.
- AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity.
Possible values are: `AUTO_EXPANSION_MODE_DEFAULT`, `AUTO_EXPANSION_MODE_UNSPECIFIED`.
*/
  AutoExpansionMode?: string;

  // Enables fuzzy entity extraction during classification.
  EnableFuzzyExtraction?: boolean;

  /*
Indicates whether the entity type can be automatically expanded.
- KIND_MAP: Map entity types allow mapping of a group of synonyms to a canonical value.
- KIND_LIST: List entity types contain a set of entries that do not map to canonical values. However, list entity types can contain references to other entity types (with or without aliases).
- KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values.
Possible values are: `KIND_MAP`, `KIND_LIST`, `KIND_REGEXP`.
*/
  Kind?: string;

  /*
The language of the following fields in entityType:
EntityType.entities.value
EntityType.entities.synonyms
EntityType.excluded_phrases.value
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
*/
  LanguageCode?: string;

  /*
The agent to create a entity type for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  Parent?: string;

  // The human-readable name of the entity type, unique within the agent.
  DisplayName?: string;

  /*
The collection of entity entries associated with the entity type.
Structure is documented below.
*/
  Entities?: Array<CxEntityTypeEntity>;

  /*
Collection of exceptional words and phrases that shouldn't be matched. For example, if you have a size entity type with entry giant(an adjective), you might consider adding giants(a noun) as an exclusion.
If the kind of entity type is KIND_MAP, then the phrases specified by entities and excluded phrases should be mutually exclusive.
Structure is documented below.
*/
  ExcludedPhrases?: Array<CxEntityTypeExcludedPhrase>;

  // Indicates whether parameters of the entity type should be redacted in log. If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.
  Redact?: boolean;
}
export class CxEntityType extends Resource {
  /*
The collection of entity entries associated with the entity type.
Structure is documented below.
*/
  public Entities?: Array<CxEntityTypeEntity>;

  /*
Collection of exceptional words and phrases that shouldn't be matched. For example, if you have a size entity type with entry giant(an adjective), you might consider adding giants(a noun) as an exclusion.
If the kind of entity type is KIND_MAP, then the phrases specified by entities and excluded phrases should be mutually exclusive.
Structure is documented below.
*/
  public ExcludedPhrases?: Array<CxEntityTypeExcludedPhrase>;

  /*
The unique identifier of the entity type.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID>.
*/
  public Name?: string;

  /*
The agent to create a entity type for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  public Parent?: string;

  // Indicates whether parameters of the entity type should be redacted in log. If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.
  public Redact?: boolean;

  /*
Represents kinds of entities.
- AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.
- AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity.
Possible values are: `AUTO_EXPANSION_MODE_DEFAULT`, `AUTO_EXPANSION_MODE_UNSPECIFIED`.
*/
  public AutoExpansionMode?: string;

  // The human-readable name of the entity type, unique within the agent.
  public DisplayName?: string;

  // Enables fuzzy entity extraction during classification.
  public EnableFuzzyExtraction?: boolean;

  /*
Indicates whether the entity type can be automatically expanded.
- KIND_MAP: Map entity types allow mapping of a group of synonyms to a canonical value.
- KIND_LIST: List entity types contain a set of entries that do not map to canonical values. However, list entity types can contain references to other entity types (with or without aliases).
- KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values.
Possible values are: `KIND_MAP`, `KIND_LIST`, `KIND_REGEXP`.
*/
  public Kind?: string;

  /*
The language of the following fields in entityType:
EntityType.entities.value
EntityType.entities.synonyms
EntityType.excluded_phrases.value
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
*/
  public LanguageCode?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Kind",
        "Indicates whether the entity type can be automatically expanded.\n* KIND_MAP: Map entity types allow mapping of a group of synonyms to a canonical value.\n* KIND_LIST: List entity types contain a set of entries that do not map to canonical values. However, list entity types can contain references to other entity types (with or without aliases).\n* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values.\nPossible values are: `KIND_MAP`, `KIND_LIST`, `KIND_REGEXP`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The human-readable name of the entity type, unique within the agent.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ExcludedPhrases",
        "Collection of exceptional words and phrases that shouldn't be matched. For example, if you have a size entity type with entry giant(an adjective), you might consider adding giants(a noun) as an exclusion.\nIf the kind of entity type is KIND_MAP, then the phrases specified by entities and excluded phrases should be mutually exclusive.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Redact",
        "Indicates whether parameters of the entity type should be redacted in log. If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AutoExpansionMode",
        "Represents kinds of entities.\n* AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.\n* AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity.\nPossible values are: `AUTO_EXPANSION_MODE_DEFAULT`, `AUTO_EXPANSION_MODE_UNSPECIFIED`.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableFuzzyExtraction",
        "Enables fuzzy entity extraction during classification.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LanguageCode",
        "The language of the following fields in entityType:\nEntityType.entities.value\nEntityType.entities.synonyms\nEntityType.excluded_phrases.value\nIf not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The agent to create a entity type for.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Entities",
        "The collection of entity entries associated with the entity type.\nStructure is documented below.",
      ),
    ];
  }
}
