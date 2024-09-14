import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kendra_IndexDocumentMetadataConfigurationUpdateRelevance,
  kendra_IndexDocumentMetadataConfigurationUpdateRelevance_GetTypes,
} from "./kendra_IndexDocumentMetadataConfigurationUpdateRelevance";
import {
  kendra_IndexDocumentMetadataConfigurationUpdateSearch,
  kendra_IndexDocumentMetadataConfigurationUpdateSearch_GetTypes,
} from "./kendra_IndexDocumentMetadataConfigurationUpdateSearch";

export interface kendra_IndexDocumentMetadataConfigurationUpdate {
  // The name of the index field. Minimum length of 1. Maximum length of 30.
  name?: string;

  // A block that provides manual tuning parameters to determine how the field affects the search results. Detailed below
  relevance?: kendra_IndexDocumentMetadataConfigurationUpdateRelevance;

  // A block that provides information about how the field is used during a search. Documented below. Detailed below
  search?: kendra_IndexDocumentMetadataConfigurationUpdateSearch;

  // The data type of the index field. Valid values are `STRING_VALUE`, `STRING_LIST_VALUE`, `LONG_VALUE`, `DATE_VALUE`.
  type?: string;
}

export function kendra_IndexDocumentMetadataConfigurationUpdate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the index field. Minimum length of 1. Maximum length of 30.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "relevance",
      "A block that provides manual tuning parameters to determine how the field affects the search results. Detailed below",
      () => kendra_IndexDocumentMetadataConfigurationUpdateRelevance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "search",
      "A block that provides information about how the field is used during a search. Documented below. Detailed below",
      () => kendra_IndexDocumentMetadataConfigurationUpdateSearch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The data type of the index field. Valid values are `STRING_VALUE`, `STRING_LIST_VALUE`, `LONG_VALUE`, `DATE_VALUE`.",
      () => [],
      true,
      false,
    ),
  ];
}
