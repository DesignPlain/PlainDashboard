import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Firestore_FieldIndexConfigIndex {
  /*
Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=, !=.
Only one of `order` and `arrayConfig` can be specified.
Possible values are: `ASCENDING`, `DESCENDING`.
*/
  Order?: string;

  /*
The scope at which a query is run. Collection scoped queries require you specify
the collection at query time. Collection group scope allows queries across all
collections with the same id.
Default value is `COLLECTION`.
Possible values are: `COLLECTION`, `COLLECTION_GROUP`.
*/
  QueryScope?: string;

  /*
Indicates that this field supports operations on arrayValues. Only one of `order` and `arrayConfig` can
be specified.
Possible values are: `CONTAINS`.
*/
  ArrayConfig?: string;
}

export function Firestore_FieldIndexConfigIndex_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Order",
      "Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=, !=.\nOnly one of `order` and `arrayConfig` can be specified.\nPossible values are: `ASCENDING`, `DESCENDING`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "QueryScope",
      "The scope at which a query is run. Collection scoped queries require you specify\nthe collection at query time. Collection group scope allows queries across all\ncollections with the same id.\nDefault value is `COLLECTION`.\nPossible values are: `COLLECTION`, `COLLECTION_GROUP`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ArrayConfig",
      "Indicates that this field supports operations on arrayValues. Only one of `order` and `arrayConfig` can\nbe specified.\nPossible values are: `CONTAINS`.",
      [],
      false,
      false,
    ),
  ];
}
