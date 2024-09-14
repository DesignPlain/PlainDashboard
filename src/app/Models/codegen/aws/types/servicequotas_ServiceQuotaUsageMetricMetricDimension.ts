import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface servicequotas_ServiceQuotaUsageMetricMetricDimension {
  //
  service?: string;

  //
  type?: string;

  //
  class?: string;

  //
  resource?: string;
}

export function servicequotas_ServiceQuotaUsageMetricMetricDimension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resource",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "service", "", () => [], false, false),
    new DynamicUIProps(InputType.String, "type", "", () => [], false, false),
    new DynamicUIProps(InputType.String, "class", "", () => [], false, false),
  ];
}
