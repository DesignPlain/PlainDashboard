import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataplex_AssetDiscoveryStatusStat {
  // The number of stored data bytes within the referenced resource.
  dataSize?: number;

  // The count of fileset entities within the referenced resource.
  filesets?: number;

  // The count of table entities within the referenced resource.
  tables?: number;

  // The count of data items within the referenced resource.
  dataItems?: number;
}

export function dataplex_AssetDiscoveryStatusStat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "dataSize",
      "The number of stored data bytes within the referenced resource.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "filesets",
      "The count of fileset entities within the referenced resource.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "tables",
      "The count of table entities within the referenced resource.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "dataItems",
      "The count of data items within the referenced resource.",
      () => [],
      false,
      false,
    ),
  ];
}
