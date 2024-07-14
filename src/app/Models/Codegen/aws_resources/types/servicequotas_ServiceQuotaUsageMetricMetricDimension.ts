import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface servicequotas_ServiceQuotaUsageMetricMetricDimension {
  //
  type?: string;

  //
  class?: string;

  //
  resource?: string;

  //
  service?: string;
}

export function servicequotas_ServiceQuotaUsageMetricMetricDimension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "class", "", [], false, false),
    new DynamicUIProps(InputType.String, "resource", "", [], false, false),
    new DynamicUIProps(InputType.String, "service", "", [], false, false),
    new DynamicUIProps(InputType.String, "type", "", [], false, false),
  ];
}
