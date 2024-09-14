import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_FleetFleetInstanceSet {
  // Indicates if the instance that was launched is a Spot Instance or On-Demand Instance.
  lifecycle?: string;

  // The value is `Windows` for Windows instances. Otherwise, the value is blank.
  platform?: string;

  // The IDs of the instances.
  instanceIds?: Array<string>;

  // The instance type.
  instanceType?: string;
}

export function ec2_FleetFleetInstanceSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "lifecycle",
      "Indicates if the instance that was launched is a Spot Instance or On-Demand Instance.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "platform",
      "The value is `Windows` for Windows instances. Otherwise, the value is blank.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceIds",
      "The IDs of the instances.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "The instance type.",
      () => [],
      false,
      false,
    ),
  ];
}
