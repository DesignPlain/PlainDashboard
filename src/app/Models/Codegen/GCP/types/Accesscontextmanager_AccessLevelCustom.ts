import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_AccessLevelCustomExpr,
  Accesscontextmanager_AccessLevelCustomExpr_GetTypes,
} from "./Accesscontextmanager_AccessLevelCustomExpr";

export interface Accesscontextmanager_AccessLevelCustom {
  /*
Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language.
This page details the objects and attributes that are used to the build the CEL expressions for
custom access levels - https://cloud.google.com/access-context-manager/docs/custom-access-level-spec.
Structure is documented below.
*/
  Expr?: Accesscontextmanager_AccessLevelCustomExpr;
}

export function Accesscontextmanager_AccessLevelCustom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Expr",
      "Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language.\nThis page details the objects and attributes that are used to the build the CEL expressions for\ncustom access levels - https://cloud.google.com/access-context-manager/docs/custom-access-level-spec.\nStructure is documented below.",
      Accesscontextmanager_AccessLevelCustomExpr_GetTypes(),
      true,
      false,
    ),
  ];
}
