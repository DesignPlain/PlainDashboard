import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface servicequotas_getServiceQuotaUsageMetricMetricDimension {
  //
  class?: string;

  //
  resource?: string;

  //
  service?: string;

  //
  type?: string;
}

export function servicequotas_getServiceQuotaUsageMetricMetricDimension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "class", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "resource", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "service", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "type", "", () => [], true, false),
  ];
}
