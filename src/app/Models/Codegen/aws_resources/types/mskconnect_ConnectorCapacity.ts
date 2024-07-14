import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  mskconnect_ConnectorCapacityAutoscaling,
  mskconnect_ConnectorCapacityAutoscaling_GetTypes,
} from "./mskconnect_ConnectorCapacityAutoscaling";
import {
  mskconnect_ConnectorCapacityProvisionedCapacity,
  mskconnect_ConnectorCapacityProvisionedCapacity_GetTypes,
} from "./mskconnect_ConnectorCapacityProvisionedCapacity";

export interface mskconnect_ConnectorCapacity {
  // Information about the auto scaling parameters for the connector. See below.
  autoscaling?: mskconnect_ConnectorCapacityAutoscaling;

  // Details about a fixed capacity allocated to a connector. See below.
  provisionedCapacity?: mskconnect_ConnectorCapacityProvisionedCapacity;
}

export function mskconnect_ConnectorCapacity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "autoscaling",
      "Information about the auto scaling parameters for the connector. See below.",
      mskconnect_ConnectorCapacityAutoscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "provisionedCapacity",
      "Details about a fixed capacity allocated to a connector. See below.",
      mskconnect_ConnectorCapacityProvisionedCapacity_GetTypes(),
      false,
      false,
    ),
  ];
}
