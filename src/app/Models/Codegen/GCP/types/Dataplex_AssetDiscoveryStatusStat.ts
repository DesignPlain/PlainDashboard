import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_AssetDiscoveryStatusStat {
  // The count of data items within the referenced resource.
  DataItems?: number;

  // The number of stored data bytes within the referenced resource.
  DataSize?: number;

  // The count of fileset entities within the referenced resource.
  Filesets?: number;

  // The count of table entities within the referenced resource.
  Tables?: number;
}

export function Dataplex_AssetDiscoveryStatusStat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Tables",
      "The count of table entities within the referenced resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DataItems",
      "The count of data items within the referenced resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DataSize",
      "The number of stored data bytes within the referenced resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Filesets",
      "The count of fileset entities within the referenced resource.",
      [],
      false,
      false,
    ),
  ];
}
