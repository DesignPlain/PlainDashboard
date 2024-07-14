import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  mskconnect_ConnectorCapacityAutoscalingScaleInPolicy,
  mskconnect_ConnectorCapacityAutoscalingScaleInPolicy_GetTypes,
} from "./mskconnect_ConnectorCapacityAutoscalingScaleInPolicy";
import {
  mskconnect_ConnectorCapacityAutoscalingScaleOutPolicy,
  mskconnect_ConnectorCapacityAutoscalingScaleOutPolicy_GetTypes,
} from "./mskconnect_ConnectorCapacityAutoscalingScaleOutPolicy";

export interface mskconnect_ConnectorCapacityAutoscaling {
  // The number of microcontroller units (MCUs) allocated to each connector worker. Valid values: `1`, `2`, `4`, `8`. The default value is `1`.
  mcuCount?: number;

  // The minimum number of workers allocated to the connector.
  minWorkerCount?: number;

  // The scale-in policy for the connector. See below.
  scaleInPolicy?: mskconnect_ConnectorCapacityAutoscalingScaleInPolicy;

  // The scale-out policy for the connector. See below.
  scaleOutPolicy?: mskconnect_ConnectorCapacityAutoscalingScaleOutPolicy;

  // The maximum number of workers allocated to the connector.
  maxWorkerCount?: number;
}

export function mskconnect_ConnectorCapacityAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minWorkerCount",
      "The minimum number of workers allocated to the connector.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scaleInPolicy",
      "The scale-in policy for the connector. See below.",
      mskconnect_ConnectorCapacityAutoscalingScaleInPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scaleOutPolicy",
      "The scale-out policy for the connector. See below.",
      mskconnect_ConnectorCapacityAutoscalingScaleOutPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxWorkerCount",
      "The maximum number of workers allocated to the connector.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "mcuCount",
      "The number of microcontroller units (MCUs) allocated to each connector worker. Valid values: `1`, `2`, `4`, `8`. The default value is `1`.",
      [],
      false,
      false,
    ),
  ];
}
