import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataplex_AssetDiscoveryStatusStat {
  // The count of table entities within the referenced resource.
  tables?: number;

  // The count of data items within the referenced resource.
  dataItems?: number;

  // The number of stored data bytes within the referenced resource.
  dataSize?: number;

  // The count of fileset entities within the referenced resource.
  filesets?: number;
}

export function dataplex_AssetDiscoveryStatusStat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "dataSize",
      "The number of stored data bytes within the referenced resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "filesets",
      "The count of fileset entities within the referenced resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "tables",
      "The count of table entities within the referenced resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "dataItems",
      "The count of data items within the referenced resource.",
      [],
      false,
      false,
    ),
  ];
}
