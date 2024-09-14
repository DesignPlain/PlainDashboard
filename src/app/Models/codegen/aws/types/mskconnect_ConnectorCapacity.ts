import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  mskconnect_ConnectorCapacityProvisionedCapacity,
  mskconnect_ConnectorCapacityProvisionedCapacity_GetTypes,
} from "./mskconnect_ConnectorCapacityProvisionedCapacity";
import {
  mskconnect_ConnectorCapacityAutoscaling,
  mskconnect_ConnectorCapacityAutoscaling_GetTypes,
} from "./mskconnect_ConnectorCapacityAutoscaling";

export interface mskconnect_ConnectorCapacity {
  // Details about a fixed capacity allocated to a connector. See `provisioned_capacity` Block for details.
  provisionedCapacity?: mskconnect_ConnectorCapacityProvisionedCapacity;

  // Information about the auto scaling parameters for the connector. See `autoscaling` Block for details.
  autoscaling?: mskconnect_ConnectorCapacityAutoscaling;
}

export function mskconnect_ConnectorCapacity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "provisionedCapacity",
      "Details about a fixed capacity allocated to a connector. See `provisioned_capacity` Block for details.",
      () => mskconnect_ConnectorCapacityProvisionedCapacity_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "autoscaling",
      "Information about the auto scaling parameters for the connector. See `autoscaling` Block for details.",
      () => mskconnect_ConnectorCapacityAutoscaling_GetTypes(),
      false,
      false,
    ),
  ];
}
