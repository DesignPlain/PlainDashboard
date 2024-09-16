import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_AgentAgentActionGroupApiSchemaS3,
  bedrock_AgentAgentActionGroupApiSchemaS3_GetTypes,
} from './bedrock_AgentAgentActionGroupApiSchemaS3';

export interface bedrock_AgentAgentActionGroupApiSchema {
  /*
JSON or YAML-formatted payload defining the OpenAPI schema for the action group.
Only one of `payload` or `s3` can be specified.
*/
  payload?: string;

  /*
Details about the S3 object containing the OpenAPI schema for the action group. See `s3` Block for details.
Only one of `s3` or `payload` can be specified.
*/
  s3?: bedrock_AgentAgentActionGroupApiSchemaS3;
}

export function bedrock_AgentAgentActionGroupApiSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'payload',
      'JSON or YAML-formatted payload defining the OpenAPI schema for the action group.\nOnly one of `payload` or `s3` can be specified.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      's3',
      'Details about the S3 object containing the OpenAPI schema for the action group. See `s3` Block for details.\nOnly one of `s3` or `payload` can be specified.',
      () => bedrock_AgentAgentActionGroupApiSchemaS3_GetTypes(),
      false,
      false,
    ),
  ];
}
