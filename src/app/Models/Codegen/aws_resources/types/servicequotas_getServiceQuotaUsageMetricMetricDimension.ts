import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface servicequotas_getServiceQuotaUsageMetricMetricDimension {
  //
  service?: string;

  //
  type?: string;

  //
  class?: string;

  //
  resource?: string;
}

export function servicequotas_getServiceQuotaUsageMetricMetricDimension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "service", "", [], true, false),
    new DynamicUIProps(InputType.String, "type", "", [], true, false),
    new DynamicUIProps(InputType.String, "class", "", [], true, false),
    new DynamicUIProps(InputType.String, "resource", "", [], true, false),
  ];
}
