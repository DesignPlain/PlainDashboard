import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudsearch_DomainIndexField {
  // You can set whether this index should be searchable or not.
  search?: boolean;

  // You can enable the property to be sortable.
  sort?: boolean;

  // A comma-separated list of source fields to map to the field. Specifying a source field copies data from one field to another, enabling you to use the same source data in different ways by configuring different options for the fields.
  sourceFields?: string;

  // The analysis scheme you want to use for a `text` field. The analysis scheme specifies the language-specific text processing options that are used during indexing.
  analysisScheme?: string;

  // You can get facet information by enabling this.
  facet?: boolean;

  // You can highlight information.
  highlight?: boolean;

  // The field type. Valid values: `date`, `date-array`, `double`, `double-array`, `int`, `int-array`, `literal`, `literal-array`, `text`, `text-array`.
  type?: string;

  // The default value for the field. This value is used when no value is specified for the field in the document data.
  defaultValue?: string;

  // A unique name for the field. Field names must begin with a letter and be at least 3 and no more than 64 characters long. The allowed characters are: `a`-`z` (lower-case letters), `0`-`9`, and `_` (underscore). The name `score` is reserved and cannot be used as a field name.
  name?: string;

  // You can enable returning the value of all searchable fields.
  return?: boolean;
}

export function cloudsearch_DomainIndexField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "sort",
      "You can enable the property to be sortable.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceFields",
      "A comma-separated list of source fields to map to the field. Specifying a source field copies data from one field to another, enabling you to use the same source data in different ways by configuring different options for the fields.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "analysisScheme",
      "The analysis scheme you want to use for a `text` field. The analysis scheme specifies the language-specific text processing options that are used during indexing.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultValue",
      "The default value for the field. This value is used when no value is specified for the field in the document data.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "return",
      "You can enable returning the value of all searchable fields.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "search",
      "You can set whether this index should be searchable or not.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "facet",
      "You can get facet information by enabling this.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "highlight",
      "You can highlight information.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The field type. Valid values: `date`, `date-array`, `double`, `double-array`, `int`, `int-array`, `literal`, `literal-array`, `text`, `text-array`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "A unique name for the field. Field names must begin with a letter and be at least 3 and no more than 64 characters long. The allowed characters are: `a`-`z` (lower-case letters), `0`-`9`, and `_` (underscore). The name `score` is reserved and cannot be used as a field name.",
      [],
      true,
      false,
    ),
  ];
}
