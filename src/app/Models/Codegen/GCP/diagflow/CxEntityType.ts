import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxEntityTypeExcludedPhrase,
  Diagflow_CxEntityTypeExcludedPhrase_GetTypes,
} from "../types/Diagflow_CxEntityTypeExcludedPhrase";
import {
  Diagflow_CxEntityTypeEntity,
  Diagflow_CxEntityTypeEntity_GetTypes,
} from "../types/Diagflow_CxEntityTypeEntity";

export interface CxEntityTypeArgs {
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
Represents kinds of entities.
- AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.
- AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity.
Possible values are: `AUTO_EXPANSION_MODE_DEFAULT`, `AUTO_EXPANSION_MODE_UNSPECIFIED`.
*/
  AutoExpansionMode?: string;

  // The human-readable name of the entity type, unique within the agent.
  DisplayName?: string;

  /*
Collection of exceptional words and phrases that shouldn't be matched. For example, if you have a size entity type with entry giant(an adjective), you might consider adding giants(a noun) as an exclusion.
If the kind of entity type is KIND_MAP, then the phrases specified by entities and excluded phrases should be mutually exclusive.
Structure is documented below.
*/
  ExcludedPhrases?: Array<Diagflow_CxEntityTypeExcludedPhrase>;

  /*
The agent to create a entity type for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  Parent?: string;

  // Indicates whether parameters of the entity type should be redacted in log. If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.
  Redact?: boolean;

  // Enables fuzzy entity extraction during classification.
  EnableFuzzyExtraction?: boolean;

  /*
The collection of entity entries associated with the entity type.
Structure is documented below.
*/
  Entities?: Array<Diagflow_CxEntityTypeEntity>;
}
export class CxEntityType extends Resource {
  // Enables fuzzy entity extraction during classification.
  public EnableFuzzyExtraction?: boolean;

  /*
The collection of entity entries associated with the entity type.
Structure is documented below.
*/
  public Entities?: Array<Diagflow_CxEntityTypeEntity>;

  /*
Collection of exceptional words and phrases that shouldn't be matched. For example, if you have a size entity type with entry giant(an adjective), you might consider adding giants(a noun) as an exclusion.
If the kind of entity type is KIND_MAP, then the phrases specified by entities and excluded phrases should be mutually exclusive.
Structure is documented below.
*/
  public ExcludedPhrases?: Array<Diagflow_CxEntityTypeExcludedPhrase>;

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

  /*
The agent to create a entity type for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  public Parent?: string;

  // The human-readable name of the entity type, unique within the agent.
  public DisplayName?: string;

  /*
The unique identifier of the entity type.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID>.
*/
  public Name?: string;

  // Indicates whether parameters of the entity type should be redacted in log. If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.
  public Redact?: boolean;

  /*
Represents kinds of entities.
- AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.
- AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity.
Possible values are: `AUTO_EXPANSION_MODE_DEFAULT`, `AUTO_EXPANSION_MODE_UNSPECIFIED`.
*/
  public AutoExpansionMode?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "LanguageCode",
        "The language of the following fields in entityType:\nEntityType.entities.value\nEntityType.entities.synonyms\nEntityType.excluded_phrases.value\nIf not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The human-readable name of the entity type, unique within the agent.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The agent to create a entity type for.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableFuzzyExtraction",
        "Enables fuzzy entity extraction during classification.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Entities",
        "The collection of entity entries associated with the entity type.\nStructure is documented below.",
        Diagflow_CxEntityTypeEntity_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Kind",
        "Indicates whether the entity type can be automatically expanded.\n* KIND_MAP: Map entity types allow mapping of a group of synonyms to a canonical value.\n* KIND_LIST: List entity types contain a set of entries that do not map to canonical values. However, list entity types can contain references to other entity types (with or without aliases).\n* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values.\nPossible values are: `KIND_MAP`, `KIND_LIST`, `KIND_REGEXP`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "AutoExpansionMode",
        "Represents kinds of entities.\n* AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.\n* AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity.\nPossible values are: `AUTO_EXPANSION_MODE_DEFAULT`, `AUTO_EXPANSION_MODE_UNSPECIFIED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ExcludedPhrases",
        "Collection of exceptional words and phrases that shouldn't be matched. For example, if you have a size entity type with entry giant(an adjective), you might consider adding giants(a noun) as an exclusion.\nIf the kind of entity type is KIND_MAP, then the phrases specified by entities and excluded phrases should be mutually exclusive.\nStructure is documented below.",
        Diagflow_CxEntityTypeExcludedPhrase_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Redact",
        "Indicates whether parameters of the entity type should be redacted in log. If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.",
        [],
        false,
        false,
      ),
    ];
  }
}
