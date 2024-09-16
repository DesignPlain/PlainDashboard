import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kendra_getIndexDocumentMetadataConfigurationUpdateRelevance,
  kendra_getIndexDocumentMetadataConfigurationUpdateRelevance_GetTypes,
} from './kendra_getIndexDocumentMetadataConfigurationUpdateRelevance';
import {
  kendra_getIndexDocumentMetadataConfigurationUpdateSearch,
  kendra_getIndexDocumentMetadataConfigurationUpdateSearch_GetTypes,
} from './kendra_getIndexDocumentMetadataConfigurationUpdateSearch';

export interface kendra_getIndexDocumentMetadataConfigurationUpdate {
  // Name of the index field. Minimum length of 1. Maximum length of 30.
  name?: string;

  // Block that provides manual tuning parameters to determine how the field affects the search results. Documented below.
  relevances?: Array<kendra_getIndexDocumentMetadataConfigurationUpdateRelevance>;

  // Block that provides information about how the field is used during a search. Documented below.
  searches?: Array<kendra_getIndexDocumentMetadataConfigurationUpdateSearch>;

  // Data type of the index field. Valid values are `STRING_VALUE`, `STRING_LIST_VALUE`, `LONG_VALUE`, `DATE_VALUE`.
  type?: string;
}

export function kendra_getIndexDocumentMetadataConfigurationUpdate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the index field. Minimum length of 1. Maximum length of 30.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'relevances',
      'Block that provides manual tuning parameters to determine how the field affects the search results. Documented below.',
      () =>
        kendra_getIndexDocumentMetadataConfigurationUpdateRelevance_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'searches',
      'Block that provides information about how the field is used during a search. Documented below.',
      () => kendra_getIndexDocumentMetadataConfigurationUpdateSearch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Data type of the index field. Valid values are `STRING_VALUE`, `STRING_LIST_VALUE`, `LONG_VALUE`, `DATE_VALUE`.',
      () => [],
      true,
      false,
    ),
  ];
}
