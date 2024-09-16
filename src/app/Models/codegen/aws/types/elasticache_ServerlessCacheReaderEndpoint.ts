import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface elasticache_ServerlessCacheReaderEndpoint {
  // The DNS hostname of the cache node.
  address?: string;

  // The port number that the cache engine is listening on. Set as integer.
  port?: number;
}

export function elasticache_ServerlessCacheReaderEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'address',
      'The DNS hostname of the cache node.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'port',
      'The port number that the cache engine is listening on. Set as integer.',
      () => [],
      true,
      false,
    ),
  ];
}
