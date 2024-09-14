import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dms_getEndpointPostgresSetting {
  //
  afterConnectScript?: string;

  //
  babelfishDatabaseName?: string;

  //
  captureDdls?: boolean;

  //
  databaseMode?: string;

  //
  heartbeatFrequency?: number;

  //
  maxFileSize?: number;

  //
  failTasksOnLobTruncation?: boolean;

  //
  heartbeatEnable?: boolean;

  //
  mapBooleanAsBoolean?: boolean;

  //
  mapJsonbAsClob?: boolean;

  //
  ddlArtifactsSchema?: string;

  //
  executeTimeout?: number;

  //
  heartbeatSchema?: string;

  //
  mapLongVarcharAs?: string;

  //
  pluginName?: string;

  //
  slotName?: string;
}

export function dms_getEndpointPostgresSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "pluginName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "afterConnectScript",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "babelfishDatabaseName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "mapBooleanAsBoolean",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseMode",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "failTasksOnLobTruncation",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "executeTimeout",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mapLongVarcharAs",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "heartbeatFrequency",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "mapJsonbAsClob",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ddlArtifactsSchema",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "heartbeatSchema",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "slotName", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "captureDdls",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxFileSize",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "heartbeatEnable",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
