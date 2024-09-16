import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface connect_QueueOutboundCallerConfig {
  // Specifies the caller ID name.
  outboundCallerIdName?: string;

  // Specifies the caller ID number.
  outboundCallerIdNumberId?: string;

  // Specifies outbound whisper flow to be used during an outbound call.
  outboundFlowId?: string;
}

export function connect_QueueOutboundCallerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'outboundCallerIdName',
      'Specifies the caller ID name.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'outboundCallerIdNumberId',
      'Specifies the caller ID number.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'outboundFlowId',
      'Specifies outbound whisper flow to be used during an outbound call.',
      () => [],
      false,
      false,
    ),
  ];
}
