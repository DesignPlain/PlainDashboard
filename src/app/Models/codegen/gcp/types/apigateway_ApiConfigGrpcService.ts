import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  apigateway_ApiConfigGrpcServiceSource,
  apigateway_ApiConfigGrpcServiceSource_GetTypes,
} from './apigateway_ApiConfigGrpcServiceSource';
import {
  apigateway_ApiConfigGrpcServiceFileDescriptorSet,
  apigateway_ApiConfigGrpcServiceFileDescriptorSet_GetTypes,
} from './apigateway_ApiConfigGrpcServiceFileDescriptorSet';

export interface apigateway_ApiConfigGrpcService {
  /*
Uncompiled proto files associated with the descriptor set, used for display purposes (server-side compilation is not supported). These should match the inputs to 'protoc' command used to generate fileDescriptorSet.
Structure is documented below.
*/
  sources?: Array<apigateway_ApiConfigGrpcServiceSource>;

  /*
Input only. File descriptor set, generated by protoc.
To generate, use protoc with imports and source info included. For an example test.proto file, the following command would put the value in a new file named out.pb.
$ protoc --include_imports --include_source_info test.proto -o out.pb
Structure is documented below.
*/
  fileDescriptorSet?: apigateway_ApiConfigGrpcServiceFileDescriptorSet;
}

export function apigateway_ApiConfigGrpcService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'sources',
      "Uncompiled proto files associated with the descriptor set, used for display purposes (server-side compilation is not supported). These should match the inputs to 'protoc' command used to generate fileDescriptorSet.\nStructure is documented below.",
      () => apigateway_ApiConfigGrpcServiceSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'fileDescriptorSet',
      'Input only. File descriptor set, generated by protoc.\nTo generate, use protoc with imports and source info included. For an example test.proto file, the following command would put the value in a new file named out.pb.\n$ protoc --include_imports --include_source_info test.proto -o out.pb\nStructure is documented below.',
      () => apigateway_ApiConfigGrpcServiceFileDescriptorSet_GetTypes(),
      true,
      true,
    ),
  ];
}
