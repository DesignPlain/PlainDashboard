import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface neptune_ClusterParameterGroupParameter {
  // Valid values are `immediate` and `pending-reboot`. Defaults to `pending-reboot`.
  applyMethod?: string;

  // The name of the neptune parameter.
  name?: string;

  // The value of the neptune parameter.
  value?: string;
}

export function neptune_ClusterParameterGroupParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "applyMethod",
      "Valid values are `immediate` and `pending-reboot`. Defaults to `pending-reboot`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the neptune parameter.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the neptune parameter.",
      [],
      true,
      false,
    ),
  ];
}
