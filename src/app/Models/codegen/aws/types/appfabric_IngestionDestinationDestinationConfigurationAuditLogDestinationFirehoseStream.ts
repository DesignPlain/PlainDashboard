import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream {
  //
  streamName?: string;
}

export function appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "streamName",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
