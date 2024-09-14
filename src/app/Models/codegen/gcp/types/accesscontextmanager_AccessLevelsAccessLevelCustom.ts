import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  accesscontextmanager_AccessLevelsAccessLevelCustomExpr,
  accesscontextmanager_AccessLevelsAccessLevelCustomExpr_GetTypes,
} from "./accesscontextmanager_AccessLevelsAccessLevelCustomExpr";

export interface accesscontextmanager_AccessLevelsAccessLevelCustom {
  /*
Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language.
This page details the objects and attributes that are used to the build the CEL expressions for
custom access levels - https://cloud.google.com/access-context-manager/docs/custom-access-level-spec.
Structure is documented below.
*/
  expr?: accesscontextmanager_AccessLevelsAccessLevelCustomExpr;
}

export function accesscontextmanager_AccessLevelsAccessLevelCustom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "expr",
      "Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language.\nThis page details the objects and attributes that are used to the build the CEL expressions for\ncustom access levels - https://cloud.google.com/access-context-manager/docs/custom-access-level-spec.\nStructure is documented below.",
      () => accesscontextmanager_AccessLevelsAccessLevelCustomExpr_GetTypes(),
      true,
      false,
    ),
  ];
}
