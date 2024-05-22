import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dms_EndpointMongodbSettings {
  // Authentication database name. Not used when `auth_type` is `no`. Default is `admin`.
  authSource?: string;

  // Authentication type to access the MongoDB source endpoint. Default is `password`.
  authType?: string;

  // Number of documents to preview to determine the document organization. Use this setting when `nesting_level` is set to `one`. Default is `1000`.
  docsToInvestigate?: string;

  // Document ID. Use this setting when `nesting_level` is set to `none`. Default is `false`.
  extractDocId?: string;

  // Specifies either document or table mode. Default is `none`. Valid values are `one` (table mode) and `none` (document mode).
  nestingLevel?: string;

  // Authentication mechanism to access the MongoDB source endpoint. Default is `default`.
  authMechanism?: string;
}

export function dms_EndpointMongodbSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "nestingLevel",
      "Specifies either document or table mode. Default is `none`. Valid values are `one` (table mode) and `none` (document mode).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authMechanism",
      "Authentication mechanism to access the MongoDB source endpoint. Default is `default`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authSource",
      "Authentication database name. Not used when `auth_type` is `no`. Default is `admin`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authType",
      "Authentication type to access the MongoDB source endpoint. Default is `password`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "docsToInvestigate",
      "Number of documents to preview to determine the document organization. Use this setting when `nesting_level` is set to `one`. Default is `1000`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "extractDocId",
      "Document ID. Use this setting when `nesting_level` is set to `none`. Default is `false`.",
      [],
      false,
      false,
    ),
  ];
}
