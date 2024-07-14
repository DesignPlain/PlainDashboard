import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface monitoring_SloBasicSliLatency {
  /*
A duration string, e.g. 10s.
Good service is defined to be the count of requests made to
this service that return in no more than threshold.
*/
  threshold?: string;
}

export function monitoring_SloBasicSliLatency_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "threshold",
      "A duration string, e.g. 10s.\nGood service is defined to be the count of requests made to\nthis service that return in no more than threshold.",
      [],
      true,
      false,
    ),
  ];
}
