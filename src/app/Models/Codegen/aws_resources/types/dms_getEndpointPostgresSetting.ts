import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dms_getEndpointPostgresSetting {
  //
  failTasksOnLobTruncation?: boolean;

  //
  heartbeatFrequency?: number;

  //
  mapLongVarcharAs?: string;

  //
  pluginName?: string;

  //
  babelfishDatabaseName?: string;

  //
  captureDdls?: boolean;

  //
  heartbeatEnable?: boolean;

  //
  slotName?: string;

  //
  afterConnectScript?: string;

  //
  databaseMode?: string;

  //
  ddlArtifactsSchema?: string;

  //
  mapJsonbAsClob?: boolean;

  //
  maxFileSize?: number;

  //
  executeTimeout?: number;

  //
  heartbeatSchema?: string;

  //
  mapBooleanAsBoolean?: boolean;
}

export function dms_getEndpointPostgresSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "maxFileSize", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "ddlArtifactsSchema",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "heartbeatFrequency",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "pluginName", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "heartbeatEnable", "", [], true, false),
    new DynamicUIProps(InputType.String, "slotName", "", [], true, false),
    new DynamicUIProps(InputType.Number, "executeTimeout", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "heartbeatSchema",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "failTasksOnLobTruncation",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "babelfishDatabaseName",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "afterConnectScript",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "mapJsonbAsClob", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "mapLongVarcharAs",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "databaseMode", "", [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "mapBooleanAsBoolean",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "captureDdls", "", [], true, false),
  ];
}
