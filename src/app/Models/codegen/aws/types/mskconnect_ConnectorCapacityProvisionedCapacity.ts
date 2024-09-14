import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface mskconnect_ConnectorCapacityProvisionedCapacity {
  // The number of microcontroller units (MCUs) allocated to each connector worker. Valid values: `1`, `2`, `4`, `8`. The default value is `1`.
  mcuCount?: number;

  // The number of workers that are allocated to the connector.
  workerCount?: number;
}

export function mskconnect_ConnectorCapacityProvisionedCapacity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "mcuCount",
      "The number of microcontroller units (MCUs) allocated to each connector worker. Valid values: `1`, `2`, `4`, `8`. The default value is `1`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "workerCount",
      "The number of workers that are allocated to the connector.",
      () => [],
      true,
      false,
    ),
  ];
}
