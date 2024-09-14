import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_DataSourceParametersRedshift {
  // The ID of the cluster to which to connect.
  clusterId?: string;

  // The database to which to connect.
  database?: string;

  // The host to which to connect.
  host?: string;

  // The port to which to connect.
  port?: number;
}

export function quicksight_DataSourceParametersRedshift_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "database",
      "The database to which to connect.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "host",
      "The host to which to connect.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port to which to connect.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterId",
      "The ID of the cluster to which to connect.",
      () => [],
      false,
      false,
    ),
  ];
}
