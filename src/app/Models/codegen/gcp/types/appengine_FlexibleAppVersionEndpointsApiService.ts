import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appengine_FlexibleAppVersionEndpointsApiService {
  /*
Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".
By default, the rollout strategy for Endpoints is "FIXED". This means that Endpoints starts up with a particular configuration ID.
When a new configuration is rolled out, Endpoints must be given the new configuration ID. The configId field is used to give the configuration ID
and is required in this case.
Endpoints also has a rollout strategy called "MANAGED". When using this, Endpoints fetches the latest configuration and does not need
the configuration ID. In this case, configId must be omitted.
*/
  configId?: string;

  // Enable or disable trace sampling. By default, this is set to false for enabled.
  disableTraceSampling?: boolean;

  /*
Endpoints service name which is the name of the "service" resource in the Service Management API.
For example "myapi.endpoints.myproject.cloud.goog"
*/
  name?: string;

  /*
Endpoints rollout strategy. If FIXED, configId must be specified. If MANAGED, configId must be omitted.
Default value is `FIXED`.
Possible values are: `FIXED`, `MANAGED`.
*/
  rolloutStrategy?: string;
}

export function appengine_FlexibleAppVersionEndpointsApiService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'configId',
      'Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".\nBy default, the rollout strategy for Endpoints is "FIXED". This means that Endpoints starts up with a particular configuration ID.\nWhen a new configuration is rolled out, Endpoints must be given the new configuration ID. The configId field is used to give the configuration ID\nand is required in this case.\nEndpoints also has a rollout strategy called "MANAGED". When using this, Endpoints fetches the latest configuration and does not need\nthe configuration ID. In this case, configId must be omitted.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'disableTraceSampling',
      'Enable or disable trace sampling. By default, this is set to false for enabled.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Endpoints service name which is the name of the "service" resource in the Service Management API.\nFor example "myapi.endpoints.myproject.cloud.goog"',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'rolloutStrategy',
      'Endpoints rollout strategy. If FIXED, configId must be specified. If MANAGED, configId must be omitted.\nDefault value is `FIXED`.\nPossible values are: `FIXED`, `MANAGED`.',
      () => [],
      false,
      false,
    ),
  ];
}
