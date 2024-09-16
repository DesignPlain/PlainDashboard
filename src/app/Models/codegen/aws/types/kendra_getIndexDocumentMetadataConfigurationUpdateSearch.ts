import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kendra_getIndexDocumentMetadataConfigurationUpdateSearch {
  // Determines whether the field is used in the search. If the Searchable field is true, you can use relevance tuning to manually tune how Amazon Kendra weights the field in the search. The default is `true` for `string` fields and `false` for `number` and `date` fields.
  searchable?: boolean;

  // Determines whether the field can be used to sort the results of a query. If you specify sorting on a field that does not have Sortable set to true, Amazon Kendra returns an exception. The default is `false`.
  sortable?: boolean;

  // Determines whether the field is returned in the query response. The default is `true`.
  displayable?: boolean;

  // Whether the field can be used to create search facets, a count of results for each value in the field. The default is `false`.
  facetable?: boolean;
}

export function kendra_getIndexDocumentMetadataConfigurationUpdateSearch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'displayable',
      'Determines whether the field is returned in the query response. The default is `true`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'facetable',
      'Whether the field can be used to create search facets, a count of results for each value in the field. The default is `false`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'searchable',
      'Determines whether the field is used in the search. If the Searchable field is true, you can use relevance tuning to manually tune how Amazon Kendra weights the field in the search. The default is `true` for `string` fields and `false` for `number` and `date` fields.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'sortable',
      'Determines whether the field can be used to sort the results of a query. If you specify sorting on a field that does not have Sortable set to true, Amazon Kendra returns an exception. The default is `false`.',
      () => [],
      true,
      false,
    ),
  ];
}
