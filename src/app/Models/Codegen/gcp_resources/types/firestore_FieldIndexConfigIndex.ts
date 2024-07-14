import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface firestore_FieldIndexConfigIndex {
  /*
Indicates that this field supports operations on arrayValues. Only one of `order` and `arrayConfig` can
be specified.
Possible values are: `CONTAINS`.
*/
  arrayConfig?: string;

  /*
Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=, !=.
Only one of `order` and `arrayConfig` can be specified.
Possible values are: `ASCENDING`, `DESCENDING`.
*/
  order?: string;

  /*
The scope at which a query is run. Collection scoped queries require you specify
the collection at query time. Collection group scope allows queries across all
collections with the same id.
Default value is `COLLECTION`.
Possible values are: `COLLECTION`, `COLLECTION_GROUP`.
*/
  queryScope?: string;
}

export function firestore_FieldIndexConfigIndex_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "queryScope",
      "The scope at which a query is run. Collection scoped queries require you specify\nthe collection at query time. Collection group scope allows queries across all\ncollections with the same id.\nDefault value is `COLLECTION`.\nPossible values are: `COLLECTION`, `COLLECTION_GROUP`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "arrayConfig",
      "Indicates that this field supports operations on arrayValues. Only one of `order` and `arrayConfig` can\nbe specified.\nPossible values are: `CONTAINS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "order",
      "Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=, !=.\nOnly one of `order` and `arrayConfig` can be specified.\nPossible values are: `ASCENDING`, `DESCENDING`.",
      [],
      false,
      false,
    ),
  ];
}
